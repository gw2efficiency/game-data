import fetch from 'node-fetch'
import querystring from 'querystring'
import fs from 'fs'
import { readCacheFile } from '../_helpers/cache'
import { load, CheerioAPI } from 'cheerio'
import path from 'path'
import { escapeQuotes } from '../_helpers/generate'
import escapeRegex from 'escape-regex-string'
import pLimit from 'p-limit'
import { GameDataFish } from './data'

const BASE_API_URL = 'https://wiki.guildwars2.com/api.php?'

type Rarity =
  | 'Junk'
  | 'Basic'
  | 'Fine'
  | 'Masterwork'
  | 'Rare'
  | 'Exotic'
  | 'Ascended'
  | 'Legendary'

type SMWResult = {
  fulltext: string
  printouts: {
    'Has canonical name': Array<string>
    'Has game id': Array<number>
    'Has item rarity': Array<Rarity>
    'Has collection hint': Array<string>
    'Is part of collection': Array<{ fulltext: string }>
  }
}

const rarityMapping = {
  Junk: 0,
  Basic: 1,
  Fine: 2,
  Masterwork: 3,
  Rare: 4,
  Exotic: 5,
  Ascended: 6,
  Legendary: 7,
} as const

interface UApiAchievementGroup {
  id: number
  categories: Array<UApiAchievementCategory>
}

interface UApiAchievementCategory {
  id: number
  achievements: Array<UApiAchievement>
}

interface UApiAchievement {
  id: number
  name: string
  bits: Array<UApiAchievementBit>
}

interface UApiAchievementBit {
  id: number
}

type FishDataAchievement = {
  id: number
  name: string
  bit: number
}

type _FishData = {
  id: number
  name: string
  rarity: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7
  locationString?: string
  fishingHoleString: string
  timeOfDay: string[]
  openWater: boolean
  fishingHole: string[]
  favoredBait: string
  fishingPower: number
  achievement: FishDataAchievement
  avidAchievement: FishDataAchievement
}

const fishingAchievementIds = [
  8554,
  8246,
  8168,
  6402,
  6506,
  6466,
  6258,
  6192,
  6342,
  6264,
  6336,
  7804,
  7114,
  6339,
  6489,
  6250,
  6106,
  6509,
  6317,
  6153,
  6179,
  6227,
  6363,
  6475,
  6344,
  6263,
  6068,
  6484,
  6330,
  6393,
  6471,
  6110,
  6471,
  6224,
]

const BLACKLISTED_IDS = [96494, 96899]

const FILE_PATH = path.join(__dirname, './data.ts')
const START_MARKER = `// -- GENERATE-START --`
const END_MARKER = `// -- GENERATE-END --`
const REPLACE_REGEX = new RegExp(`${escapeRegex(START_MARKER)}(.*)${escapeRegex(END_MARKER)}`, 's')

async function run() {
  // Find fishing achievements
  const achievementGroups = await readCacheFile<Array<UApiAchievementGroup>>('achievements.json')
  const achievements = achievementGroups
    .flatMap((group) => group.categories)
    .flatMap((category) => category.achievements)
    .filter((achievement) => fishingAchievementIds.includes(achievement.id))

  // Find ids of fish within achievements
  const fishingItemIds = achievements
    .flatMap((achievement) => achievement.bits)
    .map((bit) => bit.id)

  const uniqueFishingItemIds = [...new Set(fishingItemIds)]

  // Fetch fish data from wiki
  const wikiFishData = await fetchFishEntries(uniqueFishingItemIds)
  // Transform the wiki data
  const _fishData = wikiFishData.flatMap((fish) => {
    const result = transformFishEntry(fish, achievements)
    return result && !BLACKLISTED_IDS.includes(result.id) && result.achievement ? [result] : []
  })

  // Holes that are not picked up by any fish
  const extraHoles = [
    'Open Water',
    'Polluted Lake Fish',
    'Deep Fishing Hole',
    'Mysterious Waters Fish',
    'Deep Tower Fish',
    'Deep World-Class Fish',
    'Lowland Brackish Fish',
    'Brackish Janthir Fish',
    'Lowland Freshwater Fish',
    'Freshwater Janthir Fish',
    'Lowland Shore Fish',
    'Shore Saltwater Janthir Fish',
    'Lowland Offshore Fish',
    'Offshore Saltwater Janthir Fish',
  ]

  const uniqueFishingHoles = Array.from(
    new Set([
      ..._fishData.flatMap((fish) =>
        fish.fishingHole.filter((hole) => hole !== 'None' && hole !== 'Any')
      ),
      ...extraHoles,
    ])
  )

  // End result for fish data with fishing power and attempt to fix weird data for holes
  const fishData = await enrichFishWithFishingPower(_fishData, uniqueFishingHoles)

  const generatedItems =
    fishData
      .map((fish) => {
        return [
          `  {`,
          `id: ${fish.id},`,
          `name: '${escapeQuotes(fish.name)}',`,
          `rarity: ${fish.rarity},`,
          `location: '${escapeQuotes(fish.location)}',`,
          `timeOfDay: [${fish.timeOfDay.map((time) => `'${time}'`).join(', ')}],`,
          `openWater: ${fish.openWater},`,
          `fishingHole: [${fish.fishingHole.map((hole) => `'${hole}'`).join(', ')}],`,
          `favoredBait: '${escapeQuotes(fish.favoredBait)}',`,
          `fishingPower: ${fish.fishingPower},`,
          `achievement: {`,
          `id: ${fish.achievement.id},`,
          `name: '${escapeQuotes(fish.achievement.name)}',`,
          `bit: ${fish.achievement.bit}`,
          `},`,
          `avidAchievement: {`,
          `id: ${fish.avidAchievement.id},`,
          `name: '${escapeQuotes(fish.achievement.name)}',`,
          `bit: ${fish.avidAchievement.bit}`,
          `}`,
          `}`,
        ].join(' ')
      })
      .join(',\n') + ','

  const file = fs.readFileSync(FILE_PATH, 'utf-8')
  const content = file.replace(REPLACE_REGEX, `${START_MARKER}\n${generatedItems}\n  ${END_MARKER}`)
  fs.writeFileSync(FILE_PATH, content, 'utf-8')
}

