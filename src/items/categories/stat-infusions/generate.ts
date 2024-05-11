import * as path from 'path'
import * as fs from 'fs'
import fetch from 'node-fetch'
import escapeRegex from 'escape-regex-string'
import { escapeQuotes } from '../../../_helpers/generate'

interface ApiItem {
    name: string
    id: number
    description: string
}

const FILE_PATH = path.join(__dirname, './data.ts')
const START_MARKER = `// -- GENERATE-START --`
const END_MARKER = `// -- GENERATE-END --`
const REPLACE_REGEX = new RegExp(`${escapeRegex(START_MARKER)}(.*)${escapeRegex(END_MARKER)}`, 's')

async function run() {
    const file = fs.readFileSync(FILE_PATH, 'utf-8')

    const response = await fetch('https://api.gw2efficiency.com/items?ids=all')
    const json = await response.json()

    const filteredIds = json
        .filter((item: ApiItem) => item.description && item.description.includes("infusion"))
        .map((item: ApiItem) => item.id)

    let filteredItems = []

    for (let i = 0; i < filteredIds.length; i += 200) {
        const batchIds = filteredIds.slice(i, i + 200)

        const response = await fetch(`http://api.guildwars2.com/v2/items?ids=${batchIds.join(',')}`)
        const officialItems = await response.json()

        filteredItems.push(...officialItems)

        await new Promise(resolve => setTimeout(resolve, 400))
    }

    let generatedItems = ''
    
    generatedItems = filteredItems
        .filter((filteredItem) => {
            const { details } = filteredItem
            if (!details || !details.infix_upgrade || !details.infix_upgrade.buff || !details.infix_upgrade.buff.description) {
                return false
            }

            const regex = /(Concentration|Condition Damage|Expertise|Healing|Power|Precision|Toughness|Vitality)/
            return regex.test(details.infix_upgrade.buff.description) && filteredItem.type === 'UpgradeComponent'
        })
        .map((filteredItem) => {
            return [
                `  { `,
                `name: '${escapeQuotes(filteredItem.name)}', `,
                `id: ${filteredItem.id} `,
                `}`,
            ].join('')
        }).join(',\n') + ','

    const content = file.replace(REPLACE_REGEX, `${START_MARKER}\n${generatedItems}\n  ${END_MARKER}`)
    fs.writeFileSync(FILE_PATH, content, 'utf-8')
}

run()
