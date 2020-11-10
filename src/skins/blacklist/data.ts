export interface GameDataSkinsBlacklistItem {
  /** The skin id */
  id: number

  /** The name of the skin */
  name: string
}

const GAME_DATA_SKINS_BLACKLIST: Array<GameDataSkinsBlacklistItem> = [
  { id: 2327, name: 'Backpack Straps' },
  { id: 8350, name: 'The Bifrost' },
  { id: 5909, name: 'Mistward Warfists' },
  { id: 5910, name: 'Mistward Legguards' },
  { id: 5918, name: 'Mistward Pauldrons' },
  { id: 5921, name: 'Mistward Warboots' },
  { id: 5936, name: 'Mistward Plate' },
]

export default GAME_DATA_SKINS_BLACKLIST
