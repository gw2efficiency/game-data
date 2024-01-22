import * as path from 'path'
import * as fs from 'fs'
import fetch from 'node-fetch'
import escapeRegex from 'escape-regex-string'
import { escapeQuotes } from '../../../_helpers/generate'

interface VariantSkinName {
  match: RegExp
}

export const VARIANT_SKIN_NAMES: Array<VariantSkinName> = [
  {
    match: /^(Zhaitan's|Mordremoth's|Kralkatorrik's|Jormag's|Primordus's|Soo-Won's) (Rending|Claw|Tail|Argument|Wisdom|Fang|Gaze|Scale|Breath|Voice|Bite|Weight|Flight|Persuasion|Wing|Insight) Skin$/,
  }
]

interface UApiItem {
  id: number
  name: string
  skins: number[]
}

const FILE_PATH = path.join(__dirname, './data.ts')
const START_MARKER = `// -- GENERATE-START --`
const END_MARKER = `// -- GENERATE-END --`
const REPLACE_REGEX = new RegExp(`${escapeRegex(START_MARKER)}(.*)${escapeRegex(END_MARKER)}`, 's')

async function run() {
  const file = fs.readFileSync(FILE_PATH, 'utf-8')
  const response = await fetch('https://api.gw2efficiency.com/items?lang=en&ids=all')
  const items: Array<UApiItem> = await response.json()

  let generatedItems = ''

  VARIANT_SKIN_NAMES.forEach((variant, variantIndex) => {
    const matchingItems = items.filter((item) => item.name.match(variant.match))

    if (matchingItems.length === 0) {
      console.error(`Could not find any items for '${variantIndex}'`)
      process.exit(1)
    }

    matchingItems.sort((a, b) => a.id - b.id)

    matchingItems.forEach((item, itemIndex) => {
      const itemLine = [
        `  { `,
        `id: ${item.skins[0]}, `,
        `name: '${escapeQuotes(item.name.replace(/ Skin$/, ''))}'`,
        ` }`,
      ]

      generatedItems += itemLine.join('') + ','
      if (
        variantIndex !== VARIANT_SKIN_NAMES.length - 1 ||
        itemIndex !== matchingItems.length - 1
      ) {
        generatedItems += '\n'
      }
    })

    if (variantIndex !== VARIANT_SKIN_NAMES.length - 1) generatedItems += '\n'
  })

  const content = file.replace(REPLACE_REGEX, `${START_MARKER}\n${generatedItems}\n  ${END_MARKER}`)
  fs.writeFileSync(FILE_PATH, content, 'utf-8')
}

run()
