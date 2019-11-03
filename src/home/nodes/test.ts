import data from './data'

it('has the correct structure', () => {
  const ids = data.filter((node) => node.id === '' || node.name === '').map((node) => node.id)

  if (ids.length > 0) {
    throw new Error('Incorrect structure: ' + ids.join(', '))
  }
})

it('does not have duplicated ids', () => {
  const ids = data.map((node) => node.id).filter((x, i, self) => self.indexOf(x) !== i)

  if (ids.length > 0) {
    throw new Error('Duplicated ids: ' + ids.join(', '))
  }
})

it('is not missing any unlock_items', () => {
  const missingUnlockItemsIds = data
    .filter((node) => node.unlock_items.length === 0)
    .map((node) => node.id)

  if (missingUnlockItemsIds.length > 0) {
    throw new Error('Missing unlock_items: ' + missingUnlockItemsIds.join(', '))
  }
})
