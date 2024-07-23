export interface GameDataFish {
  /** The fish id */
  id: number

  /** The fish name */
  name: string

  /** The unlock items for the fish */
  rarity: number

  location: string

  openWater: boolean

  fishingHole: string[]

  favoredBait: string

  timeOfDay: string[]

  fishingPower: number

  achievement: {
    achievementId: number
    achievementBit: number
  }

  avidAchievement: {
    achievementId: number
    achievementBit: number
  }
}

// prettier-ignore
const GAME_DATA_FISHES: Array<GameDataFish> = [
  // -- GENERATE-START --
  {
    name: 'Globefish',
    id: 95894,
    rarity: 1,
    location: 'Seitung Province',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["None"],
    favoredBait: 'Any',
    fishingPower: 50,
    achievement: {
      achievementId: 6336,
      achievementBit: 0
    },
    avidAchievement: {
      achievementId: 6264,
      achievementBit: 0
    }
  },
  {
    name: 'Mullet',
    id: 97865,
    rarity: 1,
    location: 'Seitung Province',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["None"],
    favoredBait: 'Any',
    fishingPower: 50,
    achievement: {
      achievementId: 6336,
      achievementBit: 7
    },
    avidAchievement: {
      achievementId: 6264,
      achievementBit: 7
    }
  },
  {
    name: 'Porgy',
    id: 96757,
    rarity: 1,
    location: 'Seitung Province',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["None"],
    favoredBait: 'Any',
    fishingPower: 50,
    achievement: {
      achievementId: 6336,
      achievementBit: 14
    },
    avidAchievement: {
      achievementId: 6264,
      achievementBit: 14
    }
  },
  {
    name: 'Bluefin Trevally',
    id: 96350,
    rarity: 2,
    location: 'Seitung Province',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["Any"],
    favoredBait: 'Any',
    fishingPower: 50,
    achievement: {
      achievementId: 6336,
      achievementBit: 1
    },
    avidAchievement: {
      achievementId: 6264,
      achievementBit: 1
    }
  },
  {
    name: 'Corvina',
    id: 96719,
    rarity: 2,
    location: 'Seitung Province',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["Any"],
    favoredBait: 'Any',
    fishingPower: 50,
    achievement: {
      achievementId: 6336,
      achievementBit: 8
    },
    avidAchievement: {
      achievementId: 6264,
      achievementBit: 8
    }
  },
  {
    name: 'Chestnut Sea Bream',
    id: 96071,
    rarity: 2,
    location: 'Seitung Province',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["Any"],
    favoredBait: 'Any',
    fishingPower: 50,
    achievement: {
      achievementId: 6336,
      achievementBit: 15
    },
    avidAchievement: {
      achievementId: 6264,
      achievementBit: 15
    }
  },
  {
    name: 'Cherry Salmon',
    id: 97278,
    rarity: 3,
    location: 'Seitung Province',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["Shore Fish"],
    favoredBait: 'Any',
    fishingPower: 150,
    achievement: {
      achievementId: 6336,
      achievementBit: 2
    },
    avidAchievement: {
      achievementId: 6264,
      achievementBit: 2
    }
  },
  {
    name: 'Crimson Snapper',
    id: 95936,
    rarity: 3,
    location: 'Seitung Province',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["Offshore Fish"],
    favoredBait: 'Any',
    fishingPower: 200,
    achievement: {
      achievementId: 6336,
      achievementBit: 9
    },
    avidAchievement: {
      achievementId: 6264,
      achievementBit: 9
    }
  },
  {
    name: 'Green Sawfish',
    id: 96944,
    rarity: 3,
    location: 'Seitung Province',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["Offshore Fish"],
    favoredBait: 'Any',
    fishingPower: 200,
    achievement: {
      achievementId: 6336,
      achievementBit: 16
    },
    avidAchievement: {
      achievementId: 6264,
      achievementBit: 16
    }
  },
  {
    name: 'Cutlass Fish',
    id: 96425,
    rarity: 4,
    location: 'Seitung Province',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["Shore Fish","Rare Fish"],
    favoredBait: 'Any',
    fishingPower: 150,
    achievement: {
      achievementId: 6336,
      achievementBit: 3
    },
    avidAchievement: {
      achievementId: 6264,
      achievementBit: 3
    }
  },
  {
    name: 'Honeycomb Grouper',
    id: 97692,
    rarity: 4,
    location: 'Seitung Province',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["Offshore Fish"],
    favoredBait: 'Any',
    fishingPower: 200,
    achievement: {
      achievementId: 6336,
      achievementBit: 10
    },
    avidAchievement: {
      achievementId: 6264,
      achievementBit: 10
    }
  },
  {
    name: 'Tripletail',
    id: 97061,
    rarity: 4,
    location: 'Seitung Province',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["Offshore Fish"],
    favoredBait: 'Any',
    fishingPower: 200,
    achievement: {
      achievementId: 6336,
      achievementBit: 17
    },
    avidAchievement: {
      achievementId: 6264,
      achievementBit: 17
    }
  },
  {
    name: 'Stingray',
    id: 97604,
    rarity: 5,
    location: 'Seitung Province',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Shore Fish"],
    favoredBait: 'Any',
    fishingPower: 150,
    achievement: {
      achievementId: 6336,
      achievementBit: 4
    },
    avidAchievement: {
      achievementId: 6264,
      achievementBit: 4
    }
  },
  {
    name: 'Humphead Wrasse',
    id: 97722,
    rarity: 5,
    location: 'Seitung Province',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Offshore Fish"],
    favoredBait: 'Any',
    fishingPower: 200,
    achievement: {
      achievementId: 6336,
      achievementBit: 11
    },
    avidAchievement: {
      achievementId: 6264,
      achievementBit: 11
    }
  },
  {
    name: 'Dragonet',
    id: 97714,
    rarity: 5,
    location: 'Seitung Province',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["Offshore Fish"],
    favoredBait: 'Any',
    fishingPower: 200,
    achievement: {
      achievementId: 6336,
      achievementBit: 18
    },
    avidAchievement: {
      achievementId: 6264,
      achievementBit: 18
    }
  },
  {
    name: 'Spotted Stingray',
    id: 95603,
    rarity: 6,
    location: 'Seitung Province',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Shore Fish"],
    favoredBait: 'Shrimpling',
    fishingPower: 150,
    achievement: {
      achievementId: 6336,
      achievementBit: 5
    },
    avidAchievement: {
      achievementId: 6264,
      achievementBit: 5
    }
  },
  {
    name: 'Skipjack Tuna',
    id: 96523,
    rarity: 6,
    location: 'Seitung Province',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["Offshore Fish"],
    favoredBait: 'Sardine',
    fishingPower: 200,
    achievement: {
      achievementId: 6336,
      achievementBit: 12
    },
    avidAchievement: {
      achievementId: 6264,
      achievementBit: 12
    }
  },
  {
    name: 'Mega Prawn',
    id: 96318,
    rarity: 6,
    location: 'Seitung Province',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Offshore Fish"],
    favoredBait: 'Sardine',
    fishingPower: 200,
    achievement: {
      achievementId: 6336,
      achievementBit: 19
    },
    avidAchievement: {
      achievementId: 6264,
      achievementBit: 19
    }
  },
  {
    name: 'Fugu Fish',
    id: 97753,
    rarity: 7,
    location: 'Seitung Province',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Shore Fish"],
    favoredBait: 'Shrimpling',
    fishingPower: 150,
    achievement: {
      achievementId: 6336,
      achievementBit: 6
    },
    avidAchievement: {
      achievementId: 6264,
      achievementBit: 6
    }
  },
  {
    name: 'Sailfish',
    id: 95926,
    rarity: 7,
    location: 'Seitung Province',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["Offshore Fish"],
    favoredBait: 'Sardine',
    fishingPower: 200,
    achievement: {
      achievementId: 6336,
      achievementBit: 13
    },
    avidAchievement: {
      achievementId: 6264,
      achievementBit: 13
    }
  },
  {
    name: 'Sunfish',
    id: 97181,
    rarity: 7,
    location: 'Seitung Province',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Offshore Fish"],
    favoredBait: 'Shrimpling',
    fishingPower: 200,
    achievement: {
      achievementId: 6336,
      achievementBit: 20
    },
    avidAchievement: {
      achievementId: 6264,
      achievementBit: 20
    }
  },
  {
    name: 'Shinota Blackfin',
    id: 96494,
    rarity: 1,
    location: 'Seitung Province',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["Shinota Blackfins"],
    favoredBait: 'Any',
    fishingPower: 0,
    achievement: {
      achievementId: 0,
      achievementBit: 0
    },
    avidAchievement: {
      achievementId: 0,
      achievementBit: 0
    }
  },
  {
    name: 'Daijun Blackfin',
    id: 96899,
    rarity: 1,
    location: 'Seitung Province',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: [],
    favoredBait: 'Haiju Minnow',
    fishingPower: 50,
    achievement: {
      achievementId: 0,
      achievementBit: 0
    },
    avidAchievement: {
      achievementId: 0,
      achievementBit: 0
    }
  },
  {
    name: 'Flying Fish',
    id: 97612,
    rarity: 1,
    location: 'New Kaineng City',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["None"],
    favoredBait: 'Any',
    fishingPower: 150,
    achievement: {
      achievementId: 6342,
      achievementBit: 0
    },
    avidAchievement: {
      achievementId: 6192,
      achievementBit: 0
    }
  },
  {
    name: 'Pollock',
    id: 96876,
    rarity: 1,
    location: 'New Kaineng City',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["None"],
    favoredBait: 'Any',
    fishingPower: 150,
    achievement: {
      achievementId: 6342,
      achievementBit: 7
    },
    avidAchievement: {
      achievementId: 6192,
      achievementBit: 7
    }
  },
  {
    name: 'Sea Perch',
    id: 95633,
    rarity: 1,
    location: 'New Kaineng City',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["None"],
    favoredBait: 'Any',
    fishingPower: 150,
    achievement: {
      achievementId: 6342,
      achievementBit: 14
    },
    avidAchievement: {
      achievementId: 6192,
      achievementBit: 14
    }
  },
  {
    name: 'Blowfish',
    id: 96933,
    rarity: 2,
    location: 'New Kaineng City',
    timeOfDay: [],
    openWater: true,
    fishingHole: ["Any"],
    favoredBait: 'Any',
    fishingPower: 150,
    achievement: {
      achievementId: 6342,
      achievementBit: 1
    },
    avidAchievement: {
      achievementId: 6192,
      achievementBit: 1
    }
  },
  {
    name: 'Emperor Fish',
    id: 95797,
    rarity: 2,
    location: 'New Kaineng City',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["Any"],
    favoredBait: 'Any',
    fishingPower: 150,
    achievement: {
      achievementId: 6342,
      achievementBit: 8
    },
    avidAchievement: {
      achievementId: 6192,
      achievementBit: 8
    }
  },
  {
    name: 'Weever',
    id: 96839,
    rarity: 2,
    location: 'New Kaineng City',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["Any"],
    favoredBait: 'Any',
    fishingPower: 150,
    achievement: {
      achievementId: 6342,
      achievementBit: 15
    },
    avidAchievement: {
      achievementId: 6192,
      achievementBit: 15
    }
  },
  {
    name: 'Emerald Snapper',
    id: 97772,
    rarity: 3,
    location: 'New Kaineng City',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["Coastal Fish"],
    favoredBait: 'Any',
    fishingPower: 200,
    achievement: {
      achievementId: 6342,
      achievementBit: 2
    },
    avidAchievement: {
      achievementId: 6192,
      achievementBit: 2
    }
  },
  {
    name: 'Kahawai',
    id: 97507,
    rarity: 3,
    location: 'New Kaineng City',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["Coastal Fish"],
    favoredBait: 'Any',
    fishingPower: 200,
    achievement: {
      achievementId: 6342,
      achievementBit: 9
    },
    avidAchievement: {
      achievementId: 6192,
      achievementBit: 9
    }
  },
  {
    name: 'Striped Barracuda',
    id: 96145,
    rarity: 3,
    location: 'New Kaineng City',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Channel Fish"],
    favoredBait: 'Any',
    fishingPower: 250,
    achievement: {
      achievementId: 6342,
      achievementBit: 16
    },
    avidAchievement: {
      achievementId: 6192,
      achievementBit: 16
    }
  },
  {
    name: 'Amberjack',
    id: 96053,
    rarity: 4,
    location: 'New Kaineng City',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Coastal Fish","Rare Fish"],
    favoredBait: 'Any',
    fishingPower: 200,
    achievement: {
      achievementId: 6342,
      achievementBit: 3
    },
    avidAchievement: {
      achievementId: 6192,
      achievementBit: 3
    }
  },
  {
    name: 'Pufferfish',
    id: 97830,
    rarity: 4,
    location: 'New Kaineng City',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Coastal Fish","Rare Fish"],
    favoredBait: 'Any',
    fishingPower: 200,
    achievement: {
      achievementId: 6342,
      achievementBit: 10
    },
    avidAchievement: {
      achievementId: 6192,
      achievementBit: 10
    }
  },
  {
    name: 'Dragonfish',
    id: 97792,
    rarity: 4,
    location: 'New Kaineng City',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["Channel Fish","Rare Fish"],
    favoredBait: 'Any',
    fishingPower: 250,
    achievement: {
      achievementId: 6342,
      achievementBit: 17
    },
    avidAchievement: {
      achievementId: 6192,
      achievementBit: 17
    }
  },
  {
    name: 'Blue Dorado',
    id: 95951,
    rarity: 5,
    location: 'New Kaineng City',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Coastal Fish"],
    favoredBait: 'Any',
    fishingPower: 200,
    achievement: {
      achievementId: 6342,
      achievementBit: 4
    },
    avidAchievement: {
      achievementId: 6192,
      achievementBit: 4
    }
  },
  {
    name: 'Sturgeon',
    id: 96344,
    rarity: 5,
    location: 'New Kaineng City',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["Channel Fish"],
    favoredBait: 'Any',
    fishingPower: 250,
    achievement: {
      achievementId: 6342,
      achievementBit: 11
    },
    avidAchievement: {
      achievementId: 6192,
      achievementBit: 11
    }
  },
  {
    name: 'Taimen',
    id: 96238,
    rarity: 5,
    location: 'New Kaineng City',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Channel Fish"],
    favoredBait: 'Any',
    fishingPower: 250,
    achievement: {
      achievementId: 6342,
      achievementBit: 18
    },
    avidAchievement: {
      achievementId: 6192,
      achievementBit: 18
    }
  },
  {
    name: 'Giant Trevally',
    id: 97463,
    rarity: 6,
    location: 'New Kaineng City',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["Coastal Fish"],
    favoredBait: 'Sardine',
    fishingPower: 200,
    achievement: {
      achievementId: 6342,
      achievementBit: 5
    },
    avidAchievement: {
      achievementId: 6192,
      achievementBit: 5
    }
  },
  {
    name: 'Tarpon',
    id: 97857,
    rarity: 6,
    location: 'New Kaineng City',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["Coastal Fish"],
    favoredBait: 'Shrimpling',
    fishingPower: 200,
    achievement: {
      achievementId: 6342,
      achievementBit: 12
    },
    avidAchievement: {
      achievementId: 6192,
      achievementBit: 12
    }
  },
  {
    name: 'Starry Flounder',
    id: 96863,
    rarity: 6,
    location: 'New Kaineng City',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Channel Fish"],
    favoredBait: 'Sardine',
    fishingPower: 250,
    achievement: {
      achievementId: 6342,
      achievementBit: 19
    },
    avidAchievement: {
      achievementId: 6192,
      achievementBit: 19
    }
  },
  {
    name: 'Bluefin Tuna',
    id: 96401,
    rarity: 7,
    location: 'New Kaineng City',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["Coastal Fish"],
    favoredBait: 'Mackerel',
    fishingPower: 200,
    achievement: {
      achievementId: 6342,
      achievementBit: 6
    },
    avidAchievement: {
      achievementId: 6192,
      achievementBit: 6
    }
  },
  {
    name: 'Swordfish',
    id: 97654,
    rarity: 7,
    location: 'New Kaineng City',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Coastal Fish"],
    favoredBait: 'Mackerel',
    fishingPower: 200,
    achievement: {
      achievementId: 6342,
      achievementBit: 13
    },
    avidAchievement: {
      achievementId: 6192,
      achievementBit: 13
    }
  },
  {
    name: 'Oarfish',
    id: 96196,
    rarity: 7,
    location: 'New Kaineng City',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["Channel Fish"],
    favoredBait: 'Shrimpling',
    fishingPower: 250,
    achievement: {
      achievementId: 6342,
      achievementBit: 20
    },
    avidAchievement: {
      achievementId: 6192,
      achievementBit: 20
    }
  },
  {
    name: 'Freshwater Eel',
    id: 96807,
    rarity: 1,
    location: 'The Echovald Wilds',
    timeOfDay: [],
    openWater: true,
    fishingHole: ["None"],
    favoredBait: 'Any',
    fishingPower: 200,
    achievement: {
      achievementId: 6258,
      achievementBit: 0
    },
    avidAchievement: {
      achievementId: 6466,
      achievementBit: 0
    }
  },
  {
    name: 'Stone Loach',
    id: 96096,
    rarity: 1,
    location: 'The Echovald Wilds',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["None"],
    favoredBait: 'Any',
    fishingPower: 200,
    achievement: {
      achievementId: 6258,
      achievementBit: 7
    },
    avidAchievement: {
      achievementId: 6466,
      achievementBit: 7
    }
  },
  {
    name: 'Black Carp',
    id: 96195,
    rarity: 2,
    location: 'The Echovald Wilds',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["Any"],
    favoredBait: 'Any',
    fishingPower: 200,
    achievement: {
      achievementId: 6258,
      achievementBit: 1
    },
    avidAchievement: {
      achievementId: 6466,
      achievementBit: 1
    }
  },
  {
    name: 'Knifefish',
    id: 95596,
    rarity: 2,
    location: 'The Echovald Wilds',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["Any"],
    favoredBait: 'Any',
    fishingPower: 200,
    achievement: {
      achievementId: 6258,
      achievementBit: 8
    },
    avidAchievement: {
      achievementId: 6466,
      achievementBit: 8
    }
  },
  {
    name: 'Bullhead Catfish',
    id: 96017,
    rarity: 3,
    location: 'The Echovald Wilds',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Lake Fish","Deep Fishing Hole"],
    favoredBait: 'Any',
    fishingPower: 250,
    achievement: {
      achievementId: 6258,
      achievementBit: 2
    },
    avidAchievement: {
      achievementId: 6466,
      achievementBit: 2
    }
  },
  {
    name: 'Snakehead',
    id: 96310,
    rarity: 3,
    location: 'The Echovald Wilds',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Grotto Fish"],
    favoredBait: 'Any',
    fishingPower: 300,
    achievement: {
      achievementId: 6258,
      achievementBit: 9
    },
    avidAchievement: {
      achievementId: 6466,
      achievementBit: 9
    }
  },
  {
    name: 'Cherry Barb',
    id: 96834,
    rarity: 4,
    location: 'The Echovald Wilds',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["Lake Fish","Deep Fishing Hole","Rare Fish"],
    favoredBait: 'Any',
    fishingPower: 250,
    achievement: {
      achievementId: 6258,
      achievementBit: 3
    },
    avidAchievement: {
      achievementId: 6466,
      achievementBit: 3
    }
  },
  {
    name: 'Petrifish',
    id: 96792,
    rarity: 4,
    location: 'The Echovald Wilds',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["Grotto Fish"],
    favoredBait: 'Any',
    fishingPower: 300,
    achievement: {
      achievementId: 6258,
      achievementBit: 10
    },
    avidAchievement: {
      achievementId: 6466,
      achievementBit: 10
    }
  },
  {
    name: 'Amber Trout',
    id: 95861,
    rarity: 5,
    location: 'The Echovald Wilds',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Lake Fish","Deep Fishing Hole"],
    favoredBait: 'Any',
    fishingPower: 250,
    achievement: {
      achievementId: 6258,
      achievementBit: 4
    },
    avidAchievement: {
      achievementId: 6466,
      achievementBit: 4
    }
  },
  {
    name: 'Albino Gourami',
    id: 97329,
    rarity: 5,
    location: 'The Echovald Wilds',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["Grotto Fish"],
    favoredBait: 'Any',
    fishingPower: 300,
    achievement: {
      achievementId: 6258,
      achievementBit: 11
    },
    avidAchievement: {
      achievementId: 6466,
      achievementBit: 11
    }
  },
  {
    name: 'Royal Featherback',
    id: 95584,
    rarity: 6,
    location: 'The Echovald Wilds',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Lake Fish","Deep Fishing Hole"],
    favoredBait: 'Freshwater Minnow',
    fishingPower: 250,
    achievement: {
      achievementId: 6258,
      achievementBit: 5
    },
    avidAchievement: {
      achievementId: 6466,
      achievementBit: 5
    }
  },
  {
    name: 'Albino Axolotl',
    id: 95765,
    rarity: 6,
    location: 'The Echovald Wilds',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Grotto Fish"],
    favoredBait: 'Glow Worm',
    fishingPower: 300,
    achievement: {
      achievementId: 6258,
      achievementBit: 12
    },
    avidAchievement: {
      achievementId: 6466,
      achievementBit: 12
    }
  },
  {
    name: 'Melandru\'s Lurker',
    id: 97716,
    rarity: 7,
    location: 'The Echovald Wilds',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Lake Fish","Deep Fishing Hole"],
    favoredBait: 'Freshwater Minnow',
    fishingPower: 250,
    achievement: {
      achievementId: 6258,
      achievementBit: 6
    },
    avidAchievement: {
      achievementId: 6466,
      achievementBit: 6
    }
  },
  {
    name: 'Dark Sleeper',
    id: 97559,
    rarity: 7,
    location: 'The Echovald Wilds',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Grotto Fish"],
    favoredBait: 'Glow Worm',
    fishingPower: 300,
    achievement: {
      achievementId: 6258,
      achievementBit: 13
    },
    avidAchievement: {
      achievementId: 6466,
      achievementBit: 13
    }
  },
  {
    name: 'Boxfish',
    id: 97240,
    rarity: 1,
    location: 'Dragon\'s End',
    timeOfDay: [],
    openWater: true,
    fishingHole: ["None"],
    favoredBait: 'Any',
    fishingPower: 250,
    achievement: {
      achievementId: 6506,
      achievementBit: 0
    },
    avidAchievement: {
      achievementId: 6402,
      achievementBit: 0
    }
  },
  {
    name: 'Rohu',
    id: 96913,
    rarity: 1,
    location: 'Dragon\'s End',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["None"],
    favoredBait: 'Any',
    fishingPower: 250,
    achievement: {
      achievementId: 6506,
      achievementBit: 7
    },
    avidAchievement: {
      achievementId: 6402,
      achievementBit: 7
    }
  },
  {
    name: 'Canthan Carp',
    id: 97814,
    rarity: 2,
    location: 'Dragon\'s End',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["Any"],
    favoredBait: 'Any',
    fishingPower: 250,
    achievement: {
      achievementId: 6506,
      achievementBit: 1
    },
    avidAchievement: {
      achievementId: 6402,
      achievementBit: 1
    }
  },
  {
    name: 'Gourami',
    id: 95729,
    rarity: 2,
    location: 'Dragon\'s End',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["Any"],
    favoredBait: 'Any',
    fishingPower: 250,
    achievement: {
      achievementId: 6506,
      achievementBit: 8
    },
    avidAchievement: {
      achievementId: 6402,
      achievementBit: 8
    }
  },
  {
    name: 'Jade Lamprey',
    id: 97853,
    rarity: 3,
    location: 'Dragon\'s End',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["Quarry Fish"],
    favoredBait: 'Any',
    fishingPower: 300,
    achievement: {
      achievementId: 6506,
      achievementBit: 2
    },
    avidAchievement: {
      achievementId: 6402,
      achievementBit: 2
    }
  },
  {
    name: 'Toadfish',
    id: 95670,
    rarity: 3,
    location: 'Dragon\'s End',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["Cavern Fish"],
    favoredBait: 'Any',
    fishingPower: 350,
    achievement: {
      achievementId: 6506,
      achievementBit: 9
    },
    avidAchievement: {
      achievementId: 6402,
      achievementBit: 9
    }
  },
  {
    name: 'Spotted Pufferfish',
    id: 97183,
    rarity: 4,
    location: 'Dragon\'s End',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Quarry Fish"],
    favoredBait: 'Any',
    fishingPower: 300,
    achievement: {
      achievementId: 6506,
      achievementBit: 3
    },
    avidAchievement: {
      achievementId: 6402,
      achievementBit: 3
    }
  },
  {
    name: 'Sheatfish',
    id: 96076,
    rarity: 4,
    location: 'Dragon\'s End',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["Cavern Fish"],
    favoredBait: 'Any',
    fishingPower: 350,
    achievement: {
      achievementId: 6506,
      achievementBit: 10
    },
    avidAchievement: {
      achievementId: 6402,
      achievementBit: 10
    }
  },
  {
    name: 'Giant Gourami',
    id: 96443,
    rarity: 5,
    location: 'Dragon\'s End',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["Quarry Fish"],
    favoredBait: 'Any',
    fishingPower: 300,
    achievement: {
      achievementId: 6506,
      achievementBit: 4
    },
    avidAchievement: {
      achievementId: 6402,
      achievementBit: 4
    }
  },
  {
    name: 'Unicorn Fish',
    id: 97794,
    rarity: 5,
    location: 'Dragon\'s End',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Cavern Fish"],
    favoredBait: 'Any',
    fishingPower: 350,
    achievement: {
      achievementId: 6506,
      achievementBit: 11
    },
    avidAchievement: {
      achievementId: 6402,
      achievementBit: 11
    }
  },
  {
    name: 'Jade Sea Turtle',
    id: 96181,
    rarity: 6,
    location: 'Dragon\'s End',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Quarry Fish"],
    favoredBait: 'Nightcrawler',
    fishingPower: 300,
    achievement: {
      achievementId: 6506,
      achievementBit: 5
    },
    avidAchievement: {
      achievementId: 6402,
      achievementBit: 5
    }
  },
  {
    name: 'Axolotl',
    id: 95699,
    rarity: 6,
    location: 'Dragon\'s End',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Cavern Fish"],
    favoredBait: 'Nightcrawler',
    fishingPower: 350,
    achievement: {
      achievementId: 6506,
      achievementBit: 12
    },
    avidAchievement: {
      achievementId: 6402,
      achievementBit: 12
    }
  },
  {
    name: 'Cuttlefish',
    id: 96817,
    rarity: 7,
    location: 'Dragon\'s End',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Quarry Fish"],
    favoredBait: 'Shrimpling',
    fishingPower: 300,
    achievement: {
      achievementId: 6506,
      achievementBit: 6
    },
    avidAchievement: {
      achievementId: 6402,
      achievementBit: 6
    }
  },
  {
    name: 'Chambered Nautilus',
    id: 95632,
    rarity: 7,
    location: 'Dragon\'s End',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["Cavern Fish"],
    favoredBait: 'Shrimpling',
    fishingPower: 350,
    achievement: {
      achievementId: 6506,
      achievementBit: 13
    },
    avidAchievement: {
      achievementId: 6402,
      achievementBit: 13
    }
  },
  {
    name: 'Bitterling',
    id: 96297,
    rarity: 1,
    location: 'Ascalon',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["None"],
    favoredBait: 'Any',
    fishingPower: 400,
    achievement: {
      achievementId: 6330,
      achievementBit: 0
    },
    avidAchievement: {
      achievementId: 6484,
      achievementBit: 0
    }
  },
  {
    name: 'Bream',
    id: 97584,
    rarity: 1,
    location: 'Ascalon',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["None"],
    favoredBait: 'Any',
    fishingPower: 400,
    achievement: {
      achievementId: 6330,
      achievementBit: 7
    },
    avidAchievement: {
      achievementId: 6484,
      achievementBit: 7
    }
  },
  {
    name: 'Cutthroat Trout',
    id: 96532,
    rarity: 1,
    location: 'Ascalon',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["None"],
    favoredBait: 'Fish Egg',
    fishingPower: 400,
    achievement: {
      achievementId: 6330,
      achievementBit: 14
    },
    avidAchievement: {
      achievementId: 6484,
      achievementBit: 14
    }
  },
  {
    name: 'Bluegill',
    id: 97885,
    rarity: 2,
    location: 'Ascalon',
    timeOfDay: [],
    openWater: true,
    fishingHole: ["Any"],
    favoredBait: 'Any',
    fishingPower: 400,
    achievement: {
      achievementId: 6330,
      achievementBit: 1
    },
    avidAchievement: {
      achievementId: 6484,
      achievementBit: 1
    }
  },
  {
    name: 'Brook Trout',
    id: 96176,
    rarity: 2,
    location: 'Ascalon',
    timeOfDay: [],
    openWater: true,
    fishingHole: ["Any"],
    favoredBait: 'Fish Egg',
    fishingPower: 400,
    achievement: {
      achievementId: 6330,
      achievementBit: 8
    },
    avidAchievement: {
      achievementId: 6484,
      achievementBit: 8
    }
  },
  {
    name: 'Smallmouth Bass',
    id: 97121,
    rarity: 2,
    location: 'Ascalon',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["Any"],
    favoredBait: 'Any',
    fishingPower: 400,
    achievement: {
      achievementId: 6330,
      achievementBit: 15
    },
    avidAchievement: {
      achievementId: 6484,
      achievementBit: 15
    }
  },
  {
    name: 'Rock Bass',
    id: 97074,
    rarity: 3,
    location: 'Ascalon',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["Lake Fish"],
    favoredBait: 'Any',
    fishingPower: 450,
    achievement: {
      achievementId: 6330,
      achievementBit: 2
    },
    avidAchievement: {
      achievementId: 6484,
      achievementBit: 2
    }
  },
  {
    name: 'Catfish',
    id: 96942,
    rarity: 3,
    location: 'Ascalon',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Lake Fish"],
    favoredBait: 'Any',
    fishingPower: 450,
    achievement: {
      achievementId: 6330,
      achievementBit: 9
    },
    avidAchievement: {
      achievementId: 6484,
      achievementBit: 9
    }
  },
  {
    name: 'Black Crappie',
    id: 96931,
    rarity: 3,
    location: 'Ascalon',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["Noxious Water Fish"],
    favoredBait: 'Any',
    fishingPower: 500,
    achievement: {
      achievementId: 6330,
      achievementBit: 16
    },
    avidAchievement: {
      achievementId: 6484,
      achievementBit: 16
    }
  },
  {
    name: 'Largemouth Bass',
    id: 95875,
    rarity: 4,
    location: 'Ascalon',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["Lake Fish"],
    favoredBait: 'Any',
    fishingPower: 450,
    achievement: {
      achievementId: 6330,
      achievementBit: 3
    },
    avidAchievement: {
      achievementId: 6484,
      achievementBit: 3
    }
  },
  {
    name: 'Rainbow Trout',
    id: 96226,
    rarity: 4,
    location: 'Ascalon',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Lake Fish"],
    favoredBait: 'Fish Egg',
    fishingPower: 450,
    achievement: {
      achievementId: 6330,
      achievementBit: 10
    },
    avidAchievement: {
      achievementId: 6484,
      achievementBit: 10
    }
  },
  {
    name: 'Yellow Perch',
    id: 97887,
    rarity: 4,
    location: 'Ascalon',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Noxious Water Fish"],
    favoredBait: 'Any',
    fishingPower: 500,
    achievement: {
      achievementId: 6330,
      achievementBit: 17
    },
    avidAchievement: {
      achievementId: 6484,
      achievementBit: 17
    }
  },
  {
    name: 'Golden Trout',
    id: 96985,
    rarity: 5,
    location: 'Ascalon',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Lake Fish"],
    favoredBait: 'Fish Egg',
    fishingPower: 450,
    achievement: {
      achievementId: 6330,
      achievementBit: 4
    },
    avidAchievement: {
      achievementId: 6484,
      achievementBit: 4
    }
  },
  {
    name: 'Ripsaw Catfish',
    id: 96672,
    rarity: 5,
    location: 'Ascalon',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Lake Fish"],
    favoredBait: 'Any',
    fishingPower: 450,
    achievement: {
      achievementId: 6330,
      achievementBit: 11
    },
    avidAchievement: {
      achievementId: 6484,
      achievementBit: 11
    }
  },
  {
    name: 'Warmouth',
    id: 97479,
    rarity: 5,
    location: 'Ascalon',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["Noxious Water Fish"],
    favoredBait: 'Lightning Bug',
    fishingPower: 500,
    achievement: {
      achievementId: 6330,
      achievementBit: 18
    },
    avidAchievement: {
      achievementId: 6484,
      achievementBit: 18
    }
  },
  {
    name: 'Gar',
    id: 96105,
    rarity: 6,
    location: 'Ascalon',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Lake Fish"],
    favoredBait: 'Freshwater Minnow',
    fishingPower: 450,
    achievement: {
      achievementId: 6330,
      achievementBit: 5
    },
    avidAchievement: {
      achievementId: 6484,
      achievementBit: 5
    }
  },
  {
    name: 'Giant Catfish',
    id: 95843,
    rarity: 6,
    location: 'Ascalon',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Lake Fish"],
    favoredBait: 'Freshwater Minnow',
    fishingPower: 450,
    achievement: {
      achievementId: 6330,
      achievementBit: 12
    },
    avidAchievement: {
      achievementId: 6484,
      achievementBit: 12
    }
  },
  {
    name: 'Aquatic Frog',
    id: 97163,
    rarity: 6,
    location: 'Ascalon',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["Noxious Water Fish"],
    favoredBait: 'Lightning Bug',
    fishingPower: 500,
    achievement: {
      achievementId: 6330,
      achievementBit: 19
    },
    avidAchievement: {
      achievementId: 6484,
      achievementBit: 19
    }
  },
  {
    name: 'Muskellunge',
    id: 95609,
    rarity: 7,
    location: 'Ascalon',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Lake Fish"],
    favoredBait: 'Freshwater Minnow',
    fishingPower: 450,
    achievement: {
      achievementId: 6330,
      achievementBit: 6
    },
    avidAchievement: {
      achievementId: 6484,
      achievementBit: 6
    }
  },
  {
    name: 'Old Whiskers',
    id: 97004,
    rarity: 7,
    location: 'Ascalon',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Lake Fish"],
    favoredBait: 'Freshwater Minnow',
    fishingPower: 450,
    achievement: {
      achievementId: 6330,
      achievementBit: 13
    },
    avidAchievement: {
      achievementId: 6484,
      achievementBit: 13
    }
  },
  {
    name: 'Branded Eel',
    id: 96081,
    rarity: 7,
    location: 'Ascalon',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Noxious Water Fish"],
    favoredBait: 'Lightning Bug',
    fishingPower: 500,
    achievement: {
      achievementId: 6330,
      achievementBit: 20
    },
    avidAchievement: {
      achievementId: 6484,
      achievementBit: 20
    }
  },
  {
    name: 'Krytan Crawfish',
    id: 95961,
    rarity: 1,
    location: 'Kryta',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["None"],
    favoredBait: 'Any',
    fishingPower: 300,
    achievement: {
      achievementId: 6068,
      achievementBit: 0
    },
    avidAchievement: {
      achievementId: 6263,
      achievementBit: 0
    }
  },
  {
    name: 'Speckled Perch',
    id: 97462,
    rarity: 1,
    location: 'Kryta',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["None"],
    favoredBait: 'Any',
    fishingPower: 300,
    achievement: {
      achievementId: 6068,
      achievementBit: 7
    },
    avidAchievement: {
      achievementId: 6263,
      achievementBit: 7
    }
  },
  {
    name: 'Spotted Flounder',
    id: 96001,
    rarity: 1,
    location: 'Kryta',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["None"],
    favoredBait: 'Any',
    fishingPower: 300,
    achievement: {
      achievementId: 6068,
      achievementBit: 14
    },
    avidAchievement: {
      achievementId: 6263,
      achievementBit: 14
    }
  },
  {
    name: 'Delavan Guppy',
    id: 96032,
    rarity: 2,
    location: 'Kryta',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["Any"],
    favoredBait: 'Any',
    fishingPower: 300,
    achievement: {
      achievementId: 6068,
      achievementBit: 1
    },
    avidAchievement: {
      achievementId: 6263,
      achievementBit: 1
    }
  },
  {
    name: 'Round Goby',
    id: 96740,
    rarity: 2,
    location: 'Kryta',
    timeOfDay: [],
    openWater: true,
    fishingHole: ["Any"],
    favoredBait: 'Any',
    fishingPower: 300,
    achievement: {
      achievementId: 6068,
      achievementBit: 8
    },
    avidAchievement: {
      achievementId: 6263,
      achievementBit: 8
    }
  },
  {
    name: 'Sailfin Molly',
    id: 95881,
    rarity: 2,
    location: 'Kryta',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["Any"],
    favoredBait: 'Any',
    fishingPower: 300,
    achievement: {
      achievementId: 6068,
      achievementBit: 15
    },
    avidAchievement: {
      achievementId: 6263,
      achievementBit: 15
    }
  },
  {
    name: 'Steelhead Trout',
    id: 96192,
    rarity: 3,
    location: 'Kryta',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["River Fish"],
    favoredBait: 'Fish Egg',
    fishingPower: 350,
    achievement: {
      achievementId: 6068,
      achievementBit: 2
    },
    avidAchievement: {
      achievementId: 6263,
      achievementBit: 2
    }
  },
  {
    name: 'Striped Bass',
    id: 97341,
    rarity: 3,
    location: 'Kryta',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["Lake Fish"],
    favoredBait: 'Any',
    fishingPower: 400,
    achievement: {
      achievementId: 6068,
      achievementBit: 9
    },
    avidAchievement: {
      achievementId: 6263,
      achievementBit: 9
    }
  },
  {
    name: 'Swampblight Lamprey',
    id: 97785,
    rarity: 3,
    location: 'Kryta',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["Coastal Fish"],
    favoredBait: 'Any',
    fishingPower: 450,
    achievement: {
      achievementId: 6068,
      achievementBit: 16
    },
    avidAchievement: {
      achievementId: 6263,
      achievementBit: 16
    }
  },
  {
    name: 'Croaker',
    id: 97787,
    rarity: 4,
    location: 'Kryta',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["River Fish"],
    favoredBait: 'Any',
    fishingPower: 350,
    achievement: {
      achievementId: 6068,
      achievementBit: 3
    },
    avidAchievement: {
      achievementId: 6263,
      achievementBit: 3
    }
  },
  {
    name: 'Black Bass',
    id: 97509,
    rarity: 4,
    location: 'Kryta',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["Lake Fish"],
    favoredBait: 'Any',
    fishingPower: 400,
    achievement: {
      achievementId: 6068,
      achievementBit: 10
    },
    avidAchievement: {
      achievementId: 6263,
      achievementBit: 10
    }
  },
  {
    name: 'Silver Moony',
    id: 97005,
    rarity: 4,
    location: 'Kryta',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Coastal Fish"],
    favoredBait: 'Any',
    fishingPower: 450,
    achievement: {
      achievementId: 6068,
      achievementBit: 17
    },
    avidAchievement: {
      achievementId: 6263,
      achievementBit: 17
    }
  },
  {
    name: 'Divinity Angelfin',
    id: 95819,
    rarity: 5,
    location: 'Kryta',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["River Fish"],
    favoredBait: 'Any',
    fishingPower: 350,
    achievement: {
      achievementId: 6068,
      achievementBit: 4
    },
    avidAchievement: {
      achievementId: 6263,
      achievementBit: 4
    }
  },
  {
    name: 'Quagmire Eel',
    id: 97103,
    rarity: 5,
    location: 'Kryta',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Lake Fish"],
    favoredBait: 'Any',
    fishingPower: 400,
    achievement: {
      achievementId: 6068,
      achievementBit: 11
    },
    avidAchievement: {
      achievementId: 6263,
      achievementBit: 11
    }
  },
  {
    name: 'Krytan Puffer',
    id: 96667,
    rarity: 5,
    location: 'Kryta',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Coastal Fish"],
    favoredBait: 'Any',
    fishingPower: 450,
    achievement: {
      achievementId: 6068,
      achievementBit: 18
    },
    avidAchievement: {
      achievementId: 6263,
      achievementBit: 18
    }
  },
  {
    name: 'Queenfish',
    id: 95731,
    rarity: 6,
    location: 'Kryta',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["River Fish"],
    favoredBait: 'Freshwater Minnow',
    fishingPower: 350,
    achievement: {
      achievementId: 6068,
      achievementBit: 5
    },
    avidAchievement: {
      achievementId: 6263,
      achievementBit: 5
    }
  },
  {
    name: 'Royal Pike',
    id: 96571,
    rarity: 6,
    location: 'Kryta',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Lake Fish"],
    favoredBait: 'Freshwater Minnow',
    fishingPower: 400,
    achievement: {
      achievementId: 6068,
      achievementBit: 12
    },
    avidAchievement: {
      achievementId: 6263,
      achievementBit: 12
    }
  },
  {
    name: 'Holy Mackerel',
    id: 97409,
    rarity: 6,
    location: 'Kryta',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Coastal Fish"],
    favoredBait: 'Shrimpling',
    fishingPower: 450,
    achievement: {
      achievementId: 6068,
      achievementBit: 19
    },
    avidAchievement: {
      achievementId: 6263,
      achievementBit: 19
    }
  },
  {
    name: 'Mud Skate',
    id: 96543,
    rarity: 7,
    location: 'Kryta',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["River Fish"],
    favoredBait: 'Freshwater Minnow',
    fishingPower: 350,
    achievement: {
      achievementId: 6068,
      achievementBit: 6
    },
    avidAchievement: {
      achievementId: 6263,
      achievementBit: 6
    }
  },
  {
    name: 'Slaughterfish',
    id: 97485,
    rarity: 7,
    location: 'Kryta',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Lake Fish"],
    favoredBait: 'Freshwater Minnow',
    fishingPower: 400,
    achievement: {
      achievementId: 6068,
      achievementBit: 13
    },
    avidAchievement: {
      achievementId: 6263,
      achievementBit: 13
    }
  },
  {
    name: 'Black Lionfish',
    id: 97527,
    rarity: 7,
    location: 'Kryta',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["Coastal Fish"],
    favoredBait: 'Shrimpling',
    fishingPower: 450,
    achievement: {
      achievementId: 6068,
      achievementBit: 20
    },
    avidAchievement: {
      achievementId: 6263,
      achievementBit: 20
    }
  },
  {
    name: 'Brackish Goby',
    id: 96020,
    rarity: 1,
    location: 'Maguuma Jungle',
    timeOfDay: [],
    openWater: true,
    fishingHole: ["None"],
    favoredBait: 'Any',
    fishingPower: 450,
    achievement: {
      achievementId: 6344,
      achievementBit: 0
    },
    avidAchievement: {
      achievementId: 6475,
      achievementBit: 0
    }
  },
  {
    name: 'Piranha',
    id: 96201,
    rarity: 1,
    location: 'Maguuma Jungle',
    timeOfDay: [],
    openWater: true,
    fishingHole: ["None"],
    favoredBait: 'Any',
    fishingPower: 450,
    achievement: {
      achievementId: 6344,
      achievementBit: 7
    },
    avidAchievement: {
      achievementId: 6475,
      achievementBit: 7
    }
  },
  {
    name: 'Snook',
    id: 96983,
    rarity: 1,
    location: 'Maguuma Jungle',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["None"],
    favoredBait: 'Any',
    fishingPower: 450,
    achievement: {
      achievementId: 6344,
      achievementBit: 14
    },
    avidAchievement: {
      achievementId: 6475,
      achievementBit: 14
    }
  },
  {
    name: 'Oscar',
    id: 97568,
    rarity: 2,
    location: 'Maguuma Jungle',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["Any"],
    favoredBait: 'Any',
    fishingPower: 450,
    achievement: {
      achievementId: 6344,
      achievementBit: 1
    },
    avidAchievement: {
      achievementId: 6475,
      achievementBit: 1
    }
  },
  {
    name: 'Silver Drum',
    id: 95751,
    rarity: 2,
    location: 'Maguuma Jungle',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["Any"],
    favoredBait: 'Any',
    fishingPower: 450,
    achievement: {
      achievementId: 6344,
      achievementBit: 8
    },
    avidAchievement: {
      achievementId: 6475,
      achievementBit: 8
    }
  },
  {
    name: 'Surubim',
    id: 96653,
    rarity: 2,
    location: 'Maguuma Jungle',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["Any"],
    favoredBait: 'Any',
    fishingPower: 450,
    achievement: {
      achievementId: 6344,
      achievementBit: 15
    },
    avidAchievement: {
      achievementId: 6475,
      achievementBit: 15
    }
  },
  {
    name: 'Bicuda',
    id: 96325,
    rarity: 3,
    location: 'Maguuma Jungle',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["Freshwater Fish"],
    favoredBait: 'Any',
    fishingPower: 500,
    achievement: {
      achievementId: 6344,
      achievementBit: 2
    },
    avidAchievement: {
      achievementId: 6475,
      achievementBit: 2
    }
  },
  {
    name: 'Payara',
    id: 96191,
    rarity: 3,
    location: 'Maguuma Jungle',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["Freshwater Fish"],
    favoredBait: 'Any',
    fishingPower: 500,
    achievement: {
      achievementId: 6344,
      achievementBit: 9
    },
    avidAchievement: {
      achievementId: 6475,
      achievementBit: 9
    }
  },
  {
    name: 'Maguuma Trout',
    id: 97546,
    rarity: 3,
    location: 'Maguuma Jungle',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Saltwater Fish"],
    favoredBait: 'Any',
    fishingPower: 550,
    achievement: {
      achievementId: 6344,
      achievementBit: 16
    },
    avidAchievement: {
      achievementId: 6475,
      achievementBit: 16
    }
  },
  {
    name: 'Pacu',
    id: 96320,
    rarity: 4,
    location: 'Maguuma Jungle',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["Freshwater Fish"],
    favoredBait: 'Any',
    fishingPower: 500,
    achievement: {
      achievementId: 6344,
      achievementBit: 3
    },
    avidAchievement: {
      achievementId: 6475,
      achievementBit: 3
    }
  },
  {
    name: 'Peacock Bass',
    id: 97841,
    rarity: 4,
    location: 'Maguuma Jungle',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["Freshwater Fish"],
    favoredBait: 'Any',
    fishingPower: 500,
    achievement: {
      achievementId: 6344,
      achievementBit: 10
    },
    avidAchievement: {
      achievementId: 6475,
      achievementBit: 10
    }
  },
  {
    name: 'Wolffish',
    id: 96645,
    rarity: 4,
    location: 'Maguuma Jungle',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["Saltwater Fish"],
    favoredBait: 'Any',
    fishingPower: 550,
    achievement: {
      achievementId: 6344,
      achievementBit: 17
    },
    avidAchievement: {
      achievementId: 6475,
      achievementBit: 17
    }
  },
  {
    name: 'Arowana',
    id: 97057,
    rarity: 5,
    location: 'Maguuma Jungle',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Freshwater Fish"],
    favoredBait: 'Any',
    fishingPower: 500,
    achievement: {
      achievementId: 6344,
      achievementBit: 4
    },
    avidAchievement: {
      achievementId: 6475,
      achievementBit: 4
    }
  },
  {
    name: 'Sardinata',
    id: 97644,
    rarity: 5,
    location: 'Maguuma Jungle',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["Freshwater Fish"],
    favoredBait: 'Any',
    fishingPower: 500,
    achievement: {
      achievementId: 6344,
      achievementBit: 11
    },
    avidAchievement: {
      achievementId: 6475,
      achievementBit: 11
    }
  },
  {
    name: 'Maguuma Jack',
    id: 97122,
    rarity: 5,
    location: 'Maguuma Jungle',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["Saltwater Fish"],
    favoredBait: 'Any',
    fishingPower: 550,
    achievement: {
      achievementId: 6344,
      achievementBit: 18
    },
    avidAchievement: {
      achievementId: 6475,
      achievementBit: 18
    }
  },
  {
    name: 'Golden Dorado',
    id: 96692,
    rarity: 6,
    location: 'Maguuma Jungle',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Freshwater Fish"],
    favoredBait: 'Sparkfly Larva',
    fishingPower: 500,
    achievement: {
      achievementId: 6344,
      achievementBit: 5
    },
    avidAchievement: {
      achievementId: 6475,
      achievementBit: 5
    }
  },
  {
    name: 'Jundia',
    id: 97465,
    rarity: 6,
    location: 'Maguuma Jungle',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["Freshwater Fish"],
    favoredBait: 'Sparkfly Larva',
    fishingPower: 500,
    achievement: {
      achievementId: 6344,
      achievementBit: 12
    },
    avidAchievement: {
      achievementId: 6475,
      achievementBit: 12
    }
  },
  {
    name: 'Rainbow Glowfish',
    id: 97543,
    rarity: 6,
    location: 'Maguuma Jungle',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Saltwater Fish"],
    favoredBait: 'Sardine',
    fishingPower: 550,
    achievement: {
      achievementId: 6344,
      achievementBit: 19
    },
    avidAchievement: {
      achievementId: 6475,
      achievementBit: 19
    }
  },
  {
    name: 'Arapaima',
    id: 97078,
    rarity: 7,
    location: 'Maguuma Jungle',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Freshwater Fish"],
    favoredBait: 'Sparkfly Larva',
    fishingPower: 500,
    achievement: {
      achievementId: 6344,
      achievementBit: 6
    },
    avidAchievement: {
      achievementId: 6475,
      achievementBit: 6
    }
  },
  {
    name: 'Goliath Grouper',
    id: 95908,
    rarity: 7,
    location: 'Maguuma Jungle',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["Saltwater Fish"],
    favoredBait: 'Sardine',
    fishingPower: 550,
    achievement: {
      achievementId: 6344,
      achievementBit: 13
    },
    avidAchievement: {
      achievementId: 6475,
      achievementBit: 13
    }
  },
  {
    name: 'Royal Starfish',
    id: 96439,
    rarity: 7,
    location: 'Maguuma Jungle',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Saltwater Fish"],
    favoredBait: 'Any',
    fishingPower: 550,
    achievement: {
      achievementId: 6344,
      achievementBit: 20
    },
    avidAchievement: {
      achievementId: 6475,
      achievementBit: 20
    }
  },
  {
    name: 'Alewife',
    id: 97799,
    rarity: 1,
    location: 'Shiverpeak Mountains',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["None"],
    favoredBait: 'Any',
    fishingPower: 350,
    achievement: {
      achievementId: 6179,
      achievementBit: 0
    },
    avidAchievement: {
      achievementId: 6153,
      achievementBit: 0
    }
  },
  {
    name: 'Icefish',
    id: 95766,
    rarity: 1,
    location: 'Shiverpeak Mountains',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["None"],
    favoredBait: 'Any',
    fishingPower: 350,
    achievement: {
      achievementId: 6179,
      achievementBit: 7
    },
    avidAchievement: {
      achievementId: 6153,
      achievementBit: 7
    }
  },
  {
    name: 'Snow Crab',
    id: 96276,
    rarity: 1,
    location: 'Shiverpeak Mountains',
    timeOfDay: [],
    openWater: true,
    fishingHole: ["None"],
    favoredBait: 'Any',
    fishingPower: 350,
    achievement: {
      achievementId: 6179,
      achievementBit: 14
    },
    avidAchievement: {
      achievementId: 6153,
      achievementBit: 14
    }
  },
  {
    name: 'Alpine Char',
    id: 97364,
    rarity: 2,
    location: 'Shiverpeak Mountains',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["Any"],
    favoredBait: 'Any',
    fishingPower: 350,
    achievement: {
      achievementId: 6179,
      achievementBit: 1
    },
    avidAchievement: {
      achievementId: 6153,
      achievementBit: 1
    }
  },
  {
    name: 'Grayling',
    id: 97713,
    rarity: 2,
    location: 'Shiverpeak Mountains',
    timeOfDay: [],
    openWater: true,
    fishingHole: ["Any"],
    favoredBait: 'Any',
    fishingPower: 350,
    achievement: {
      achievementId: 6179,
      achievementBit: 8
    },
    avidAchievement: {
      achievementId: 6153,
      achievementBit: 8
    }
  },
  {
    name: 'Walleye',
    id: 96643,
    rarity: 2,
    location: 'Shiverpeak Mountains',
    timeOfDay: [],
    openWater: true,
    fishingHole: ["Any"],
    favoredBait: 'Any',
    fishingPower: 350,
    achievement: {
      achievementId: 6179,
      achievementBit: 15
    },
    avidAchievement: {
      achievementId: 6153,
      achievementBit: 15
    }
  },
  {
    name: 'White Bass',
    id: 97356,
    rarity: 3,
    location: 'Shiverpeak Mountains',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["Lake Fish"],
    favoredBait: 'Any',
    fishingPower: 400,
    achievement: {
      achievementId: 6179,
      achievementBit: 2
    },
    avidAchievement: {
      achievementId: 6153,
      achievementBit: 2
    }
  },
  {
    name: 'Northern Pike',
    id: 97866,
    rarity: 3,
    location: 'Shiverpeak Mountains',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Lake Fish"],
    favoredBait: 'Any',
    fishingPower: 400,
    achievement: {
      achievementId: 6179,
      achievementBit: 9
    },
    avidAchievement: {
      achievementId: 6153,
      achievementBit: 9
    }
  },
  {
    name: 'Boreal Cod',
    id: 97456,
    rarity: 3,
    location: 'Shiverpeak Mountains',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["Boreal Fish"],
    favoredBait: 'Any',
    fishingPower: 450,
    achievement: {
      achievementId: 6179,
      achievementBit: 16
    },
    avidAchievement: {
      achievementId: 6153,
      achievementBit: 16
    }
  },
  {
    name: 'Sockeye',
    id: 95668,
    rarity: 4,
    location: 'Shiverpeak Mountains',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["Lake Fish"],
    favoredBait: 'Any',
    fishingPower: 400,
    achievement: {
      achievementId: 6179,
      achievementBit: 3
    },
    avidAchievement: {
      achievementId: 6153,
      achievementBit: 3
    }
  },
  {
    name: 'King Salmon',
    id: 95822,
    rarity: 4,
    location: 'Shiverpeak Mountains',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Lake Fish"],
    favoredBait: 'Any',
    fishingPower: 400,
    achievement: {
      achievementId: 6179,
      achievementBit: 10
    },
    avidAchievement: {
      achievementId: 6153,
      achievementBit: 10
    }
  },
  {
    name: 'Icy Lumpfish',
    id: 97496,
    rarity: 4,
    location: 'Shiverpeak Mountains',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["Boreal Fish"],
    favoredBait: 'Any',
    fishingPower: 450,
    achievement: {
      achievementId: 6179,
      achievementBit: 17
    },
    avidAchievement: {
      achievementId: 6153,
      achievementBit: 17
    }
  },
  {
    name: 'Chain Pickerel',
    id: 95896,
    rarity: 5,
    location: 'Shiverpeak Mountains',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["Lake Fish"],
    favoredBait: 'Any',
    fishingPower: 400,
    achievement: {
      achievementId: 6179,
      achievementBit: 4
    },
    avidAchievement: {
      achievementId: 6153,
      achievementBit: 4
    }
  },
  {
    name: 'Beacon\'s Perch',
    id: 96619,
    rarity: 5,
    location: 'Shiverpeak Mountains',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Boreal Fish"],
    favoredBait: 'Any',
    fishingPower: 450,
    achievement: {
      achievementId: 6179,
      achievementBit: 11
    },
    avidAchievement: {
      achievementId: 6153,
      achievementBit: 11
    }
  },
  {
    name: 'Mystic Remora',
    id: 96373,
    rarity: 5,
    location: 'Shiverpeak Mountains',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Boreal Fish"],
    favoredBait: 'Any',
    fishingPower: 450,
    achievement: {
      achievementId: 6179,
      achievementBit: 18
    },
    avidAchievement: {
      achievementId: 6153,
      achievementBit: 18
    }
  },
  {
    name: 'Cerulean Salamander',
    id: 96218,
    rarity: 6,
    location: 'Shiverpeak Mountains',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Lake Fish"],
    favoredBait: 'Ramshorn Snail',
    fishingPower: 400,
    achievement: {
      achievementId: 6179,
      achievementBit: 5
    },
    avidAchievement: {
      achievementId: 6153,
      achievementBit: 5
    }
  },
  {
    name: 'Lornar\'s Bass',
    id: 97301,
    rarity: 6,
    location: 'Shiverpeak Mountains',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Lake Fish"],
    favoredBait: 'Ramshorn Snail',
    fishingPower: 400,
    achievement: {
      achievementId: 6179,
      achievementBit: 12
    },
    avidAchievement: {
      achievementId: 6153,
      achievementBit: 12
    }
  },
  {
    name: 'Snowflake Eel',
    id: 96954,
    rarity: 6,
    location: 'Shiverpeak Mountains',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Boreal Fish"],
    favoredBait: 'Ramshorn Snail',
    fishingPower: 450,
    achievement: {
      achievementId: 6179,
      achievementBit: 19
    },
    avidAchievement: {
      achievementId: 6153,
      achievementBit: 19
    }
  },
  {
    name: 'Glacial Snakehead',
    id: 96882,
    rarity: 7,
    location: 'Shiverpeak Mountains',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Lake Fish"],
    favoredBait: 'Shrimpling',
    fishingPower: 400,
    achievement: {
      achievementId: 6179,
      achievementBit: 6
    },
    avidAchievement: {
      achievementId: 6153,
      achievementBit: 6
    }
  },
  {
    name: 'Alabaster Oscar',
    id: 95723,
    rarity: 7,
    location: 'Shiverpeak Mountains',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Boreal Fish"],
    favoredBait: 'Ramshorn Snail',
    fishingPower: 450,
    achievement: {
      achievementId: 6179,
      achievementBit: 13
    },
    avidAchievement: {
      achievementId: 6153,
      achievementBit: 13
    }
  },
  {
    name: 'Halibut',
    id: 97225,
    rarity: 7,
    location: 'Shiverpeak Mountains',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["Boreal Fish"],
    favoredBait: 'Shrimpling',
    fishingPower: 450,
    achievement: {
      achievementId: 6179,
      achievementBit: 20
    },
    avidAchievement: {
      achievementId: 6153,
      achievementBit: 20
    }
  },
  {
    name: 'Dusky Grouper',
    id: 96132,
    rarity: 1,
    location: 'Ruins of Orr',
    timeOfDay: [],
    openWater: true,
    fishingHole: ["None"],
    favoredBait: 'Any',
    fishingPower: 600,
    achievement: {
      achievementId: 6363,
      achievementBit: 0
    },
    avidAchievement: {
      achievementId: 6227,
      achievementBit: 0
    }
  },
  {
    name: 'Ghostfish',
    id: 95924,
    rarity: 1,
    location: 'Ruins of Orr',
    timeOfDay: [],
    openWater: true,
    fishingHole: ["None"],
    favoredBait: 'Any',
    fishingPower: 600,
    achievement: {
      achievementId: 6363,
      achievementBit: 7
    },
    avidAchievement: {
      achievementId: 6227,
      achievementBit: 7
    }
  },
  {
    name: 'Murkwater Darter',
    id: 95873,
    rarity: 1,
    location: 'Ruins of Orr',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["None"],
    favoredBait: 'Any',
    fishingPower: 600,
    achievement: {
      achievementId: 6363,
      achievementBit: 14
    },
    avidAchievement: {
      achievementId: 6227,
      achievementBit: 14
    }
  },
  {
    name: 'Albino Blindfish',
    id: 97035,
    rarity: 2,
    location: 'Ruins of Orr',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["Any"],
    favoredBait: 'Any',
    fishingPower: 600,
    achievement: {
      achievementId: 6363,
      achievementBit: 1
    },
    avidAchievement: {
      achievementId: 6227,
      achievementBit: 1
    }
  },
  {
    name: 'Dead Alewife',
    id: 96055,
    rarity: 2,
    location: 'Ruins of Orr',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["Any"],
    favoredBait: 'Any',
    fishingPower: 600,
    achievement: {
      achievementId: 6363,
      achievementBit: 8
    },
    avidAchievement: {
      achievementId: 6227,
      achievementBit: 8
    }
  },
  {
    name: 'Monkfish',
    id: 96666,
    rarity: 2,
    location: 'Ruins of Orr',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["Any"],
    favoredBait: 'Any',
    fishingPower: 600,
    achievement: {
      achievementId: 6363,
      achievementBit: 15
    },
    avidAchievement: {
      achievementId: 6227,
      achievementBit: 15
    }
  },
  {
    name: 'Viperfish',
    id: 96723,
    rarity: 3,
    location: 'Ruins of Orr',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["Offshore Fish"],
    favoredBait: 'Any',
    fishingPower: 700,
    achievement: {
      achievementId: 6363,
      achievementBit: 2
    },
    avidAchievement: {
      achievementId: 6227,
      achievementBit: 2
    }
  },
  {
    name: 'Hagfish',
    id: 97556,
    rarity: 3,
    location: 'Ruins of Orr',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["Offshore Fish"],
    favoredBait: 'Any',
    fishingPower: 700,
    achievement: {
      achievementId: 6363,
      achievementBit: 9
    },
    avidAchievement: {
      achievementId: 6227,
      achievementBit: 9
    }
  },
  {
    name: 'Dhuum Fish',
    id: 96701,
    rarity: 3,
    location: 'Ruins of Orr',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Shore Fish"],
    favoredBait: 'Any',
    fishingPower: 650,
    achievement: {
      achievementId: 6363,
      achievementBit: 16
    },
    avidAchievement: {
      achievementId: 6227,
      achievementBit: 16
    }
  },
  {
    name: 'Abyssal Squid',
    id: 97770,
    rarity: 4,
    location: 'Ruins of Orr',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["Offshore Fish"],
    favoredBait: 'Any',
    fishingPower: 700,
    achievement: {
      achievementId: 6363,
      achievementBit: 3
    },
    avidAchievement: {
      achievementId: 6227,
      achievementBit: 3
    }
  },
  {
    name: 'Spectral Jellyfish',
    id: 96631,
    rarity: 4,
    location: 'Ruins of Orr',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Offshore Fish"],
    favoredBait: 'Any',
    fishingPower: 700,
    achievement: {
      achievementId: 6363,
      achievementBit: 10
    },
    avidAchievement: {
      achievementId: 6227,
      achievementBit: 10
    }
  },
  {
    name: 'Frilled Shark',
    id: 96551,
    rarity: 4,
    location: 'Ruins of Orr',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["Shore Fish"],
    favoredBait: 'Any',
    fishingPower: 650,
    achievement: {
      achievementId: 6363,
      achievementBit: 17
    },
    avidAchievement: {
      achievementId: 6227,
      achievementBit: 17
    }
  },
  {
    name: 'Stargazer',
    id: 97470,
    rarity: 5,
    location: 'Ruins of Orr',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Offshore Fish"],
    favoredBait: 'Any',
    fishingPower: 700,
    achievement: {
      achievementId: 6363,
      achievementBit: 4
    },
    avidAchievement: {
      achievementId: 6227,
      achievementBit: 4
    }
  },
  {
    name: 'Orrian Anglerfish',
    id: 96135,
    rarity: 5,
    location: 'Ruins of Orr',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["Offshore Fish"],
    favoredBait: 'Any',
    fishingPower: 700,
    achievement: {
      achievementId: 6363,
      achievementBit: 11
    },
    avidAchievement: {
      achievementId: 6227,
      achievementBit: 11
    }
  },
  {
    name: 'Man-of-War',
    id: 97302,
    rarity: 5,
    location: 'Ruins of Orr',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["Shore Fish"],
    favoredBait: 'Any',
    fishingPower: 650,
    achievement: {
      achievementId: 6363,
      achievementBit: 18
    },
    avidAchievement: {
      achievementId: 6227,
      achievementBit: 18
    }
  },
  {
    name: 'Blobfish',
    id: 96813,
    rarity: 6,
    location: 'Ruins of Orr',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["Offshore Fish"],
    favoredBait: 'Leech',
    fishingPower: 700,
    achievement: {
      achievementId: 6363,
      achievementBit: 5
    },
    avidAchievement: {
      achievementId: 6227,
      achievementBit: 5
    }
  },
  {
    name: 'Giant Octopus',
    id: 96874,
    rarity: 6,
    location: 'Ruins of Orr',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Offshore Fish"],
    favoredBait: 'Sardine',
    fishingPower: 700,
    achievement: {
      achievementId: 6363,
      achievementBit: 12
    },
    avidAchievement: {
      achievementId: 6227,
      achievementBit: 12
    }
  },
  {
    name: 'Risen Sea Bass',
    id: 97186,
    rarity: 6,
    location: 'Ruins of Orr',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["Shore Fish"],
    favoredBait: 'Leech',
    fishingPower: 650,
    achievement: {
      achievementId: 6363,
      achievementBit: 19
    },
    avidAchievement: {
      achievementId: 6227,
      achievementBit: 19
    }
  },
  {
    name: 'Benthic Behemoth',
    id: 96332,
    rarity: 7,
    location: 'Ruins of Orr',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["Offshore Fish"],
    favoredBait: 'Leech',
    fishingPower: 700,
    achievement: {
      achievementId: 6363,
      achievementBit: 6
    },
    avidAchievement: {
      achievementId: 6227,
      achievementBit: 6
    }
  },
  {
    name: 'Shipwreck Moray',
    id: 96936,
    rarity: 7,
    location: 'Ruins of Orr',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Offshore Fish"],
    favoredBait: 'Sardine',
    fishingPower: 700,
    achievement: {
      achievementId: 6363,
      achievementBit: 13
    },
    avidAchievement: {
      achievementId: 6227,
      achievementBit: 13
    }
  },
  {
    name: 'Unholy Mackerel',
    id: 97017,
    rarity: 7,
    location: 'Ruins of Orr',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Shore Fish"],
    favoredBait: 'Leech',
    fishingPower: 650,
    achievement: {
      achievementId: 6363,
      achievementBit: 20
    },
    avidAchievement: {
      achievementId: 6227,
      achievementBit: 20
    }
  },
  {
    name: 'Elonian Bass',
    id: 96445,
    rarity: 1,
    location: 'Crystal Desert',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["None"],
    favoredBait: 'Any',
    fishingPower: 500,
    achievement: {
      achievementId: 6317,
      achievementBit: 0
    },
    avidAchievement: {
      achievementId: 6509,
      achievementBit: 0
    }
  },
  {
    name: 'Mahseer',
    id: 96349,
    rarity: 1,
    location: 'Crystal Desert',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["None"],
    favoredBait: 'Any',
    fishingPower: 500,
    achievement: {
      achievementId: 6317,
      achievementBit: 7
    },
    avidAchievement: {
      achievementId: 6509,
      achievementBit: 7
    }
  },
  {
    name: 'Tilapia',
    id: 96854,
    rarity: 1,
    location: 'Crystal Desert',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["None"],
    favoredBait: 'Any',
    fishingPower: 500,
    achievement: {
      achievementId: 6317,
      achievementBit: 14
    },
    avidAchievement: {
      achievementId: 6509,
      achievementBit: 14
    }
  },
  {
    name: 'Elon Tetra',
    id: 96367,
    rarity: 2,
    location: 'Crystal Desert',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["Desert Fish"],
    favoredBait: 'Any',
    fishingPower: 550,
    achievement: {
      achievementId: 6317,
      achievementBit: 1
    },
    avidAchievement: {
      achievementId: 6509,
      achievementBit: 1
    }
  },
  {
    name: 'Lungfish',
    id: 96308,
    rarity: 2,
    location: 'Crystal Desert',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["Desert Fish"],
    favoredBait: 'Any',
    fishingPower: 550,
    achievement: {
      achievementId: 6317,
      achievementBit: 8
    },
    avidAchievement: {
      achievementId: 6509,
      achievementBit: 8
    }
  },
  {
    name: 'Zander',
    id: 97755,
    rarity: 2,
    location: 'Crystal Desert',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["Desert Fish"],
    favoredBait: 'Any',
    fishingPower: 550,
    achievement: {
      achievementId: 6317,
      achievementBit: 15
    },
    avidAchievement: {
      achievementId: 6509,
      achievementBit: 15
    }
  },
  {
    name: 'Barramundi',
    id: 97744,
    rarity: 3,
    location: 'Crystal Desert',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["Desert Fish"],
    favoredBait: 'Any',
    fishingPower: 550,
    achievement: {
      achievementId: 6317,
      achievementBit: 2
    },
    avidAchievement: {
      achievementId: 6509,
      achievementBit: 2
    }
  },
  {
    name: 'Red-Eyed Piranha',
    id: 96676,
    rarity: 3,
    location: 'Crystal Desert',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Desert Fish"],
    favoredBait: 'Any',
    fishingPower: 550,
    achievement: {
      achievementId: 6317,
      achievementBit: 9
    },
    avidAchievement: {
      achievementId: 6509,
      achievementBit: 9
    }
  },
  {
    name: 'Sand Carp',
    id: 95859,
    rarity: 3,
    location: 'Crystal Desert',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["Desert Fish"],
    favoredBait: 'Any',
    fishingPower: 550,
    achievement: {
      achievementId: 6317,
      achievementBit: 16
    },
    avidAchievement: {
      achievementId: 6509,
      achievementBit: 16
    }
  },
  {
    name: 'Giant Barb',
    id: 97848,
    rarity: 4,
    location: 'Crystal Desert',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["Desert Fish"],
    favoredBait: 'Any',
    fishingPower: 550,
    achievement: {
      achievementId: 6317,
      achievementBit: 3
    },
    avidAchievement: {
      achievementId: 6509,
      achievementBit: 3
    }
  },
  {
    name: 'Mudskipper',
    id: 97109,
    rarity: 4,
    location: 'Crystal Desert',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["Desert Fish"],
    favoredBait: 'Any',
    fishingPower: 550,
    achievement: {
      achievementId: 6317,
      achievementBit: 10
    },
    avidAchievement: {
      achievementId: 6509,
      achievementBit: 10
    }
  },
  {
    name: 'Paddlefish',
    id: 95608,
    rarity: 4,
    location: 'Crystal Desert',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["Desert Fish"],
    favoredBait: 'Any',
    fishingPower: 550,
    achievement: {
      achievementId: 6317,
      achievementBit: 17
    },
    avidAchievement: {
      achievementId: 6509,
      achievementBit: 17
    }
  },
  {
    name: 'Gilded Loach',
    id: 96769,
    rarity: 5,
    location: 'Crystal Desert',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Desert Fish"],
    favoredBait: 'Any',
    fishingPower: 550,
    achievement: {
      achievementId: 6317,
      achievementBit: 4
    },
    avidAchievement: {
      achievementId: 6509,
      achievementBit: 4
    }
  },
  {
    name: 'Golden Mahseer',
    id: 96428,
    rarity: 5,
    location: 'Crystal Desert',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Desert Fish"],
    favoredBait: 'Any',
    fishingPower: 550,
    achievement: {
      achievementId: 6317,
      achievementBit: 11
    },
    avidAchievement: {
      achievementId: 6509,
      achievementBit: 11
    }
  },
  {
    name: 'Silver Bichir',
    id: 97187,
    rarity: 5,
    location: 'Crystal Desert',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Desert Fish"],
    favoredBait: 'Any',
    fishingPower: 550,
    achievement: {
      achievementId: 6317,
      achievementBit: 18
    },
    avidAchievement: {
      achievementId: 6509,
      achievementBit: 18
    }
  },
  {
    name: 'Marbled Lungfish',
    id: 96724,
    rarity: 6,
    location: 'Crystal Desert',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["Desert Fish"],
    favoredBait: 'Scorpion',
    fishingPower: 550,
    achievement: {
      achievementId: 6317,
      achievementBit: 5
    },
    avidAchievement: {
      achievementId: 6509,
      achievementBit: 5
    }
  },
  {
    name: 'Striped Catfish',
    id: 96094,
    rarity: 6,
    location: 'Crystal Desert',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Desert Fish"],
    favoredBait: 'Scorpion',
    fishingPower: 550,
    achievement: {
      achievementId: 6317,
      achievementBit: 12
    },
    avidAchievement: {
      achievementId: 6509,
      achievementBit: 12
    }
  },
  {
    name: 'Tigerfish',
    id: 97145,
    rarity: 6,
    location: 'Crystal Desert',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["Desert Fish"],
    favoredBait: 'Mackerel',
    fishingPower: 550,
    achievement: {
      achievementId: 6317,
      achievementBit: 19
    },
    avidAchievement: {
      achievementId: 6509,
      achievementBit: 19
    }
  },
  {
    name: 'Giant Paddlefish',
    id: 97466,
    rarity: 7,
    location: 'Crystal Desert',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Desert Fish"],
    favoredBait: 'Any',
    fishingPower: 550,
    achievement: {
      achievementId: 6317,
      achievementBit: 6
    },
    avidAchievement: {
      achievementId: 6509,
      achievementBit: 6
    }
  },
  {
    name: 'Kaluga',
    id: 97763,
    rarity: 7,
    location: 'Crystal Desert',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["Desert Fish"],
    favoredBait: 'Mackerel',
    fishingPower: 550,
    achievement: {
      achievementId: 6317,
      achievementBit: 13
    },
    avidAchievement: {
      achievementId: 6509,
      achievementBit: 13
    }
  },
  {
    name: 'Vundu',
    id: 95929,
    rarity: 7,
    location: 'Crystal Desert',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["Desert Fish"],
    favoredBait: 'Scorpion',
    fishingPower: 550,
    achievement: {
      achievementId: 6317,
      achievementBit: 20
    },
    avidAchievement: {
      achievementId: 6509,
      achievementBit: 20
    }
  },
  {
    name: 'Sea Trout',
    id: 97369,
    rarity: 1,
    location: 'Desert Isles',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["None"],
    favoredBait: 'Any',
    fishingPower: 550,
    achievement: {
      achievementId: 6106,
      achievementBit: 0
    },
    avidAchievement: {
      achievementId: 6250,
      achievementBit: 0
    }
  },
  {
    name: 'Sheepshead',
    id: 95890,
    rarity: 1,
    location: 'Desert Isles',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["None"],
    favoredBait: 'Any',
    fishingPower: 550,
    achievement: {
      achievementId: 6106,
      achievementBit: 7
    },
    avidAchievement: {
      achievementId: 6250,
      achievementBit: 7
    }
  },
  {
    name: 'Cobia',
    id: 96085,
    rarity: 2,
    location: 'Desert Isles',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["Any"],
    favoredBait: 'Any',
    fishingPower: 550,
    achievement: {
      achievementId: 6106,
      achievementBit: 1
    },
    avidAchievement: {
      achievementId: 6250,
      achievementBit: 1
    }
  },
  {
    name: 'Parrotfish',
    id: 96397,
    rarity: 2,
    location: 'Desert Isles',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["Any"],
    favoredBait: 'Any',
    fishingPower: 550,
    achievement: {
      achievementId: 6106,
      achievementBit: 8
    },
    avidAchievement: {
      achievementId: 6250,
      achievementBit: 8
    }
  },
  {
    name: 'Diamond Trevally',
    id: 95794,
    rarity: 3,
    location: 'Desert Isles',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["Shore Fish"],
    favoredBait: 'Any',
    fishingPower: 600,
    achievement: {
      achievementId: 6106,
      achievementBit: 2
    },
    avidAchievement: {
      achievementId: 6250,
      achievementBit: 2
    }
  },
  {
    name: 'Roosterfish',
    id: 97844,
    rarity: 3,
    location: 'Desert Isles',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["Offshore Fish"],
    favoredBait: 'Any',
    fishingPower: 650,
    achievement: {
      achievementId: 6106,
      achievementBit: 9
    },
    avidAchievement: {
      achievementId: 6250,
      achievementBit: 9
    }
  },
  {
    name: 'Yellowtail Snapper',
    id: 97756,
    rarity: 4,
    location: 'Desert Isles',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Shore Fish"],
    favoredBait: 'Any',
    fishingPower: 600,
    achievement: {
      achievementId: 6106,
      achievementBit: 3
    },
    avidAchievement: {
      achievementId: 6250,
      achievementBit: 3
    }
  },
  {
    name: 'Opah',
    id: 97001,
    rarity: 4,
    location: 'Desert Isles',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["Offshore Fish"],
    favoredBait: 'Any',
    fishingPower: 650,
    achievement: {
      achievementId: 6106,
      achievementBit: 10
    },
    avidAchievement: {
      achievementId: 6250,
      achievementBit: 10
    }
  },
  {
    name: 'Pompano',
    id: 97746,
    rarity: 5,
    location: 'Desert Isles',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["Shore Fish"],
    favoredBait: 'Any',
    fishingPower: 600,
    achievement: {
      achievementId: 6106,
      achievementBit: 4
    },
    avidAchievement: {
      achievementId: 6250,
      achievementBit: 4
    }
  },
  {
    name: 'Wahoo',
    id: 97443,
    rarity: 5,
    location: 'Desert Isles',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Offshore Fish"],
    favoredBait: 'Any',
    fishingPower: 650,
    achievement: {
      achievementId: 6106,
      achievementBit: 11
    },
    avidAchievement: {
      achievementId: 6250,
      achievementBit: 11
    }
  },
  {
    name: 'King Crab',
    id: 96513,
    rarity: 6,
    location: 'Desert Isles',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Shore Fish"],
    favoredBait: 'Mackerel',
    fishingPower: 600,
    achievement: {
      achievementId: 6106,
      achievementBit: 5
    },
    avidAchievement: {
      achievementId: 6250,
      achievementBit: 5
    }
  },
  {
    name: 'Blue Marlin',
    id: 95849,
    rarity: 6,
    location: 'Desert Isles',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Offshore Fish"],
    favoredBait: 'Mackerel',
    fishingPower: 650,
    achievement: {
      achievementId: 6106,
      achievementBit: 12
    },
    avidAchievement: {
      achievementId: 6250,
      achievementBit: 12
    }
  },
  {
    name: 'Beluga',
    id: 96225,
    rarity: 7,
    location: 'Desert Isles',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Shore Fish"],
    favoredBait: 'Fish Egg',
    fishingPower: 600,
    achievement: {
      achievementId: 6106,
      achievementBit: 6
    },
    avidAchievement: {
      achievementId: 6250,
      achievementBit: 6
    }
  },
  {
    name: 'Dandan',
    id: 97489,
    rarity: 7,
    location: 'Desert Isles',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Offshore Fish"],
    favoredBait: 'Fish Egg',
    fishingPower: 650,
    achievement: {
      achievementId: 6106,
      achievementBit: 13
    },
    avidAchievement: {
      achievementId: 6250,
      achievementBit: 13
    }
  },
  {
    name: 'Volcanic Blackfish',
    id: 96547,
    rarity: 1,
    location: 'Ring of Fire',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["None"],
    favoredBait: 'Any',
    fishingPower: 700,
    achievement: {
      achievementId: 6489,
      achievementBit: 0
    },
    avidAchievement: {
      achievementId: 6339,
      achievementBit: 0
    }
  },
  {
    name: 'Flayfin',
    id: 96720,
    rarity: 2,
    location: 'Ring of Fire',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["Volcanic Fish"],
    favoredBait: 'Any',
    fishingPower: 750,
    achievement: {
      achievementId: 6489,
      achievementBit: 1
    },
    avidAchievement: {
      achievementId: 6339,
      achievementBit: 1
    }
  },
  {
    name: 'Garnet Ram',
    id: 96589,
    rarity: 3,
    location: 'Ring of Fire',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Volcanic Fish"],
    favoredBait: 'Any',
    fishingPower: 750,
    achievement: {
      achievementId: 6489,
      achievementBit: 2
    },
    avidAchievement: {
      achievementId: 6339,
      achievementBit: 2
    }
  },
  {
    name: 'Fire Eel',
    id: 96283,
    rarity: 4,
    location: 'Ring of Fire',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["Volcanic Fish"],
    favoredBait: 'Any',
    fishingPower: 750,
    achievement: {
      achievementId: 6489,
      achievementBit: 3
    },
    avidAchievement: {
      achievementId: 6339,
      achievementBit: 3
    }
  },
  {
    name: 'Glowing Coalfish',
    id: 97471,
    rarity: 5,
    location: 'Ring of Fire',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["Volcanic Fish"],
    favoredBait: 'Any',
    fishingPower: 750,
    achievement: {
      achievementId: 6489,
      achievementBit: 4
    },
    avidAchievement: {
      achievementId: 6339,
      achievementBit: 4
    }
  },
  {
    name: 'Magma Ray',
    id: 96530,
    rarity: 6,
    location: 'Ring of Fire',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Volcanic Fish"],
    favoredBait: 'Lava Beetle',
    fishingPower: 750,
    achievement: {
      achievementId: 6489,
      achievementBit: 5
    },
    avidAchievement: {
      achievementId: 6339,
      achievementBit: 5
    }
  },
  {
    name: 'Stone Guiyu',
    id: 96595,
    rarity: 7,
    location: 'Ring of Fire',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["Volcanic Fish"],
    favoredBait: 'Lava Beetle',
    fishingPower: 750,
    achievement: {
      achievementId: 6489,
      achievementBit: 6
    },
    avidAchievement: {
      achievementId: 6339,
      achievementBit: 6
    }
  },
  {
    name: 'Firemouth',
    id: 96491,
    rarity: 1,
    location: 'Ring of Fire',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["None"],
    favoredBait: 'Any',
    fishingPower: 650,
    achievement: {
      achievementId: 6489,
      achievementBit: 7
    },
    avidAchievement: {
      achievementId: 6339,
      achievementBit: 7
    }
  },
  {
    name: 'Igneous Rockfish',
    id: 96597,
    rarity: 2,
    location: 'Ring of Fire',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["Coastal Fish"],
    favoredBait: 'Any',
    fishingPower: 700,
    achievement: {
      achievementId: 6489,
      achievementBit: 8
    },
    avidAchievement: {
      achievementId: 6339,
      achievementBit: 8
    }
  },
  {
    name: 'Redtail Catfish',
    id: 96889,
    rarity: 3,
    location: 'Ring of Fire',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Coastal Fish"],
    favoredBait: 'Any',
    fishingPower: 700,
    achievement: {
      achievementId: 6489,
      achievementBit: 9
    },
    avidAchievement: {
      achievementId: 6339,
      achievementBit: 9
    }
  },
  {
    name: 'Geyser Batfin',
    id: 96555,
    rarity: 4,
    location: 'Ring of Fire',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["Coastal Fish"],
    favoredBait: 'Any',
    fishingPower: 700,
    achievement: {
      achievementId: 6489,
      achievementBit: 10
    },
    avidAchievement: {
      achievementId: 6339,
      achievementBit: 10
    }
  },
  {
    name: 'Flamefin Betta',
    id: 97100,
    rarity: 5,
    location: 'Ring of Fire',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Coastal Fish"],
    favoredBait: 'Any',
    fishingPower: 700,
    achievement: {
      achievementId: 6489,
      achievementBit: 11
    },
    avidAchievement: {
      achievementId: 6339,
      achievementBit: 11
    }
  },
  {
    name: 'Scorpion Fish',
    id: 97498,
    rarity: 6,
    location: 'Ring of Fire',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Coastal Fish"],
    favoredBait: 'Lava Beetle',
    fishingPower: 700,
    achievement: {
      achievementId: 6489,
      achievementBit: 12
    },
    avidAchievement: {
      achievementId: 6339,
      achievementBit: 12
    }
  },
  {
    name: 'Dunkleosteus',
    id: 96361,
    rarity: 7,
    location: 'Ring of Fire',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["Coastal Fish"],
    favoredBait: 'Lava Beetle',
    fishingPower: 700,
    achievement: {
      achievementId: 6489,
      achievementBit: 13
    },
    avidAchievement: {
      achievementId: 6339,
      achievementBit: 13
    }
  },
  {
    name: 'Goldfish',
    id: 96852,
    rarity: 0,
    location: 'World',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["Any"],
    favoredBait: 'Any',
    fishingPower: 0,
    achievement: {
      achievementId: 6224,
      achievementBit: 0
    },
    avidAchievement: {
      achievementId: 6110,
      achievementBit: 0
    }
  },
  {
    name: 'Silverfish',
    id: 97388,
    rarity: 0,
    location: 'World',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["Any"],
    favoredBait: 'Any',
    fishingPower: 0,
    achievement: {
      achievementId: 6224,
      achievementBit: 7
    },
    avidAchievement: {
      achievementId: 6110,
      achievementBit: 7
    }
  },
  {
    name: 'Armored Scalefish',
    id: 96635,
    rarity: 4,
    location: 'World',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["Any"],
    favoredBait: 'Any',
    fishingPower: 0,
    achievement: {
      achievementId: 6224,
      achievementBit: 1
    },
    avidAchievement: {
      achievementId: 6110,
      achievementBit: 1
    }
  },
  {
    name: 'Red Herring',
    id: 96116,
    rarity: 0,
    location: 'World',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["Any"],
    favoredBait: 'Any',
    fishingPower: 0,
    achievement: {
      achievementId: 6224,
      achievementBit: 8
    },
    avidAchievement: {
      achievementId: 6110,
      achievementBit: 8
    }
  },
  {
    name: 'Bloodfish',
    id: 95992,
    rarity: 4,
    location: 'World',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["Any"],
    favoredBait: 'Any',
    fishingPower: 0,
    achievement: {
      achievementId: 6224,
      achievementBit: 2
    },
    avidAchievement: {
      achievementId: 6110,
      achievementBit: 2
    }
  },
  {
    name: 'Fangfish',
    id: 95624,
    rarity: 4,
    location: 'World',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["Any"],
    favoredBait: 'Any',
    fishingPower: 0,
    achievement: {
      achievementId: 6224,
      achievementBit: 9
    },
    avidAchievement: {
      achievementId: 6110,
      achievementBit: 9
    }
  },
  {
    name: 'Bonefish',
    id: 96804,
    rarity: 4,
    location: 'World',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["Any"],
    favoredBait: 'Any',
    fishingPower: 0,
    achievement: {
      achievementId: 6224,
      achievementBit: 3
    },
    avidAchievement: {
      achievementId: 6110,
      achievementBit: 3
    }
  },
  {
    name: 'Totemfish',
    id: 95682,
    rarity: 4,
    location: 'World',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["Any"],
    favoredBait: 'Any',
    fishingPower: 0,
    achievement: {
      achievementId: 6224,
      achievementBit: 10
    },
    avidAchievement: {
      achievementId: 6110,
      achievementBit: 10
    }
  },
  {
    name: 'Clawfish',
    id: 96108,
    rarity: 4,
    location: 'World',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["Any"],
    favoredBait: 'Any',
    fishingPower: 0,
    achievement: {
      achievementId: 6224,
      achievementBit: 4
    },
    avidAchievement: {
      achievementId: 6110,
      achievementBit: 4
    }
  },
  {
    name: 'Venomfish',
    id: 96141,
    rarity: 4,
    location: 'World',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["Any"],
    favoredBait: 'Any',
    fishingPower: 0,
    achievement: {
      achievementId: 6224,
      achievementBit: 11
    },
    avidAchievement: {
      achievementId: 6110,
      achievementBit: 11
    }
  },
  {
    name: 'Dustfish',
    id: 96304,
    rarity: 4,
    location: 'World',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["Any"],
    favoredBait: 'Any',
    fishingPower: 0,
    achievement: {
      achievementId: 6224,
      achievementBit: 5
    },
    avidAchievement: {
      achievementId: 6110,
      achievementBit: 5
    }
  },
  {
    name: 'Twilight Striker',
    id: 97497,
    rarity: 5,
    location: 'World',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Any"],
    favoredBait: 'Any',
    fishingPower: 0,
    achievement: {
      achievementId: 6224,
      achievementBit: 12
    },
    avidAchievement: {
      achievementId: 6110,
      achievementBit: 12
    }
  },
  {
    name: 'Sunscale Striker',
    id: 97097,
    rarity: 5,
    location: 'World',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Any"],
    favoredBait: 'Any',
    fishingPower: 0,
    achievement: {
      achievementId: 6224,
      achievementBit: 6
    },
    avidAchievement: {
      achievementId: 6110,
      achievementBit: 6
    }
  },
  {
    name: 'Moonfin Striker',
    id: 95870,
    rarity: 5,
    location: 'World',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Any"],
    favoredBait: 'Any',
    fishingPower: 0,
    achievement: {
      achievementId: 6224,
      achievementBit: 13
    },
    avidAchievement: {
      achievementId: 6110,
      achievementBit: 13
    }
  },
  {
    name: 'Seahorse',
    id: 95654,
    rarity: 4,
    location: 'Saltwater',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["Any"],
    favoredBait: 'Any',
    fishingPower: 0,
    achievement: {
      achievementId: 6471,
      achievementBit: 0
    },
    avidAchievement: {
      achievementId: 6393,
      achievementBit: 0
    }
  },
  {
    name: 'Redfin Barb',
    id: 96097,
    rarity: 4,
    location: 'Saltwater',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["Any"],
    favoredBait: 'Any',
    fishingPower: 0,
    achievement: {
      achievementId: 6471,
      achievementBit: 7
    },
    avidAchievement: {
      achievementId: 6393,
      achievementBit: 7
    }
  },
  {
    name: 'Leafy Sea Dragon',
    id: 96632,
    rarity: 4,
    location: 'Saltwater',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["Any"],
    favoredBait: 'Any',
    fishingPower: 0,
    achievement: {
      achievementId: 6471,
      achievementBit: 1
    },
    avidAchievement: {
      achievementId: 6393,
      achievementBit: 1
    }
  },
  {
    name: 'Googly-Eyed Squid',
    id: 96265,
    rarity: 4,
    location: 'Saltwater',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["Any"],
    favoredBait: 'Any',
    fishingPower: 0,
    achievement: {
      achievementId: 6471,
      achievementBit: 8
    },
    avidAchievement: {
      achievementId: 6393,
      achievementBit: 8
    }
  },
  {
    name: 'Mantis Shrimp',
    id: 96082,
    rarity: 4,
    location: 'Saltwater',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["Any"],
    favoredBait: 'Any',
    fishingPower: 0,
    achievement: {
      achievementId: 6471,
      achievementBit: 2
    },
    avidAchievement: {
      achievementId: 6393,
      achievementBit: 2
    }
  },
  {
    name: 'Shimmering Squid',
    id: 96110,
    rarity: 4,
    location: 'Saltwater',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["Any"],
    favoredBait: 'Any',
    fishingPower: 0,
    achievement: {
      achievementId: 6471,
      achievementBit: 9
    },
    avidAchievement: {
      achievementId: 6393,
      achievementBit: 9
    }
  },
  {
    name: 'Electric Eel',
    id: 97247,
    rarity: 4,
    location: 'Saltwater',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["Any"],
    favoredBait: 'Any',
    fishingPower: 0,
    achievement: {
      achievementId: 6471,
      achievementBit: 3
    },
    avidAchievement: {
      achievementId: 6393,
      achievementBit: 3
    }
  },
  {
    name: 'Vampire Squid',
    id: 97340,
    rarity: 4,
    location: 'Saltwater',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["Any"],
    favoredBait: 'Any',
    fishingPower: 0,
    achievement: {
      achievementId: 6471,
      achievementBit: 10
    },
    avidAchievement: {
      achievementId: 6393,
      achievementBit: 10
    }
  },
  {
    name: 'Rockfish',
    id: 97241,
    rarity: 4,
    location: 'Saltwater',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["Any"],
    favoredBait: 'Any',
    fishingPower: 0,
    achievement: {
      achievementId: 6471,
      achievementBit: 4
    },
    avidAchievement: {
      achievementId: 6393,
      achievementBit: 4
    }
  },
  {
    name: 'Flapjack Octopus',
    id: 95793,
    rarity: 4,
    location: 'Saltwater',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["Any"],
    favoredBait: 'Any',
    fishingPower: 0,
    achievement: {
      achievementId: 6471,
      achievementBit: 11
    },
    avidAchievement: {
      achievementId: 6393,
      achievementBit: 11
    }
  },
  {
    name: 'Horseshoe Crab',
    id: 97596,
    rarity: 5,
    location: 'Saltwater',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["Any"],
    favoredBait: 'Any',
    fishingPower: 0,
    achievement: {
      achievementId: 6471,
      achievementBit: 5
    },
    avidAchievement: {
      achievementId: 6393,
      achievementBit: 5
    }
  },
  {
    name: 'Aurelian Herring',
    id: 95968,
    rarity: 5,
    location: 'Saltwater',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["Any"],
    favoredBait: 'Any',
    fishingPower: 0,
    achievement: {
      achievementId: 6471,
      achievementBit: 12
    },
    avidAchievement: {
      achievementId: 6393,
      achievementBit: 12
    }
  },
  {
    name: 'Sea Robin',
    id: 95600,
    rarity: 5,
    location: 'Saltwater',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["Any"],
    favoredBait: 'Any',
    fishingPower: 0,
    achievement: {
      achievementId: 6471,
      achievementBit: 6
    },
    avidAchievement: {
      achievementId: 6393,
      achievementBit: 6
    }
  },
  {
    name: 'Red Gurnard',
    id: 97534,
    rarity: 5,
    location: 'Saltwater',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["Any"],
    favoredBait: 'Any',
    fishingPower: 0,
    achievement: {
      achievementId: 6471,
      achievementBit: 13
    },
    avidAchievement: {
      achievementId: 6393,
      achievementBit: 13
    }
  },
  {
    name: 'Fractured Fish',
    id: 100682,
    rarity: 1,
    location: 'Horn of Maguuma',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["Any"],
    favoredBait: 'Any',
    fishingPower: 0,
    achievement: {
      achievementId: 7114,
      achievementBit: 0
    },
    avidAchievement: {
      achievementId: 7804,
      achievementBit: 0
    }
  },
  {
    name: 'Queen\'s Flipper',
    id: 99986,
    rarity: 2,
    location: 'Horn of Maguuma',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["Fractured Lake Fish"],
    favoredBait: 'Any',
    fishingPower: 0,
    achievement: {
      achievementId: 7114,
      achievementBit: 1
    },
    avidAchievement: {
      achievementId: 7804,
      achievementBit: 1
    }
  },
  {
    name: 'Primal Maguuma Trout',
    id: 100298,
    rarity: 3,
    location: 'Horn of Maguuma',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Fractured Freshwater Fish","Nayosian Fish"],
    favoredBait: 'Any',
    fishingPower: 0,
    achievement: {
      achievementId: 7114,
      achievementBit: 2
    },
    avidAchievement: {
      achievementId: 7804,
      achievementBit: 2
    }
  },
  {
    name: 'Codmander',
    id: 100887,
    rarity: 4,
    location: 'Horn of Maguuma',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Fractured Freshwater Fish","Nayosian Fish"],
    favoredBait: 'Any',
    fishingPower: 0,
    achievement: {
      achievementId: 7114,
      achievementBit: 3
    },
    avidAchievement: {
      achievementId: 7804,
      achievementBit: 3
    }
  },
  {
    name: 'Jokopu',
    id: 100399,
    rarity: 5,
    location: 'Horn of Maguuma',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Fractured Desert Fish","Nayosian Fish"],
    favoredBait: 'Any',
    fishingPower: 0,
    achievement: {
      achievementId: 7114,
      achievementBit: 4
    },
    avidAchievement: {
      achievementId: 7804,
      achievementBit: 4
    }
  },
  {
    name: 'Empress Fish',
    id: 100517,
    rarity: 6,
    location: 'Horn of Maguuma',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Fractured Channel Fish"],
    favoredBait: 'Mackerel',
    fishingPower: 0,
    achievement: {
      achievementId: 7114,
      achievementBit: 5
    },
    avidAchievement: {
      achievementId: 7804,
      achievementBit: 5
    }
  },
  {
    name: 'Three-Eyed Carp',
    id: 100032,
    rarity: 7,
    location: 'Horn of Maguuma',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Fractured Channel Fish","Nayosian Fish"],
    favoredBait: 'Glow Worm',
    fishingPower: 0,
    achievement: {
      achievementId: 7114,
      achievementBit: 6
    },
    avidAchievement: {
      achievementId: 7804,
      achievementBit: 6
    }
  },
  {
    name: 'Bastion Fish',
    id: 100046,
    rarity: 1,
    location: 'Horn of Maguuma',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["Any","Nayosian Fish"],
    favoredBait: 'Any',
    fishingPower: 0,
    achievement: {
      achievementId: 7114,
      achievementBit: 7
    },
    avidAchievement: {
      achievementId: 7804,
      achievementBit: 7
    }
  },
  {
    name: 'Natural Fish',
    id: 100845,
    rarity: 2,
    location: 'Horn of Maguuma',
    timeOfDay: ["Any"],
    openWater: false,
    fishingHole: ["Astral Fish","Spire Fish"],
    favoredBait: 'Any',
    fishingPower: 0,
    achievement: {
      achievementId: 7114,
      achievementBit: 8
    },
    avidAchievement: {
      achievementId: 7804,
      achievementBit: 8
    }
  },
  {
    name: 'Knowledge Fish',
    id: 100526,
    rarity: 3,
    location: 'Horn of Maguuma',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Astral Fish","Nayosian Fish"],
    favoredBait: 'Any',
    fishingPower: 0,
    achievement: {
      achievementId: 7114,
      achievementBit: 9
    },
    avidAchievement: {
      achievementId: 7804,
      achievementBit: 9
    }
  },
  {
    name: 'Strength Fish',
    id: 100751,
    rarity: 4,
    location: 'Horn of Maguuma',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Astral Fish"],
    favoredBait: 'Any',
    fishingPower: 0,
    achievement: {
      achievementId: 7114,
      achievementBit: 10
    },
    avidAchievement: {
      achievementId: 7804,
      achievementBit: 10
    }
  },
  {
    name: 'Balance Fish',
    id: 100354,
    rarity: 5,
    location: 'Horn of Maguuma',
    timeOfDay: [],
    openWater: true,
    fishingHole: ["Any","Spire Fish","Nayosian Fish"],
    favoredBait: 'Any',
    fishingPower: 0,
    achievement: {
      achievementId: 7114,
      achievementBit: 11
    },
    avidAchievement: {
      achievementId: 7804,
      achievementBit: 11
    }
  },
  {
    name: 'Obscure Fish',
    id: 100904,
    rarity: 6,
    location: 'Horn of Maguuma',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Astral Fish"],
    favoredBait: 'Lightning Bug',
    fishingPower: 0,
    achievement: {
      achievementId: 7114,
      achievementBit: 12
    },
    avidAchievement: {
      achievementId: 7804,
      achievementBit: 12
    }
  },
  {
    name: 'Celestial Fish',
    id: 100180,
    rarity: 7,
    location: 'Horn of Maguuma',
    timeOfDay: [],
    openWater: false,
    fishingHole: ["Spire Fish","Nayosian Fish"],
    favoredBait: 'Fish Egg',
    fishingPower: 0,
    achievement: {
      achievementId: 7114,
      achievementBit: 13
    },
    avidAchievement: {
      achievementId: 7804,
      achievementBit: 13
    }
  },
  {
    name: 'Daydream',
    id: 101241,
    rarity: 1,
    location: 'Horn of Maguuma',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["Any","Nayosian Fish"],
    favoredBait: 'Any',
    fishingPower: 0,
    achievement: {
      achievementId: 7114,
      achievementBit: 14
    },
    avidAchievement: {
      achievementId: 7804,
      achievementBit: 14
    }
  },
  {
    name: 'Phantom Pollock',
    id: 101127,
    rarity: 2,
    location: 'Horn of Maguuma',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["Any","Nayosian Fish"],
    favoredBait: 'Any',
    fishingPower: 0,
    achievement: {
      achievementId: 7114,
      achievementBit: 15
    },
    avidAchievement: {
      achievementId: 7804,
      achievementBit: 15
    }
  },
  {
    name: 'Buried Angst',
    id: 101622,
    rarity: 3,
    location: 'Horn of Maguuma',
    timeOfDay: ["Any"],
    openWater: true,
    fishingHole: ["Any","Dream Fish","Nayosian Fish"],
    favoredBait: 'Any',
    fishingPower: 0,
    achievement: {
      achievementId: 7114,
      achievementBit: 16
    },
    avidAchievement: {
      achievementId: 7804,
      achievementBit: 16
    }
  },
  {
    name: 'Blightbob',
    id: 101240,
    rarity: 4,
    location: 'Horn of Maguuma',
    timeOfDay: [],
    openWater: true,
    fishingHole: ["Any","Nayosian Fish"],
    favoredBait: 'Any',
    fishingPower: 0,
    achievement: {
      achievementId: 7114,
      achievementBit: 17
    },
    avidAchievement: {
      achievementId: 7804,
      achievementBit: 17
    }
  },
  {
    name: 'Frenzied Cephalopod',
    id: 101523,
    rarity: 5,
    location: 'Horn of Maguuma',
    timeOfDay: [],
    openWater: true,
    fishingHole: ["Any","Dream Fish","Nayosian Fish"],
    favoredBait: 'Any',
    fishingPower: 0,
    achievement: {
      achievementId: 7114,
      achievementBit: 18
    },
    avidAchievement: {
      achievementId: 7804,
      achievementBit: 18
    }
  },
  {
    name: 'Glutfish',
    id: 101209,
    rarity: 6,
    location: 'Horn of Maguuma',
    timeOfDay: [],
    openWater: true,
    fishingHole: ["Any","Nayosian Fish"],
    favoredBait: 'Any',
    fishingPower: 0,
    achievement: {
      achievementId: 7114,
      achievementBit: 19
    },
    avidAchievement: {
      achievementId: 7804,
      achievementBit: 19
    }
  },
  {
    name: 'Maddened Mackerel',
    id: 101446,
    rarity: 7,
    location: 'Horn of Maguuma',
    timeOfDay: [],
    openWater: true,
    fishingHole: ["Any","Dream Fish"],
    favoredBait: 'Any',
    fishingPower: 0,
    achievement: {
      achievementId: 7114,
      achievementBit: 20
    },
    avidAchievement: {
      achievementId: 7804,
      achievementBit: 20
    }
  },
  // -- GENERATE-END --
]

export default GAME_DATA_FISHES