async function fetchFishEntries(ids: Array<number>) {
  const limit = pLimit(10)
  const results: SMWResult[] = []

  const tasks = ids.map((id, i) =>
    limit(async () => {
      const query = `[[Has game id::${id}]]
        |?Has canonical name
        |?Has game id
        |?Has item rarity
        |?Has collection hint
        |?Is part of collection`

      const res = await queryApi(query)
      if (res.length) results.push(...res)
    })
  )

  await Promise.all(tasks)
  return results
}

function transformFishEntry(fish: SMWResult, achievements: UApiAchievement[]) {
  const id = fish.printouts['Has game id'][0]
  const name = fish.printouts['Has canonical name'][0]
  const rarityString = fish.printouts['Has item rarity'][0]
  const rarity = rarityMapping[rarityString]

  const collections = fish.printouts['Is part of collection'] || []

  const fisherCollection = collections.find((collection) => collection.fulltext.endsWith('Fisher'))
  if (!fisherCollection) return

  const avidFisherCollection = collections.find(
    (collection) => collection.fulltext.startsWith('Avid') && collection.fulltext.endsWith('Fisher')
  )
  const achievement = achievements.find((a) => a.name === fisherCollection?.fulltext)
  if (!achievement) return

  const avidAchievement = achievements.find((a) => a.name === avidFisherCollection?.fulltext)

  const achievementBit = achievement.bits.findIndex((bit) => bit.id === id)
  const _avidAchievementBit = avidAchievement?.bits.findIndex((bit) => bit.id === id)
  const avidAchievementBit = _avidAchievementBit !== undefined ? _avidAchievementBit : -1

  const hintString = fish.printouts['Has collection hint'][0]
  const [locationString, fishingHoleString, favoredBaitString, timeOfDayString] = hintString
    .split('<br>')
    .map((s) => s.trim())

  const [fishingHole, openWater] = parseFishingHole(fishingHoleString)

  const favoredBait = parseFavoredBait(favoredBaitString)

  const timeOfDay = parseTimeOfDay(timeOfDayString)

  return {
    id,
    name,
    rarity,
    locationString,
    fishingHoleString,
    timeOfDay,
    openWater,
    fishingHole,
    favoredBait,
    fishingPower: 0,
    achievement: { id: achievement.id, name: achievement.name, bit: achievementBit },
    avidAchievement: {
      id: avidAchievement ? avidAchievement.id : -1,
      name: avidAchievement ? avidAchievement.name : '',
      bit: avidAchievementBit,
    },
  }
}

async function queryApi(query: string, offset = 0): Promise<SMWResult[]> {
  const parameters = {
    action: 'ask',
    format: 'json',
    query: `${query}|limit=500|offset=${offset}`,
  }

  const url = BASE_API_URL + querystring.stringify(parameters)
  const response = await fetch(url)
  const json = await response.json()

  const results: SMWResult[] = Object.values(json.query?.results || {})

  if (json['query-continue-offset']) {
    const more = await queryApi(query, json['query-continue-offset'])
    return results.concat(more)
  }

  return results
}

