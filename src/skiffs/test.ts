import { duplicates } from 'flocky'
import data from './data'

it('has the correct type', () => {
  const ids = data.filter((skin) => skin.id <= 0 || skin.name === '').map((skin) => skin.id)

  if (ids.length > 0) {
    throw new Error('Incorrect type: ' + ids.join(', '))
  }
})

it('does not have duplicated ids', () => {
  const ids = duplicates(data.map((skin) => skin.id))

  if (ids.length > 0) {
    throw new Error('Duplicated ids: ' + ids.join(', '))
  }
})

it('is not missing any unlock_items', () => {
  const BASE_SKINS = [410]

  const missingUnlockItemsIds = data
    .filter((skin) => skin.unlock_items.length === 0 && !BASE_SKINS.includes(skin.id))
    .map((skin) => skin.id)

  if (missingUnlockItemsIds.length > 0) {
    throw new Error('Missing unlock_items: ' + missingUnlockItemsIds.join(', '))
  }
})
