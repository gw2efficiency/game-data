import * as path from 'path'
import * as fs from 'fs'
import fetch from 'node-fetch'
import escapeRegex from 'escape-regex-string'
import data, { GameDataHomeCat } from './data'
import { escapeQuotes } from '../../_helpers/generate'

interface ApiHomeCat {
  id: number
}

const FILE_PATH = path.join(__dirname, './data.ts')
const START_MARKER = `// -- GENERATE-START --`
const END_MARKER = `// -- GENERATE-END --`
const REPLACE_REGEX = new RegExp(`${escapeRegex(START_MARKER)}(.*)${escapeRegex(END_MARKER)}`, 's')
const EMPTY_DATA: GameDataHomeCat = {
  id: 0,
  name: '',
  icon: '',
  description: '',
  map_screenshot: '',
  release_date: '',
}

async function run() {
  const file = fs.readFileSync(FILE_PATH, 'utf-8')

  const response = await fetch('https://api.guildwars2.com/v2/home/cats?ids=all')
  const json = await response.json()

  const catData = json
    .map((cat: ApiHomeCat) => {
      const previousData = data.find((x) => x.id === cat.id) || EMPTY_DATA

      return [
        `  { `,
        `id: ${cat.id}, `,
        `name: '${escapeQuotes(previousData.name)}', `,
        `icon: '${previousData.icon}', `,
        `description: \`${previousData.description}\`, `,
        `map_screenshot: ${
          previousData.map_screenshot ? `'${previousData.map_screenshot}'` : 'null'
        }, `,
        `release_date: '${previousData.release_date}'`,
        ` }`,
      ].join('')
    })
    .join(',\n') + ','

  const content = file.replace(REPLACE_REGEX, `${START_MARKER}\n${catData}\n  ${END_MARKER}`)
  fs.writeFileSync(FILE_PATH, content, 'utf-8')
}

run()
