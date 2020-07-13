export interface GameDataMountSkin {
  /** The mount skin id */
  id: number

  /** The mount skin name */
  name: string

  /** The unlock items for the mount skin */
  unlock_items: Array<number>
}

// prettier-ignore
const GAME_DATA_MOUNT_SKINS: Array<GameDataMountSkin> = [
  // -- GENERATE-START --
  { id: 1, name: 'Raptor', unlock_items: [] },
  { id: 2, name: 'Skimmer', unlock_items: [] },
  { id: 3, name: 'Springer', unlock_items: [] },
  { id: 4, name: 'Griffon', unlock_items: [] },
  { id: 6, name: 'Jackal', unlock_items: [] },
  { id: 12, name: 'Starscale', unlock_items: [88200] },
  { id: 13, name: 'Spooky Raptor', unlock_items: [85484] },
  { id: 14, name: 'Spooky Jackal', unlock_items: [85483] },
  { id: 15, name: 'Spooky Springer', unlock_items: [85472] },
  { id: 16, name: 'Spooky Griffon', unlock_items: [85423] },
  { id: 17, name: 'Resplendent Avialan', unlock_items: [85491] },
  { id: 19, name: 'Spooky Skimmer', unlock_items: [85444] },
  { id: 20, name: 'Windy Spot', unlock_items: [85580] },
  { id: 21, name: 'Coastal Spiketail', unlock_items: [85580] },
  { id: 22, name: 'Polished Stone', unlock_items: [85580] },
  { id: 23, name: 'Fire Pinion', unlock_items: [85580] },
  { id: 24, name: 'Storm Ridge', unlock_items: [85580] },
  { id: 25, name: 'Spotted Sylph', unlock_items: [85580] },
  { id: 26, name: 'Oceanic Ray', unlock_items: [85580] },
  { id: 27, name: 'Starbound', unlock_items: [85580] },
  { id: 28, name: 'Banded Mystic', unlock_items: [85580] },
  { id: 29, name: 'Savannah Monitor', unlock_items: [85580] },
  { id: 30, name: 'Pyroclast', unlock_items: [85580] },
  { id: 31, name: 'Arctic Jerboa', unlock_items: [85580] },
  { id: 32, name: 'Canyon Spiketail', unlock_items: [85580] },
  { id: 33, name: 'Twin Sands', unlock_items: [85580] },
  { id: 34, name: 'Highlands Harrier', unlock_items: [85580] },
  { id: 35, name: 'Striped Tri-horn', unlock_items: [85580] },
  { id: 36, name: 'Bright Ringfin', unlock_items: [85580] },
  { id: 37, name: 'Oasis Skate', unlock_items: [85580] },
  { id: 38, name: 'Elonian Jackalope', unlock_items: [85580] },
  { id: 39, name: 'Crowned Ancient', unlock_items: [85580] },
  { id: 40, name: 'Clouded Corvus', unlock_items: [85580] },
  { id: 41, name: 'Primal Hare', unlock_items: [85580] },
  { id: 42, name: 'Tawny Hare', unlock_items: [85580] },
  { id: 43, name: 'Desert Lop', unlock_items: [85580] },
  { id: 44, name: 'River Moth Wing', unlock_items: [85580] },
  { id: 45, name: 'Spined Longtail', unlock_items: [85580] },
  { id: 46, name: 'Reforged Warhound', unlock_items: [85538] },
  { id: 47, name: 'Dajkah Lantern', unlock_items: [85580] },
  { id: 48, name: 'Flamelander', unlock_items: [85580] },
  { id: 49, name: 'Stardust', unlock_items: [85580] },
  { id: 50, name: 'Badlands Stalker', unlock_items: [85580] },
  { id: 52, name: 'Cozy Wintersday Skimmer', unlock_items: [85564] },
  { id: 53, name: 'Cozy Wintersday Griffon', unlock_items: [85541] },
  { id: 56, name: 'Cozy Wintersday Jackal', unlock_items: [85600] },
  { id: 57, name: 'Umbral Demon', unlock_items: [86690] },
  { id: 58, name: 'Cozy Wintersday Raptor', unlock_items: [85524] },
  { id: 60, name: 'Cozy Wintersday Springer', unlock_items: [85567] },
  { id: 61, name: 'Summit Wildhorn', unlock_items: [86766] },
  { id: 62, name: 'Grand Lion', unlock_items: [86899] },
  { id: 66, name: 'Branded Springer', unlock_items: [87246] },
  { id: 68, name: 'Branded Jackal', unlock_items: [87041] },
  { id: 70, name: 'Branded Skimmer', unlock_items: [87296] },
  { id: 75, name: 'Branded Griffon', unlock_items: [87273] },
  { id: 76, name: 'Branded Raptor', unlock_items: [87088] },
  { id: 77, name: 'Istani Bald', unlock_items: [87368] },
  { id: 78, name: 'Issnur Long Hair', unlock_items: [87368] },
  { id: 79, name: 'Sargol Thunderer', unlock_items: [87368] },
  { id: 80, name: 'Sky Bandit', unlock_items: [87368] },
  { id: 81, name: 'Striped Jarin', unlock_items: [87368] },
  { id: 82, name: 'Primeval', unlock_items: [87368] },
  { id: 83, name: 'Oceanic Broadtail', unlock_items: [87368] },
  { id: 84, name: 'Primus Beta', unlock_items: [87368] },
  { id: 85, name: 'Stardrift', unlock_items: [87368] },
  { id: 86, name: 'Lahtenda Bog Hunter', unlock_items: [87368] },
  { id: 87, name: 'Primeval', unlock_items: [87368] },
  { id: 88, name: 'Dzalana Ice Scale', unlock_items: [87368] },
  { id: 89, name: 'Iceflow', unlock_items: [87368] },
  { id: 90, name: 'Ceylon Cut', unlock_items: [87368] },
  { id: 91, name: 'Exalted Sky Sentry', unlock_items: [87368] },
  { id: 92, name: 'Exo-Suit Springer', unlock_items: [87483] },
  { id: 93, name: 'Exo-Suit Jackal', unlock_items: [87481] },
  { id: 94, name: 'Exo-Suit Raptor', unlock_items: [87482] },
  { id: 95, name: 'Exo-Suit Griffon', unlock_items: [87480] },
  { id: 96, name: 'Exo-Suit Skimmer', unlock_items: [87488] },
  { id: 97, name: 'Shrine Guardian', unlock_items: [87539] },
  { id: 98, name: 'Awakened Springer', unlock_items: [87570] },
  { id: 99, name: 'Awakened Raptor', unlock_items: [87567] },
  { id: 100, name: 'Awakened Griffon', unlock_items: [87566] },
  { id: 101, name: 'Awakened Skimmer', unlock_items: [87573] },
  { id: 102, name: 'Awakened Jackal', unlock_items: [87572] },
  { id: 103, name: 'Roller Beetle', unlock_items: [] },
  { id: 104, name: 'Tremor Armadillo', unlock_items: [88111] },
  { id: 105, name: 'Funerary Scarab', unlock_items: [88200] },
  { id: 106, name: 'Kourna Jackrabbit', unlock_items: [88200] },
  { id: 107, name: 'Mirror Masked', unlock_items: [88200] },
  { id: 108, name: 'Primeval', unlock_items: [88200] },
  { id: 109, name: 'Storm Chaser', unlock_items: [88200] },
  { id: 110, name: 'Tufted Night Eye', unlock_items: [88200] },
  { id: 111, name: 'Ntouka Snakescale', unlock_items: [88200] },
  { id: 112, name: 'Arid Hammerhead', unlock_items: [88200] },
  { id: 113, name: 'Iceberg', unlock_items: [88200] },
  { id: 114, name: 'Colossal Ladybird', unlock_items: [88200] },
  { id: 115, name: 'Northern Feather Wing', unlock_items: [88200] },
  { id: 116, name: 'Trailblazer', unlock_items: [88200] },
  { id: 117, name: 'Dune Mastiff', unlock_items: [88200] },
  { id: 118, name: 'Painted Mesa', unlock_items: [88200] },
  { id: 126, name: 'Dreadnought', unlock_items: [88775] },
  { id: 129, name: 'Nightfang', unlock_items: [89003] },
  { id: 130, name: 'Mad Realm Skimmer', unlock_items: [89069] },
  { id: 131, name: 'Mad Realm Jackal', unlock_items: [89022] },
  { id: 132, name: 'Mad Realm Griffon', unlock_items: [89001] },
  { id: 133, name: 'Mad Realm Raptor', unlock_items: [89068] },
  { id: 134, name: 'Mad Realm Springer', unlock_items: [89004] },
  { id: 136, name: 'Auric Salamander', unlock_items: [89325] },
  { id: 137, name: 'Banded Wave Fin', unlock_items: [89325] },
  { id: 138, name: 'Luminous Prowler', unlock_items: [89325] },
  { id: 139, name: 'Krytan Lop', unlock_items: [89325] },
  { id: 140, name: 'Timberland Badged', unlock_items: [89325] },
  { id: 141, name: 'Snow Stalker', unlock_items: [89325] },
  { id: 142, name: 'Southsun Torpedo', unlock_items: [89325] },
  { id: 143, name: 'Exalted Ley Hunter', unlock_items: [89325] },
  { id: 144, name: 'Jagged Kournan', unlock_items: [89325] },
  { id: 145, name: 'Alloyed Construct', unlock_items: [89325] },
  { id: 146, name: 'Sand Souled', unlock_items: [89325] },
  { id: 147, name: 'Striped Bahdzan', unlock_items: [89325] },
  { id: 148, name: 'Starfall', unlock_items: [89325] },
  { id: 149, name: 'Liminal Moorhound', unlock_items: [89325] },
  { id: 150, name: 'Shiverpeaks Pileated', unlock_items: [89325] },
  { id: 152, name: 'Sun Temple Gecko', unlock_items: [89425] },
  { id: 153, name: 'Shiverpeaks Jackal', unlock_items: [89668] },
  { id: 154, name: 'Shiverpeaks Skimmer', unlock_items: [89494] },
  { id: 155, name: 'Shiverpeaks Griffon', unlock_items: [89844] },
  { id: 157, name: 'Shiverpeaks Springer', unlock_items: [89680] },
  { id: 158, name: 'Shiverpeaks Raptor', unlock_items: [89861] },
  { id: 161, name: 'Warclaw', unlock_items: [] },
  { id: 162, name: 'Assault Warclaw', unlock_items: [90029] },
  { id: 163, name: 'Outrider Warclaw', unlock_items: [90040] },
  { id: 164, name: 'Branded Warclaw', unlock_items: [90063] },
  { id: 165, name: 'Vanguard Warclaw', unlock_items: [90065] },
  { id: 166, name: 'Embermane Warclaw', unlock_items: [90076] },
  { id: 168, name: 'Magnificent Hummingbird', unlock_items: [87578] },
  { id: 169, name: 'Alloyed Irontail', unlock_items: [90165] },
  { id: 170, name: 'Starshell', unlock_items: [90165] },
  { id: 171, name: 'Sand Souled', unlock_items: [90165] },
  { id: 172, name: 'Ntouka Snakeshell', unlock_items: [90165] },
  { id: 173, name: 'Exalted Gate Guardian', unlock_items: [90165] },
  { id: 174, name: 'Spotted Orchid', unlock_items: [90165] },
  { id: 175, name: 'Primordial Raptor', unlock_items: [90165] },
  { id: 176, name: 'Alloyed Quicksilver', unlock_items: [90165] },
  { id: 177, name: 'Kournan Bright-Tail', unlock_items: [90165] },
  { id: 178, name: 'Brisban Brushtail', unlock_items: [90165] },
  { id: 179, name: 'Masked Runner', unlock_items: [90165] },
  { id: 180, name: 'Primeval', unlock_items: [90165] },
  { id: 181, name: 'Arctic Icewing', unlock_items: [90165] },
  { id: 182, name: 'Savannah Stripetail', unlock_items: [90165] },
  { id: 183, name: 'Vabbian Lightpaw', unlock_items: [90165] },
  { id: 186, name: 'Skyscale', unlock_items: [] },
  { id: 191, name: 'Shimmerwing', unlock_items: [91227] },
  { id: 193, name: 'Axejaw Skyscale', unlock_items: [91354] },
  { id: 194, name: 'Caldera Skyscale', unlock_items: [91363] },
  { id: 195, name: 'Branded Skyscale', unlock_items: [91369] },
  { id: 196, name: 'Bioluminescent Skyscale', unlock_items: [91342] },
  { id: 198, name: 'Flare-Marked Skyscale', unlock_items: [91314] },
  { id: 200, name: 'Gallant Lightbearer', unlock_items: [91562] },
  { id: 202, name: 'Broad-Horn Bull', unlock_items: [91795] },
  { id: 203, name: 'Fulgurite Ridgeback', unlock_items: [91795] },
  { id: 204, name: 'Savage Gladiator', unlock_items: [91795] },
  { id: 205, name: 'Lithosol', unlock_items: [91795] },
  { id: 206, name: 'Glademire', unlock_items: [91795] },
  { id: 207, name: 'Starclaw', unlock_items: [91795] },
  { id: 208, name: 'Maguuma Jackrabbit', unlock_items: [91795] },
  { id: 209, name: 'Arctic Razor', unlock_items: [91795] },
  { id: 210, name: 'Crowned Skyfisher', unlock_items: [91795] },
  { id: 211, name: 'Incarnate Flame', unlock_items: [91795] },
  { id: 213, name: 'Sun Stalker', unlock_items: [91795] },
  { id: 215, name: 'Cascade Heeler', unlock_items: [91795] },
  { id: 216, name: 'Deep Desert Scarab', unlock_items: [91795] },
  { id: 217, name: 'Luminous Ray', unlock_items: [91795] },
  { id: 218, name: 'Vital Geode', unlock_items: [91795] },
  { id: 220, name: 'Primal Spirit', unlock_items: [91982] },
  { id: 231, name: 'Infernal Horror', unlock_items: [92396] },
  { id: 250, name: 'Sacred Pegasus', unlock_items: [92726] },
  { id: 251, name: 'Guildrider Warclaw', unlock_items: [92870] },
  { id: 252, name: 'War-Torn Marauder', unlock_items: [92903] },
  { id: 264, name: 'Super Outlaw Raptor', unlock_items: [93324] },
  { id: 265, name: 'Moth-Marked Skyscale', unlock_items: [93333] },
  { id: 266, name: 'Archaius Sprinter', unlock_items: [93333] },
  { id: 267, name: 'Lithosol', unlock_items: [93333] },
  { id: 268, name: 'Volcanic Ray', unlock_items: [93333] },
  { id: 269, name: 'Exalted Mists Champion', unlock_items: [93333] },
  { id: 270, name: 'Darkmist Moorhound', unlock_items: [93333] },
  { id: 271, name: 'Gendarran Hawkeye', unlock_items: [93333] },
  { id: 272, name: 'Sleek Dunerunner', unlock_items: [93333] },
  { id: 273, name: 'Bioluminescent Raptor', unlock_items: [93333] },
  { id: 275, name: 'Venomous Greathorn', unlock_items: [93333] },
  { id: 276, name: 'Vital Geode', unlock_items: [93333] },
  { id: 277, name: 'Luminous Roller', unlock_items: [93333] },
  { id: 278, name: 'Awakened Roller Beetle', unlock_items: [93333] },
  { id: 279, name: 'Vigilant Saberclaw', unlock_items: [93333] },
  { id: 280, name: 'Frostsoul Skyscale', unlock_items: [93333] },
  { id: 287, name: 'Mordrem Alpha', unlock_items: [93666] },
  { id: 292, name: 'Dark Monarch', unlock_items: [93703] },
  // -- GENERATE-END --
]

export default GAME_DATA_MOUNT_SKINS
