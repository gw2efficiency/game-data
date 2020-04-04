// @@@ WIP @@@
// THIS IS A WORK IN PROGRESS. IT WILL CHANGE. DO NOT USE.

export interface GameDataCurrencyConversion {
  group: string // Other name? E.g. @method@ or similar?
  group_help_description?: string // ...
  name: string
  display_item_id: number
  help_description?: string // ...
  is_active?: boolean

  // TODO: Think about how we are going to render the method/help stuff for all of the different
  //  currency examples below.

  input: Array<CurrencyInput | ItemInput>
  output: Array<ItemOutput | RandomItemOutput>
}

type Currency =
  | 'Gold'
  | 'Karma'
  | 'Spirit Shard'
  | 'Guild Commendation'
  | 'Trade Contract'
  | 'Laurel'
  | 'Seal of Beetletun'
  | 'Ascalonian Tear'
  | 'Badge of Honor'
  | 'Proof of Heroics'

interface CurrencyInput {
  _type: 'CurrencyInput'
  count: number
  currency: Currency
}

interface ItemInput {
  _type: 'ItemInput'
  count: number
  item_id: number
}

interface ItemOutput {
  _type: 'ItemOutput'
  count: number
  item_id: number
  price_type?: 'sell' | 'crafting_profit' // default = 'sell'
}

interface RandomItemOutput {
  _type: 'RandomItemOutput'
  count: number
  items: Array<ItemOutput>
}

