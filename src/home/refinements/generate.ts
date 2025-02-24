import escapeRegex from 'escape-regex-string'
import * as fs from 'fs'
import * as path from 'path'
import { readCacheFile } from '../../_helpers/cache'

interface API_Recipes_Entry {
  output_item_id: number
  merchant?: { name: string; locations: Array<string> }
  output_item_count: number
  ingredients: Array<{
    type: 'Item' | 'GuildUpgrade' | 'Currency'
    id: number
    count: number
  }>
}

const FILE_PATH = path.join(__dirname, './data.ts')
const START_MARKER = `// -- GENERATE-START --`
const END_MARKER = `// -- GENERATE-END --`
const REPLACE_REGEX = new RegExp(`${escapeRegex(START_MARKER)}(.*)${escapeRegex(END_MARKER)}`, 's')

async function run() {
  const file = fs.readFileSync(FILE_PATH, 'utf-8')

  const recipes = await readCacheFile<Array<API_Recipes_Entry>>('recipes.json')

  const refinementsRecipes = recipes.filter(
    (recipe) =>
      recipe.merchant &&
      [102306, 102205, 103049].includes(recipe.output_item_id) &&
      recipe.merchant.name.includes('Homestead Refinement')
  )

  const generatedRefinementsRecipesItems = refinementsRecipes
    .map((recipe) => {
      const itemLine = [
        `  { `,
        `id: ${recipe.ingredients[0].id}, `,
        `count: ${recipe.ingredients[0].count}, `,
        `outputId: ${recipe.output_item_id}, `,
        `outputCount: ${recipe.output_item_count} `,
        `},`,
      ]

      return itemLine.join('')
    })
    .filter(Boolean)
    .join('\n')

  const content = file.replace(
    REPLACE_REGEX,
    `${START_MARKER}\n${generatedRefinementsRecipesItems}\n  ${END_MARKER}`
  )
  fs.writeFileSync(FILE_PATH, content, 'utf-8')
}

run()