function parseFishingHole(fishingHoleString: string): [Array<string>, boolean] {
  const prefix = '[[Fishing Hole]]: '
  // Fallback if there is no such string
  if (!fishingHoleString || !fishingHoleString.startsWith(prefix)) return [['None'], true]

  const afterPrefix = fishingHoleString.slice(prefix.length).trim()

  // Find all holes inside [[...]]
  let holes = Array.from(afterPrefix.matchAll(/\[\[([^\]]+?)\]\]/g), (m) => m[1].trim())

  // Find all holes marked as (Higher Chance)
  const higherChanceHoles = Array.from(
    afterPrefix.matchAll(/\[\[([^\]]+?)\]\]\s*\(Higher Chance\)/g),
    (m) => m[1].trim()
  )

  // Any and None are plain text
  if (afterPrefix.includes('Any')) holes.push('Any')
  if (afterPrefix.includes('None')) holes.push('None')

  // Check open water and remove it from holes
  const openWaterIndex = holes.indexOf('Open Water')
  const openWater = openWaterIndex !== -1
  if (openWater) holes.splice(openWaterIndex, 1)

  // Prioritize higher chance if possible
  const filteredHigherChance = higherChanceHoles.filter((h) => h !== 'Open Water')
  if (filteredHigherChance.length) holes = filteredHigherChance

  // Fallback to be safe, test will fail if None is with openWater = false
  if (!holes.length) holes = ['None']

  return [holes, openWater]
}

function parseFavoredBait(favoredBaitString: string): string {
  const prefix = 'Favored [[Bait]]: '
  if (!favoredBaitString || !favoredBaitString.startsWith(prefix)) return 'Any'

  const afterPrefix = favoredBaitString.slice(prefix.length).trim()

  if (afterPrefix === 'Any') return 'Any'

  // Match [[...]]
  const match = afterPrefix.match(/\[\[([^\]]+)\]\]/)
  // Fallback
  if (!match) return afterPrefix

  const matchContents = match[1]

  // Split and take first part (item name)
  let name = matchContents.split('|')[0]

  // Format name
  name = name.replace(/\s*\(.*?\)/, '').trim()

  return name
}

function parseTimeOfDay(timeOfDayString: string): Array<string> {
  const prefix = '[[Day and night|Time of Day]]: '
  // Fallback
  if (!timeOfDayString || !timeOfDayString.startsWith(prefix)) return ['Any']

  const afterPrefix = timeOfDayString.slice(prefix.length).trim()

  // Prioritize higher chance if possible
  const higherChanceMatch = afterPrefix.match(/([^,]+?)\s*\(Higher Chance\)/)
  if (higherChanceMatch) {
    const time = higherChanceMatch[1].trim()
    return time === 'Dusk/Dawn' ? ['Dusk', 'Dawn'] : [normalizeTime(time)]
  }

  // Remove all parts with low chance
  const parts = afterPrefix.split(',')
  const filtered = parts.map((p) => p.trim()).filter((p) => !/\(Low Chance\)/.test(p))

  const result = filtered.flatMap((time) =>
    time === 'Dusk/Dawn' ? ['Dusk', 'Dawn'] : [normalizeTime(time)]
  )

  return result.length ? result : ['Any']
}

// Normalize time strings
function normalizeTime(time: string): string {
  return time.replace(/time$/i, '').trim()
}

async function fetchFishingPowerMap(fishingHole: string): Promise<Record<string, number>> {
  const url = `https://wiki.guildwars2.com/wiki/${encodeURIComponent(
    fishingHole.replace(/ /g, '_')
  )}`
  const res = await fetch(url)
  if (!res.ok) throw new Error(`Failed to fetch ${url}`)
  const html = await res.text()
  const $: CheerioAPI = load(html)

  const h2 = $('span#Recommended_fishing_power').closest('h2')
  if (!h2.length) return {}

  const table = h2.nextAll('table').first()
  if (!table.length) return {}

  const headers = table
    .find('tr')
    .first()
    .find('th')
    .map((_, th) => $(th).text().trim())
    .get()
  const isPowerFirst = headers[0].includes('Recommended')

  const map: Record<string, number> = {}

  table
    .find('tr')
    .slice(1)
    .each((_, tr) => {
      const $tr = $(tr)
      const tds = $tr.find('td')
      const powerText = tds
        .eq(isPowerFirst ? 0 : 1)
        .text()
        .trim()
      const regionCell = tds.eq(isPowerFirst ? 1 : 0)

      if (!powerText) return
      const powerMatch = powerText.match(/(\d+)/)
      if (!powerMatch) return

      const power = parseInt(powerMatch[1], 10)

      regionCell.find('a').each((_, a) => {
        const region = $(a).text().trim()
        if (!region || region === 'Labyrinthine Cliffs') return
        const key = (fishingHole + region).toLowerCase().replace(/\s+/g, '')
        map[key] = power
      })
    })

  return map
}

