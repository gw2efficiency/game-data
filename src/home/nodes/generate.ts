import * as path from 'path'
import * as fs from 'fs'
import fetch from 'node-fetch'
import escapeRegex from 'escape-regex-string'
import data, { GameDataHomeNode } from './data'
import { escapeQuotes } from '../../_helpers/generate'

interface ApiHomeNode {
  id: string
}

const FILE_PATH = path.join(__dirname, './data.ts')
const START_MARKER = `// -- GENERATE-START --`
const END_MARKER = `// -- GENERATE-END --`
const REPLACE_REGEX = new RegExp(`${escapeRegex(START_MARKER)}(.*)${escapeRegex(END_MARKER)}`, 's')
const EMPTY_DATA: GameDataHomeNode = { id: '', name: '', unlock_items: [] }

async function run() {
  const file = fs.readFileSync(FILE_PATH, 'utf-8')

  const response = await fetch('https://api.guildwars2.com/v2/home/nodes?ids=all')
  const json = await response.json()

  const nodeData = json
    .map((node: ApiHomeNode) => {
      const previousData = data.find((x) => x.id === node.id) || EMPTY_DATA

      return [
        `  { `,
        `id: '${node.id}', `,
        `name: '${escapeQuotes(previousData.name)}', `,
        `unlock_items: ${JSON.stringify(previousData.unlock_items).replace(',', ', ')}`,
        ` }`,
      ].join('')
    })
    .join(',\n')

  const content = file.replace(REPLACE_REGEX, `${START_MARKER}\n${nodeData}\n  ${END_MARKER}`)
  fs.writeFileSync(FILE_PATH, content, 'utf-8')
}

run()
