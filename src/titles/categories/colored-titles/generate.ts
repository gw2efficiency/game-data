import escapeRegex from 'escape-regex-string'
import * as fs from 'fs'
import fetch from 'node-fetch'
import * as path from 'path'
import { escapeQuotes } from '../../../_helpers/generate'

interface UApiTitle {
  id: number
  name: string
  achievements: number[]
}

const FILE_PATH = path.join(__dirname, './data.ts')
const START_MARKER = `// -- GENERATE-START --`
const END_MARKER = `// -- GENERATE-END --`
const REPLACE_REGEX = new RegExp(`${escapeRegex(START_MARKER)}(.*)${escapeRegex(END_MARKER)}`, 's')

async function run() {
  const file = fs.readFileSync(FILE_PATH, 'utf-8')

  const response = await fetch('https://api.guildwars2.com/v2/titles?ids=all')
  const json = await response.json()

  const titleData =
    json
      .filter((title: UApiTitle) => title.name.includes('</c>'))
      .map((title: UApiTitle) => {
        return [
          `  { `,
          `id: ${title.id}, `,
          `name: '${escapeQuotes(title.name)}', `,
          `achievements: ${JSON.stringify(title.achievements)}`,
          ` }`,
        ].join('')
      })
      .join(',\n') + ','

  const content = file.replace(REPLACE_REGEX, `${START_MARKER}\n${titleData}\n  ${END_MARKER}`)
  fs.writeFileSync(FILE_PATH, content, 'utf-8')
}

run()
