import { duplicates, unique } from 'flocky'
import data from './data'
import { VARIANT_SKIN_NAMES } from './generate'

it('does not have duplicated ids', () => {
  const ids = duplicates(data.map((variant) => variant.id))

  if (ids.length > 0) {
    throw new Error('Duplicated ids: ' + ids.join(', '))
  }
})

it('has at least one item per variant', () => {
  const wantedKeys = unique(VARIANT_SKIN_NAMES.map((x) => x.variantKey))
  const haveKeys = unique(data.map((x) => x.variant_key))

  const missingKeys = wantedKeys.filter((key) => !haveKeys.includes(key))

  if (missingKeys.length > 0) {
    throw new Error('Missing items for variants: ' + missingKeys.join(', '))
  }
})
