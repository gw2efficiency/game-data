import escapeRegex from 'escape-regex-string'
import * as fs from 'fs'
import fetch from 'node-fetch'
import * as path from 'path'
import { readCacheFile } from '../../../_helpers/cache'
import { escapeQuotes } from '../../../_helpers/generate'

interface ApiItem {
  id: number
  name: string
  description: string
}

const FILE_PATH = path.join(__dirname, './data.ts')
const START_MARKER = `// -- GENERATE-START --`
const END_MARKER = `// -- GENERATE-END --`
const REPLACE_REGEX = new RegExp(`${escapeRegex(START_MARKER)}(.*)${escapeRegex(END_MARKER)}`, 's')

async function run() {
  const file = fs.readFileSync(FILE_PATH, 'utf-8')

  const items = await readCacheFile<Array<ApiItem>>('items.json')

  const filteredIds = items
    .filter((item) => item.description && item.description.includes('infusion'))
    .map((item) => item.id)

  let filteredItems = []

  for (let i = 0; i < filteredIds.length; i += 200) {
    const batchIds = filteredIds.slice(i, i + 200)

    const response = await fetch(`http://api.guildwars2.com/v2/items?ids=${batchIds.join(',')}`)
    const officialItems = await response.json()

    filteredItems.push(...officialItems)

    await new Promise((resolve) => setTimeout(resolve, 400))
  }

  let generatedItems = ''

  generatedItems =
    filteredItems
      .filter((filteredItem) => {
        const { details } = filteredItem
        if (
          !details ||
          !details.infix_upgrade ||
          !details.infix_upgrade.buff ||
          !details.infix_upgrade.buff.description
        ) {
          return false
        }

        const regex = /(Concentration|Condition Damage|Expertise|Healing|Power|Precision|Toughness|Vitality)/
        return (
          regex.test(details.infix_upgrade.buff.description) &&
          filteredItem.type === 'UpgradeComponent'
        )
      })
      .map((filteredItem) => {
        return [
          `  { `,
          `id: ${filteredItem.id}, `,
          `name: '${escapeQuotes(filteredItem.name)}' `,
          `}`,
        ].join('')
      })
      .join(',\n') + ','

  const content = file.replace(REPLACE_REGEX, `${START_MARKER}\n${generatedItems}\n  ${END_MARKER}`)
  fs.writeFileSync(FILE_PATH, content, 'utf-8')
}

run()
