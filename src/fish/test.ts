import { duplicates } from 'flocky'
import data from './data'

it('does not have duplicated ids', () => {
  const ids = duplicates(data.map((fish) => fish.id))

  if (ids.length > 0) {
    throw new Error('Duplicated ids: ' + ids.join(', '))
  }
})

it('is not missing any timeOfDay data', () => {
  const missingTimeOfDayInfo = data
    .filter((fish) => fish.timeOfDay.length === 0)
    .map((fish) => fish.id)

  if (missingTimeOfDayInfo.length > 0) {
    throw new Error(`Missing timeOfDay data: ` + missingTimeOfDayInfo.join(', '))
  }
})