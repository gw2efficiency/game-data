import * as path from 'path'
import * as fs from 'fs'
import fetch from 'node-fetch'
import escapeRegex from 'escape-regex-string'
import data, { GameDataMountSkin } from './data'
import { escapeQuotes } from '../../_helpers/generate'

interface ApiMountSkin {
  id: number
  name: string
}

const FILE_PATH = path.join(__dirname, './data.ts')
const START_MARKER = `// -- GENERATE-START --`
const END_MARKER = `// -- GENERATE-END --`
const REPLACE_REGEX = new RegExp(`${escapeRegex(START_MARKER)}(.*)${escapeRegex(END_MARKER)}`, 's')
const EMPTY_DATA: GameDataMountSkin = { id: 0, name: '', unlock_items: [] }

async function run() {
  const file = fs.readFileSync(FILE_PATH, 'utf-8')

  const response = await fetch('https://api.guildwars2.com/v2/mounts/skins?ids=all')
  const json = await response.json()

  const mountData = json
    .map((skin: ApiMountSkin) => {
      const previousData = data.find((x) => x.id === skin.id) || EMPTY_DATA

      return [
        `  { `,
        `id: ${skin.id}, `,
        `name: '${escapeQuotes(skin.name)}', `,
        `unlock_items: ${JSON.stringify(previousData.unlock_items)}`,
        ` }`,
      ].join('')
    })
    .join(',\n') + ','

  const content = file.replace(REPLACE_REGEX, `${START_MARKER}\n${mountData}\n  ${END_MARKER}`)
  fs.writeFileSync(FILE_PATH, content, 'utf-8')
}

run()
