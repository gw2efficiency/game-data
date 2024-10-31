import { duplicates, unique } from 'flocky'
import data from './data'

it('does not have duplicated ids', () => {
  const ids = duplicates(data.map((title) => title.id))

  if (ids.length > 0) {
    throw new Error('Duplicated ids: ' + ids.join(', '))
  }
})
