import { duplicates } from 'flocky'
import data from './data'

it('does not have duplicated input and output ids', () => {
  const duplicateEntries = duplicates(
    data,
    (refinement) => `${refinement.id}-${refinement.outputId}`
  )

  if (duplicateEntries.length > 0) {
    throw new Error(
      'Duplicated entries: ' +
        duplicateEntries.map((entry) => `(id:${entry.id}, output id:${entry.outputId})`).join(', ')
    )
  }
})
