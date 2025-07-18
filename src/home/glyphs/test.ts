import { duplicates } from 'flocky'
import data from './data'

it('does not have duplicated ids', () => {
  const ids = duplicates(data.map((glyph) => glyph.id))

  if (ids.length > 0) {
    throw new Error('Duplicated ids: ' + ids.join(', '))
  }
})

it('is not missing any unused item id', () => {
  const missingUnusedItemId = data.filter((glyph) => !glyph.unusedItemId).map((glyph) => glyph.id)

  if (missingUnusedItemId.length > 0) {
    throw new Error(`Missing unused item id: ` + missingUnusedItemId.join(', '))
  }
})