const GAME_DATA_CURRENCY_CONVERSIONS: Array<GameDataCurrencyConversion> = [
  // Karma --------------------------------------------------------------------
  {
    group: 'Trade Caches',
    help_description: 'Trade Caches can be bought at merchants throughout the Crystal Desert',
    name: 'Hamaseen Ingot Crate',
    display_item_id: 83419,
    input: [
      { _type: 'CurrencyInput', count: 50, currency: 'Trade Contract' },
      { _type: 'CurrencyInput', count: 630, currency: 'Karma' },
    ],
    output: [
      { _type: 'ItemOutput', count: 0.94, item_id: 19683 },
      { _type: 'ItemOutput', count: 0.62, item_id: 19681 },
      { _type: 'ItemOutput', count: 1.01, item_id: 19679 },
      { _type: 'ItemOutput', count: 0.4, item_id: 19682 },
    ],
  },
  {
    group: 'Mystic Forge Conversion',
    group_help_description: 'Buy four items and forge them together using the mystic forge',
    name: 'Oldgate Leather Gloves',
    display_item_id: 4208,
    help_description: 'From "Tiga Fierceblade" at waypoint [&BN4AAAA=]', // TODO How to encode this nicely?

    input: [{ _type: 'CurrencyInput', count: 504, currency: 'Karma' }],
    output: [
      { _type: 'ItemOutput', count: 0.875 * 1.3, item_id: 19728 }, // TODO: Write the name in here just for us devs
      { _type: 'ItemOutput', count: 0.875 * 0.4, item_id: 19719 },
    ],
  },
  {
    group: 'Beaded Weapons',
    group_help_description:
      'Buy 75x "Sun Bead" from the vendor and then craft the item out of them.',
    name: 'Rabid Beaded Greataxe',
    display_item_id: 14882,
    help_description: 'From "Cuadinti" at waypoint [&BMgBAAA=]',

    input: [
      { _type: 'CurrencyInput', count: 1575, currency: 'Karma' },
      { _type: 'ItemInput', count: 1, item_id: 12849 },
      { _type: 'ItemInput', count: 1, item_id: 12895 },
    ],
    output: [{ _type: 'ItemOutput', count: 1, item_id: 14882 }],
  },
  {
    group: 'Dye Cooking',
    group_help_description: "Requires the 'Chef' crafting profession on the appropriate levels",
    name: 'Unidentified Gray Dye',
    display_item_id: 12758,
    help_description: 'Need Chef at 100',

    input: [
      { _type: 'CurrencyInput', count: 196, currency: 'Karma' },
      { _type: 'ItemInput', count: 25, item_id: 12250 },
    ],
    output: [{ _type: 'ItemOutput', count: 1, item_id: 12758 }],
  },
  {
    group: 'Karmic Converter',
    group_help_description: 'You can buy one of these each day from the Karmic Converter',
    name: 'Heavy Karmic Crafting Bag',
    display_item_id: 67248,

    input: [{ _type: 'CurrencyInput', count: 4998, currency: 'Karma' }],
    output: [
      {
        _type: 'RandomItemOutput',
        count: 3,
        items: [
          { _type: 'ItemOutput', count: 1, item_id: 24358 },
          { _type: 'ItemOutput', count: 1, item_id: 24351 },
          { _type: 'ItemOutput', count: 1, item_id: 24277 },
          { _type: 'ItemOutput', count: 1, item_id: 24357 },
          { _type: 'ItemOutput', count: 1, item_id: 24289 },
          { _type: 'ItemOutput', count: 1, item_id: 24300 },
          { _type: 'ItemOutput', count: 1, item_id: 24283 },
          { _type: 'ItemOutput', count: 1, item_id: 24295 },
        ],
      },
    ],
  },
  {
    group: 'Jewelry Boxes',
    group_help_description: 'Buy the jewelry boxes from any karma vendor in Orr and open them.',
    name: 'Lost Orrian Jewelry Box',
    display_item_id: 39088,
    help_description: 'From "Agent Crandle" at "[&BO4CAAA=]"',

    input: [{ _type: 'CurrencyInput', count: 2475, currency: 'Karma' }],

    // TODO: This needs a hardcoded price for 39223 (50 buy / 50 sell). Add into application code.
    // TODO: We can probably write a generator for this from wiki drop tables
    output: [
      { _type: 'ItemOutput', count: 2.981, item_id: 39223 },
      { _type: 'ItemOutput', count: 0.001, item_id: 35750 },
      { _type: 'ItemOutput', count: 0.001, item_id: 35748 },
      { _type: 'ItemOutput', count: 0.001, item_id: 35749 },
      { _type: 'ItemOutput', count: 0.001, item_id: 35747 },
      { _type: 'ItemOutput', count: 0.002, item_id: 24335 },
      { _type: 'ItemOutput', count: 0.004, item_id: 24305 },
      { _type: 'ItemOutput', count: 0.004, item_id: 24340 },
      { _type: 'ItemOutput', count: 0.004, item_id: 24330 },
      { _type: 'ItemOutput', count: 0.004, item_id: 24325 },
      { _type: 'ItemOutput', count: 0.004, item_id: 24320 },
      { _type: 'ItemOutput', count: 0.004, item_id: 24315 },
      { _type: 'ItemOutput', count: 0.004, item_id: 24310 },
    ],
  },
  {
    group: 'Mystic clovers',
    name: 'Mystic Clover',
    display_item_id: 19675,

    input: [
      { _type: 'CurrencyInput', count: 2100, currency: 'Karma' },
      { _type: 'CurrencyInput', count: 0.6, currency: 'Spirit Shard' },
      { _type: 'ItemInput', count: 1, item_id: 19976 },
      { _type: 'ItemInput', count: 1, item_id: 19721 },
    ],

    output: [
      { _type: 'ItemOutput', count: 0.0485 * 3, item_id: 24295 },
      { _type: 'ItemOutput', count: 0.0527 * 3, item_id: 24358 },
      { _type: 'ItemOutput', count: 0.0591 * 3, item_id: 24351 },
      { _type: 'ItemOutput', count: 0.0457 * 3, item_id: 24277 },
      { _type: 'ItemOutput', count: 0.0522 * 3, item_id: 24357 },
      { _type: 'ItemOutput', count: 0.0477 * 3, item_id: 24289 },
      { _type: 'ItemOutput', count: 0.0524 * 3, item_id: 24300 },
      { _type: 'ItemOutput', count: 0.0481 * 3, item_id: 24283 },
      { _type: 'ItemOutput', count: 0.0494 * 2, item_id: 19746 },
      { _type: 'ItemOutput', count: 0.0392 * 2, item_id: 19685 },
      { _type: 'ItemOutput', count: 0.0547 * 2, item_id: 19737 },
      { _type: 'ItemOutput', count: 0.0456 * 2, item_id: 19712 },
      { _type: 'ItemOutput', count: 0.0114 * 2, item_id: 19721 },
      { _type: 'ItemOutput', count: 0.004 * 1, item_id: 24305 },
      { _type: 'ItemOutput', count: 0.004 * 1, item_id: 24340 },
      { _type: 'ItemOutput', count: 0.004 * 1, item_id: 24330 },
      { _type: 'ItemOutput', count: 0.004 * 1, item_id: 24325 },
      { _type: 'ItemOutput', count: 0.004 * 1, item_id: 24320 },
      { _type: 'ItemOutput', count: 0.004 * 1, item_id: 24315 },
      { _type: 'ItemOutput', count: 0.004 * 1, item_id: 24310 },
      { _type: 'ItemOutput', count: 0.0104 * 1, item_id: 24335 },
      { _type: 'ItemOutput', count: 0.0109 * 5, item_id: 19976 },
      { _type: 'ItemOutput', count: 0.0151 * 1, item_id: 9267 },
    ],
  },
  {
    group: "Pact Scout's Mapping Materials",
    name: 'Blazeridge Steppes (Week 6)',
    display_item_id: 24287,
    is_active: activeMapBonusWeek() === 6,

    input: [{ _type: 'CurrencyInput', count: (8000 / 200) * 5250, currency: 'Karma' }],

    output: [
      { _type: 'ItemOutput', count: 21, item_id: 24287 },
      { _type: 'ItemOutput', count: 6, item_id: 24337 },
      { _type: 'ItemOutput', count: 23, item_id: 24286 },
      { _type: 'ItemOutput', count: 20, item_id: 43773 },
      { _type: 'ItemOutput', count: 4, item_id: 24338 },
    ],
  },

  // Example: Laurels
  {
    group: 'Laurel Merchant',
    name: 'Light Crafting Bag',
    display_item_id: 39121,

    input: [{ _type: 'CurrencyInput', count: 1, currency: 'Laurel' }],
    output: [
      {
        _type: 'RandomItemOutput',
        count: 5,
        items: [
          { _type: 'ItemOutput', count: (2 + 4) / 2, item_id: 24343 },
          { _type: 'ItemOutput', count: (2 + 4) / 2, item_id: 24347 },
          { _type: 'ItemOutput', count: (2 + 4) / 2, item_id: 24274 },
          { _type: 'ItemOutput', count: (2 + 4) / 2, item_id: 24354 },
          { _type: 'ItemOutput', count: (2 + 4) / 2, item_id: 24286 },
          { _type: 'ItemOutput', count: (2 + 4) / 2, item_id: 24298 },
          { _type: 'ItemOutput', count: (2 + 4) / 2, item_id: 24280 },
          { _type: 'ItemOutput', count: (2 + 4) / 2, item_id: 24292 },
        ],
      },
    ],
  },
  {
    group: 'Laurel Merchant',
    name: 'Armorsmith Starter Kit',
    display_item_id: 39091,

    input: [{ _type: 'CurrencyInput', count: 3, currency: 'Laurel' }],
    output: [
      { _type: 'ItemOutput', count: 180, item_id: 19697 },
      { _type: 'ItemOutput', count: 18, item_id: 19704 },
      { _type: 'ItemOutput', count: 120, item_id: 19718 },
      { _type: 'ItemOutput', count: 50, item_id: 19792 },
      { _type: 'ItemOutput', count: 9, item_id: 24342 },
      { _type: 'ItemOutput', count: 9, item_id: 24346 },
      { _type: 'ItemOutput', count: 9, item_id: 24284 },
      { _type: 'ItemOutput', count: 9, item_id: 24296 },
      { _type: 'ItemOutput', count: 9, item_id: 24278 },
      { _type: 'ItemOutput', count: 9, item_id: 24290 },
    ],
  },

  // Example: Dungeons
  {
    group: 'Inscriptions & Insignias',
    name: 'Vitality / Condition Damage / Healing Power',
    help_description: 'Using a Black Lion Salvage Kit',
    display_item_id: 46684,

    input: [{ _type: 'CurrencyInput', count: 210, currency: 'Seal of Beetletun' }],
    output: [
      { _type: 'ItemOutput', count: 0.62, item_id: 46684 },
      { _type: 'ItemOutput', count: 1.25, item_id: 19721 },
    ],
  },
  {
    group: 'Inscriptions & Insignias',
    name: 'Vitality / Condition Damage / Healing Power',
    help_description: 'Using a Mystic Salvage Kit',
    display_item_id: 46684,

    input: [{ _type: 'CurrencyInput', count: 210, currency: 'Seal of Beetletun' }],
    output: [
      { _type: 'ItemOutput', count: 0.42, item_id: 46684 },
      { _type: 'ItemOutput', count: 0.875, item_id: 19721 },
    ],
  },
  {
    group: 'Dungeon Recipes',
    name: 'Claw of the Howling King',
    display_item_id: 36521,

    input: [{ _type: 'CurrencyInput', count: 200, currency: 'Ascalonian Tear' }],
    output: [
      {
        _type: 'ItemOutput',
        count: 1,
        item_id: 36521,
        price_type: 'crafting_profit',
      },
    ],
  },

  // Example: Spirit Shards
  {
    group: 'Common Crafting Materials',
    name: 'Wool Scrap',
    display_item_id: 19739,
    help_description: 'Can output between 40 and 200 items', // TODO: Encode differently?

    input: [
      { _type: 'CurrencyInput', count: 0.1, currency: 'Spirit Shard' },
      { _type: 'ItemInput', count: 1, item_id: 19739 },
      { _type: 'ItemInput', count: 250, item_id: 19718 },
      { _type: 'ItemInput', count: 5, item_id: 24273 },
    ],
    output: [{ _type: 'ItemOutput', count: 86.5, item_id: 19739 }],
  },
  {
    group: 'Named Weapons',
    name: 'Accursed Chains',
    display_item_id: 31046,

    // TODO: Do we want to show the crafting inputs here?
    input: [{ _type: 'CurrencyInput', count: 50, currency: 'Spirit Shard' }],
    output: [{ _type: 'ItemOutput', count: 1, item_id: 31046, price_type: 'crafting_profit' }],
  },

  // Example: Badges of Honor
  {
    group: 'Siege Master',
    name: 'Flame Ram Blueprints',
    display_item_id: 21161,

    input: [{ _type: 'CurrencyInput', count: 6, currency: 'Badge of Honor' }],
    output: [{ _type: 'ItemOutput', count: 1, item_id: 21161 }],
  },
  {
    group: 'Siege Master',
    name: 'Superior Flame Ram Blueprints',
    display_item_id: 21263,

    input: [
      { _type: 'CurrencyInput', count: 12, currency: 'Badge of Honor' },
      { _type: 'CurrencyInput', count: 1, currency: 'Spirit Shard' },
      { _type: 'ItemInput', count: 5, item_id: 19700 },
      { _type: 'ItemInput', count: 5, item_id: 19722 },
    ],
    output: [{ _type: 'ItemOutput', count: 1, item_id: 21263 }],
  },

  // Example: Proof of Heroics
  {
    group: 'Heroics Notary',
    name: 'Superior Flame Ram Blueprints',
    display_item_id: 21263,

    input: [{ _type: 'CurrencyInput', count: 6, currency: 'Proof of Heroics' }],
    output: [{ _type: 'ItemOutput', count: 1, item_id: 21263 }],
  },

  // Example: Guild Commendations
  {
    group: 'Guild Commendation Trader',
    help_description: 'Somewhere in the guild hall bla bla',
    name: "Sentinel's Insignia",
    display_item_id: 41556,
    input: [
      { _type: 'CurrencyInput', count: 10, currency: 'Guild Commendation' },
      { _type: 'CurrencyInput', count: 8000, currency: 'Gold' },
    ],
    output: [{ _type: 'ItemOutput', count: 1, item_id: 41556 }],
  },
]

// Calculate the active map bonus week, starting from the first cycle at the 8th October 2015 20:00 UTC.
function activeMapBonusWeek() {
  const CYCLES = 8
  const WEEK_MS = 7 * 24 * 60 * 60 * 1000

  const msSinceFirstCycle = new Date().getTime() - new Date('2015-10-08T20:00:00.000Z').getTime()
  const weeksSinceFirstCycle = Math.floor(msSinceFirstCycle / WEEK_MS)

  return (weeksSinceFirstCycle % CYCLES) + 1
}

export default GAME_DATA_CURRENCY_CONVERSIONS
