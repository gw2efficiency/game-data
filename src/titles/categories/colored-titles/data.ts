export interface GameDataTitlesCategoriesColoredTitles {
  /** The title id */
  id: number

  /** The title name */
  name: string

  /** The achievements required for title */
  achievements: number[]
}

// prettier-ignore
const GAME_DATA_TITLES_CATEGORIES_COLORED_TITLES: Array<GameDataTitlesCategoriesColoredTitles> = [
  // -- GENERATE-START --
  { id: 89, name: '<c=#d9578d>Champion Brawler</c>', achievements: [265] },
  { id: 348, name: '<c=#26c2eb>The Extra Life</c>', achievements: [5000] },
  { id: 404, name: '<c=#ccbb66>I\'m rich, you know.</c>', achievements: [6963] },
  { id: 435, name: '<c=#c7815d>Ultimate Dominator VII</c>', achievements: [7924] },
  { id: 436, name: '<c=#c7815d>Ultimate Dominator V</c>', achievements: [7870] },
  { id: 439, name: '<c=#c7815d>Ultimate Dominator IV</c>', achievements: [7932] },
  { id: 444, name: '<c=#c7815d>Ultimate Dominator III</c>', achievements: [7855] },
  { id: 445, name: '<c=#c7815d>Ultimate Dominator IX</c>', achievements: [7912] },
  { id: 446, name: '<c=#c7815d>Ultimate Dominator II</c>', achievements: [7911] },
  { id: 447, name: '<c=#c7815d>Ultimate Dominator VIII</c>', achievements: [7858] },
  { id: 450, name: '<c=#c7815d>Ultimate Dominator VI</c>', achievements: [7906] },
  { id: 456, name: '<c=#A594F7>Legendary Conqueror of Cerus</c>', achievements: [7873] },
  { id: 469, name: '<c=#ccbb66>Eternal Forgemaster</c>', achievements: [8093] },
  // -- GENERATE-END --
]

export default GAME_DATA_TITLES_CATEGORIES_COLORED_TITLES
