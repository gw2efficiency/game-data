import { duplicates, unique } from 'flocky'
import data from './data'
import { AURA_ITEM_NAMES } from './generate'

it('does not have duplicated ids', () => {
  const ids = duplicates(data.map((aura) => aura.id))

  if (ids.length > 0) {
    throw new Error('Duplicated ids: ' + ids.join(', '))
  }
})

it('has at least one item per aura', () => {
  const wantedKeys = unique(AURA_ITEM_NAMES.map((x) => x.auraKey))
  const haveKeys = unique(data.map((x) => x.aura_key))

  const missingKeys = wantedKeys.filter((key) => !haveKeys.includes(key))

  if (missingKeys.length > 0) {
    throw new Error('Missing items for auras: ' + missingKeys.join(', '))
  }
})
