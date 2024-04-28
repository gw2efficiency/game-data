import { duplicates } from 'flocky'
import data from './data'

it('does not have duplicated ids', () => {
  const ids = duplicates(data.map((rune) => rune.exoticId))

  if (ids.length > 0) {
    throw new Error('Duplicated ids: ' + ids.join(', '))
  }
})

it('is not missing legendary ID', () => {
  const missingLegendaryId = data
    .filter((item) => item.legendaryId === 0)
    .map((item) => item.exoticId)

  if (missingLegendaryId.length > 0) {
    throw new Error('Missing Legendary Id: ' + missingLegendaryId.join(', '))
  }
})
