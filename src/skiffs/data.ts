export interface GameDataSkiff {
  /** The skiff id */
  id: number

  /** The skiff name */
  name: string

  /** The unlock items for the skiff */
  unlock_items: Array<number>
}

// prettier-ignore
const GAME_DATA_SKIFFS: Array<GameDataSkiff> = [
  // -- GENERATE-START --
  { id: 410, name: 'Fishing Skiff', unlock_items: [] },
  { id: 413, name: 'Shing Jea Dragon Boat', unlock_items: [95151] },
  { id: 420, name: 'Crescent Canoe', unlock_items: [97893] },
  { id: 428, name: 'Winged Reverie Skiff', unlock_items: [97920] },
  { id: 435, name: 'Jade Tech Skiff', unlock_items: [98072] },
  { id: 451, name: 'Floating Garden', unlock_items: [98226] },
  { id: 463, name: 'Trimaran', unlock_items: [98752] },
  { id: 470, name: 'Shrine Guardian', unlock_items: [98981] },
  { id: 502, name: 'Festive Iceberg Skiff', unlock_items: [99288] },
  { id: 506, name: 'Floating Lantern', unlock_items: [99322] },
  { id: 507, name: 'Wolf Raider Skiff', unlock_items: [99357] },
  { id: 529, name: 'Dynamics Racing Skiff', unlock_items: [99596] },
  { id: 539, name: 'Dreadnought Skiff', unlock_items: [99735] },
  { id: 573, name: 'Spellbound Skiff', unlock_items: [99942] },
  { id: 601, name: 'Haunted Ghost Skiff', unlock_items: [101110] },
  { id: 608, name: 'Alchemic Power Skiff', unlock_items: [101190] },
  { id: 625, name: 'Queensdale Academic Skiff', unlock_items: [101389] },
  { id: 649, name: 'Toymaker\'s Party Skiff', unlock_items: [101668] },
  { id: 655, name: 'Luxury Speeder', unlock_items: [101983] },
  // -- GENERATE-END --
]

export default GAME_DATA_SKIFFS
