import * as path from 'path'
import * as fs from 'fs'
import fetch from 'node-fetch'
import { load, CheerioAPI, Element } from 'cheerio'
import escapeRegex from 'escape-regex-string'
import data, { GameDataFish } from './data'
import { escapeQuotes } from '../_helpers/generate'
import { readCacheFile } from '../_helpers/cache'

interface UApiItem {
  id: number
  name: string
  rarity: number
}

const FILE_PATH = path.join(__dirname, './data.ts')
const START_MARKER = `// -- GENERATE-START --`
const END_MARKER = `// -- GENERATE-END --`
const REPLACE_REGEX = new RegExp(`${escapeRegex(START_MARKER)}(.*)${escapeRegex(END_MARKER)}`, 's')
const EMPTY_DATA: GameDataFish = {
  id: 0,
  name: '',
  rarity: -1,
  location: '',
  openWater: false,
  fishingHole: [],
  favoredBait: '' as GameDataFish['favoredBait'],
  timeOfDay: [],
  fishingPower: 0,
  achievement: { id: -1, bit: -1 },
  avidAchievement: { id: -1, bit: -1 },
}

// Fish that are not in achievements but in wiki table
const BLACKLISTED_IDS = [96494, 96899]

async function run() {
  const file = fs.readFileSync(FILE_PATH, 'utf-8')
  const items = await readCacheFile<Array<UApiItem>>('items.json')

  const response = await fetch('https://wiki.guildwars2.com/wiki/List_of_fish')
  const html = await response.text()
  const $ = load(html)

  const table = load(
    `<table>${$('table.sortable.item.table[data-filter-id="fishtable1"]').html()}</table>`
  )

  const rows = table('tr.filter-row')
  const fishItemsData = rows
    .map((_, row) => {
      const fishItem = transformFish($, row)
      const matchingItem = items.find((item) => item.name === fishItem.name)

      if (!matchingItem) {
        console.error(`Could not find any items for '${fishItem.name}'`)
        process.exit(1)
      }

      return {
        ...fishItem,
        id: matchingItem.id,
        rarity: matchingItem.rarity,
      }
    })
    .get()

  const generatedItems =
    fishItemsData
      .filter((x) => !BLACKLISTED_IDS.includes(x.id))
      .map((x) => {
        const previousData = data.find((item) => item.id === x.id) || EMPTY_DATA
        const timeOfDay = x.timeOfDay.includes('Any') ? x.timeOfDay : previousData.timeOfDay

        return [
          `  {`,
          `id: ${x.id},`,
          `name: '${escapeQuotes(x.name)}',`,
          `rarity: ${x.rarity},`,
          `location: '${escapeQuotes(x.location)}',`,
          `timeOfDay: [${timeOfDay.map((item) => `'${item}'`).join(', ')}],`,
          `openWater: ${x.openWater},`,
          `fishingHole: [${x.fishingHole.map((item) => `'${item}'`).join(', ')}],`,
          `favoredBait: '${escapeQuotes(x.favoredBait)}',`,
          `fishingPower: ${x.fishingPower},`,
          `achievement: {`,
          `id: ${x.achievement.id},`,
          `bit: ${x.achievement.bit}`,
          `},`,
          `avidAchievement: {`,
          `id: ${x.avidAchievement.id},`,
          `bit: ${x.avidAchievement.bit}`,
          `}`,
          `}`,
        ].join(' ')
      })
      .join(',\n') + ','

  const content = file.replace(REPLACE_REGEX, `${START_MARKER}\n${generatedItems}\n  ${END_MARKER}`)
  fs.writeFileSync(FILE_PATH, content, 'utf-8')
}

run()

// Parse and transform wiki fish data
function transformFish($: CheerioAPI, row: Element) {
  const cells = $(row).find('td')

  const achievement = getAchievementData($, cells[7]) || { id: -1, bit: -1 }
  const avidAchievement = getAchievementData($, cells[8]) || { id: -1, bit: -1 }

  return {
    name: $(cells[0]).text().trim(),
    location: $(cells[2]).text().trim(),
    openWater: $(cells[3]).text().trim().includes('Open Water'),
    fishingHole: $(cells[3])
      .text()
      .trim()
      .replace(/Open Water\s*,?\s*/g, '')
      .split(',')
      .map((hole) => hole.trim())
      .filter((hole) => hole !== ''),
    favoredBait: $(cells[4]).text().trim(),
    // Time of day data on wiki includes "higher chance" times, needs to be manually checked if not any.
    timeOfDay: (() => {
      const text = $(cells[5]).text().trim()
      const values = text.split(',').map((time) => time.trim())
      return values.length === 1 && values[0] === 'Any' ? ['Any'] : []
    })(),
    fishingPower: parseInt($(cells[6]).text().trim()) || 0,
    achievement: achievement,
    avidAchievement: avidAchievement,
  }
}

// Get achievement data
function getAchievementData($: CheerioAPI, element: Element) {
  const dataId = $(element).attr('data-id')
  if (!dataId) return null

  const [achievementId, achievementBit] = dataId.split('-bit')
  const id = parseInt(achievementId.replace('achievement', ''))
  const bit = parseInt(achievementBit)
  if (isNaN(id) || isNaN(bit)) return null

  return { id, bit }
}
