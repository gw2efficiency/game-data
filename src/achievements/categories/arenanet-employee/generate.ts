import escapeRegex from 'escape-regex-string'
import * as fs from 'fs'
import * as path from 'path'
import { readCacheFile } from '../../../_helpers/cache'
import { escapeQuotes } from '../../../_helpers/generate'

interface UApiAchievementGroup {
  id: number
  categories: Array<UApiAchievementCategory>
}

interface UApiAchievementCategory {
  id: number
  achievements: Array<UApiAchievement>
}

interface UApiAchievement {
  id: number
  name: string
  requirement: string
}

const MATCH_REGEX = /an ArenaNet employee/i

const FILE_PATH = path.join(__dirname, './data.ts')
const START_MARKER = `// -- GENERATE-START --`
const END_MARKER = `// -- GENERATE-END --`
const REPLACE_REGEX = new RegExp(`${escapeRegex(START_MARKER)}(.*)${escapeRegex(END_MARKER)}`, 's')

async function run() {
  const file = fs.readFileSync(FILE_PATH, 'utf-8')

  const achievementGroups = await readCacheFile<Array<UApiAchievementGroup>>('achievements.json')
  const achievements = achievementGroups
    .flatMap((item) => item.categories)
    .flatMap((item) => item.achievements)

  const matchingAchievements = achievements.filter((achievement) =>
    achievement.requirement.match(MATCH_REGEX)
  )

  matchingAchievements.sort((a, b) => a.id - b.id)

  const generatedAchievements = matchingAchievements
    .map((item) => {
      const itemLine = [
        `  { `,
        `id: ${item.id}, `,
        `name: '${escapeQuotes(item.name)}' `,
        `}, `,
        `// ${item.requirement}`,
      ]

      return itemLine.join('')
    })
    .join('\n')

  const content = file.replace(
    REPLACE_REGEX,
    `${START_MARKER}\n${generatedAchievements}\n  ${END_MARKER}`
  )
  fs.writeFileSync(FILE_PATH, content, 'utf-8')
}

run()
