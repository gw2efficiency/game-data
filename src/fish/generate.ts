import * as path from 'path'
import * as fs from 'fs'
import fetch from 'node-fetch'
import { load, CheerioAPI, Element } from 'cheerio'
import escapeRegex from 'escape-regex-string'
import data, { GameDataFish } from './data'
import { escapeQuotes } from '../_helpers/generate'
import { readCacheFile } from '../_helpers/cache'

let $: CheerioAPI

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
  rarity: 0,
  location: '',
  openWater: false,
  fishingHole: [],
  favoredBait: '',
  timeOfDay: [],
  fishingPower: 0,
  achievement: {
    achievementId: 0,
    achievementBit: 0,
  },
  avidAchievement: {
    achievementId: 0,
    achievementBit: 0,
  },
}

async function run() {
  let generatedItems = ''
  const file = fs.readFileSync(FILE_PATH, 'utf-8')
  const items = await readCacheFile<Array<UApiItem>>('items.json')
  const response = await fetch('https://wiki.guildwars2.com/wiki/List_of_fish')
  const html = await response.text()
  $ = load(html)

  const table = load(
    `<table>${$('table.sortable.item.table[data-filter-id="fishtable1"]').html()}</table>`
  )

  const rows = table('tr.filter-row')
  const fishItemsData = rows
    .map((i, row) => {
      const fishItem = transformFish(row)
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

  generatedItems =
    fishItemsData
      .map((x) => {
        const previousData = data.find((item) => item.id === x.id) || EMPTY_DATA
        const timeOfDay = x.timeOfDay.includes('Any') ? x.timeOfDay : previousData.timeOfDay

        return [
          `  {`,
          `    name: '${escapeQuotes(x.name)}',`,
          `    id: ${x.id},`,
          `    rarity: ${x.rarity},`,
          `    location: '${escapeQuotes(x.location)}',`,
          `    timeOfDay: ${JSON.stringify(timeOfDay)},`,
          `    openWater: ${x.openWater},`,
          `    fishingHole: ${JSON.stringify(x.fishingHole)},`,
          `    favoredBait: '${escapeQuotes(x.favoredBait)}',`,
          `    fishingPower: ${x.fishingPower},`,
          `    achievement: {`,
          `      achievementId: ${x.achievement.achievementId},`,
          `      achievementBit: ${x.achievement.achievementBit}`,
          `    },`,
          `    avidAchievement: {`,
          `      achievementId: ${x.avidAchievement.achievementId},`,
          `      achievementBit: ${x.avidAchievement.achievementBit}`,
          `    }`,
          `  }`,
        ].join('\n')
      })
      .join(',\n') + ','

  const content = file.replace(REPLACE_REGEX, `${START_MARKER}\n${generatedItems}\n  ${END_MARKER}`)
  fs.writeFileSync(FILE_PATH, content, 'utf-8')
}

run()

//Parse and transform wiki fish data.
function transformFish(row: Element) {
  const cells = $(row).find('td')
  const openWater = $(cells[3]).text().trim().includes('Open Water')
  const achievement = getAchievementData(cells[7]) || { achievementId: 0, achievementBit: 0 }
  const avidAchievement = getAchievementData(cells[8]) || { achievementId: 0, achievementBit: 0 }

  return {
    name: $(cells[0]).text().trim(),
    location: $(cells[2]).text().trim(),
    openWater: openWater,
    fishingHole: $(cells[3])
      .text()
      .trim()
      .replace(/Open Water\s*,?\s*/g, '')
      .split(',')
      .map((hole) => hole.trim())
      .filter((hole) => hole !== ''),
    favoredBait: $(cells[4]).text().trim(),
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
function getAchievementData(element: Element) {
  const dataId = $(element).attr('data-id')
  if (dataId) {
    const [achievementNumber, bit] = dataId.split('-bit')
    const achievementId = parseInt(achievementNumber.replace('achievement', ''))
    const achievementBit = parseInt(bit)

    if (!isNaN(achievementId) && !isNaN(achievementBit)) {
      return {
        achievementId: achievementId,
        achievementBit: achievementBit,
      }
    }
  }
  return null
}
