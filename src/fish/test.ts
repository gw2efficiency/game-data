import { duplicates } from 'flocky'
import data from './data'

it('does not have duplicated ids', () => {
  const ids = duplicates(data.map((fish) => fish.id))

  if (ids.length > 0) {
    throw new Error('Duplicated ids: ' + ids.join(', '))
  }
})

it('is not missing any time of day data', () => {
  const missingTimeOfDayInfo = data
    .filter((fish) => fish.timeOfDay.length === 0)
    .map((fish) => fish.id)

  if (missingTimeOfDayInfo.length > 0) {
    throw new Error(`Missing time of day data: ` + missingTimeOfDayInfo.join(', '))
  }
})

it('has valid achievement data', () => {
  const missingValidAchievementData = data
    .filter((fish) => fish.achievement.id < 0 || fish.achievement.bit < 0)
    .map((fish) => fish.id)

  if (missingValidAchievementData.length > 0) {
    throw new Error(`Invalid achievement data: ` + missingValidAchievementData.join(', '))
  }
})

it('has valid rarity data', () => {
  const missingValidRarityData = data.filter((fish) => fish.rarity < 0).map((fish) => fish.id)

  if (missingValidRarityData.length > 0) {
    throw new Error(`Invalid rarity data: ` + missingValidRarityData.join(', '))
  }
})

it('has valid fishingHole/openWater data', () => {
  const missingFishingHoleData = data
    .filter((fish) => !fish.openWater && fish.fishingHole.includes('None'))
    .map((fish) => fish.id)

  if (missingFishingHoleData.length > 0) {
    throw new Error(`Invalid fishing hole / open water data: ` + missingFishingHoleData.join(', '))
  }
})
