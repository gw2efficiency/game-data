import escapeRegex from 'escape-regex-string'
import * as fs from 'fs'
import * as path from 'path'
import fetch from 'node-fetch'
import { escapeQuotes } from '../../_helpers/generate'

type API_Glyphs = Array<API_Glyphs_Entry>
interface API_Glyphs_Entry {
  id: string
  item_id: number
  slot: string
}

interface API_Glyphs_Entry_Extended extends API_Glyphs_Entry {
  unusedItemId?: number
}

const FILE_PATH = path.join(__dirname, './data.ts')
const START_MARKER = `// -- GENERATE-START --`
const END_MARKER = `// -- GENERATE-END --`
const REPLACE_REGEX = new RegExp(`${escapeRegex(START_MARKER)}(.*)${escapeRegex(END_MARKER)}`, 's')

async function run() {
  const file = fs.readFileSync(FILE_PATH, 'utf-8')

  const response = await fetch('https://api.guildwars2.com/v2/homestead/glyphs?ids=all')
  const json = (await response.json()) as API_Glyphs

  const glyphsUnusedIds: { [key: number]: number } = {
    90805: 90664, // Glyph of Alchemy
    90488: 90538, // Glyph of the Crucible
    87550: 87559, // Glyph of the Forester
    88241: 88298, // Glyph of the Herbalist
    87473: 87452, // Glyph of the Leatherworker
    87534: 87515, // Glyph of the Prospector
    87442: 87426, // Glyph of the Scavenger
    87407: 87460, // Glyph of the Tailor
    87438: 87424, // Glyph of the Watchknight
    87462: 87385, // Glyph of Bounty
    87433: 87434, // Glyph of Flight
    87432: 87451, // Glyph of Industry
    92953: 92915, // Glyph of Overload
    90950: 90726, // Glyph of Reaping
    92680: 92682, // Glyph of the Timekeeper
    87428: 87410, // Glyph of the Unbound
    87698: 88045, // Glyph of Volatility
    92820: 92833, // Glyph of Virtue
  }

  const glyphsWithUnusedIds: API_Glyphs_Entry_Extended[] = json.map((glyph) =>
    glyphsUnusedIds[glyph.item_id]
      ? { ...glyph, unusedItemId: glyphsUnusedIds[glyph.item_id] }
      : glyph
  )

  const generatedItems =
    glyphsWithUnusedIds
      .map((glyph) => {
        return [
          `  { `,
          `id: '${escapeQuotes(glyph.id)}', `,
          `item_id: ${glyph.item_id}, `,
          `slot: '${escapeQuotes(glyph.slot)}', `,
          `unusedItemId: ${glyph.unusedItemId}`,
          ` }`,
        ].join('')
      })
      .join(',\n') + ','

  const content = file.replace(REPLACE_REGEX, `${START_MARKER}\n${generatedItems}\n  ${END_MARKER}`)
  fs.writeFileSync(FILE_PATH, content, 'utf-8')
}

run()