async function fetchAllFishingPowerMaps(fishingHoles: string[]) {
  const combinedMap: Record<string, number> = {}

  for (const hole of fishingHoles) {
    const map = await fetchFishingPowerMap(hole).catch(() => null)
    if (map) Object.assign(combinedMap, map)
  }

  return combinedMap
}

async function enrichFishWithFishingPower(
  fishList: Array<_FishData>,
  uniqueFishingHoles: Array<string>
): Promise<Array<GameDataFish>> {
  const fishingPowerMap = await fetchAllFishingPowerMaps(uniqueFishingHoles)

  const elonaRegions = [
    'Crystal Desert',
    'Crystal Oasis',
    'Desert Highlands',
    'Elon Riverlands',
    'The Desolation',
    'Domain of Vabbi',
    'Domain of Istan',
    'Sandswept Isles',
    'Domain of Kourna',
    'Jahai Bluffs',
    'Dragonfall',
  ].map((region) => region.toLowerCase())

  const enrichedFish = fishList.map((fish) => {
    const fishCopy = { ...fish } as any

    const locationString = fishCopy.locationString || ''
    fishCopy.location = fishCopy.locationString
      .replace(/\[\[([^\]|]+)(?:\|[^\]]+)?]]/g, '$1')
      .replace(/\[\[|\]\]/g, '')
    const matches = [...locationString.matchAll(/\[\[([^\]|]+)(?:\|[^\]]+)?]]/g)]
    const locations = matches.length
      ? matches.flatMap((m) => (/elona/i.test(m[1]) ? elonaRegions : [m[1].trim().toLowerCase()]))
      : []
    const holes = [...fishCopy.fishingHole]

    if (holes.includes('None') && !fishCopy.openWater) {
      const prefix = '[[Fishing Hole]]: '
      const afterPrefix = fishCopy.fishingHoleString.slice(prefix.length).trim()
      const location = locations[0]?.split(' ')[0].toLowerCase() || ''
      const fixedFishingHole: string[] = []
      const afterPrefixLower = afterPrefix.toLowerCase()

      const matchesKeywords = (hole: string, keywords: string[]) => {
        const holeLower = hole.toLowerCase()
        return (
          (location === '' || holeLower.includes(location)) &&
          keywords.some((key) => holeLower.includes(key))
        )
      }

      if (afterPrefixLower.includes('saltwater')) {
        fixedFishingHole.push(
          ...uniqueFishingHoles.filter((hole) =>
            matchesKeywords(hole, ['saltwater', 'shore', 'offshore'])
          )
        )
      }
      if (afterPrefixLower.includes('brackish')) {
        fixedFishingHole.push(
          ...uniqueFishingHoles.filter((hole) => matchesKeywords(hole, ['brackish']))
        )
      }
      if (afterPrefixLower.includes('freshwater')) {
        fixedFishingHole.push(
          ...uniqueFishingHoles.filter((hole) => matchesKeywords(hole, ['freshwater']))
        )
      }

      fishCopy.fishingHole = fixedFishingHole.length ? fixedFishingHole : holes
    }

    const defaultPower = fishCopy.openWater
      ? (() => {
          const powers = locations
            .map(
              (location) =>
                fishingPowerMap[('open water' + location).toLowerCase().replace(/\s+/g, '')]
            )
            .filter((power) => power != null)
          return powers.length ? Math.min(...powers) : 0
        })()
      : 0

    if (holes.some((hole: string) => hole.toLowerCase() === 'none')) {
      return {
        ...fishCopy,
        fishingPower: defaultPower,
      } as GameDataFish
    }

    if (holes.length === 1 && holes[0].toLowerCase() === 'any') {
      return {
        ...fishCopy,
        fishingPower: defaultPower,
      } as GameDataFish
    }

    if (!locations.length) {
      throw new Error(`No valid [[location]] found for fish ${fishCopy.name}`)
    }

    const filteredHoles = holes.filter((hole: string) => hole.toLowerCase() !== 'any')
    const powers = filteredHoles.flatMap((hole: string) =>
      locations
        .map((location) => fishingPowerMap[(hole + location).toLowerCase().replace(/\s+/g, '')])
        .filter((power) => power != null)
    )

    const fishingPower = powers.length ? Math.min(...powers) : defaultPower

    return {
      ...fishCopy,
      fishingPower,
    } as GameDataFish
  })

  console.log(enrichedFish)
  return enrichedFish
}

run()
