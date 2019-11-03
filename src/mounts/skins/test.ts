import data from './data'

it('has the correct type', () => {
  const ids = data.filter((skin) => skin.id <= 0 || skin.name === '').map((skin) => skin.id)

  if (ids.length > 0) {
    throw new Error('Incorrect type: ' + ids.join(', '))
  }
})

it('does not have duplicated ids', () => {
  const ids = data.map((skin) => skin.id).filter((x, i, self) => self.indexOf(x) !== i)

  if (ids.length > 0) {
    throw new Error('Duplicated ids: ' + ids.join(', '))
  }
})

it('is not missing any unlock_items', () => {
  const BASE_SKINS = [1, 2, 3, 4, 6, 103, 161, 186]

  const missingUnlockItemsIds = data
    .filter((skin) => skin.unlock_items.length === 0 && !BASE_SKINS.includes(skin.id))
    .map((skin) => skin.id)

  if (missingUnlockItemsIds.length > 0) {
    throw new Error('Missing unlock_items: ' + missingUnlockItemsIds.join(', '))
  }
})
