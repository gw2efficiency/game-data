import { duplicates, unique } from 'flocky'
import data from './data'
import { legendaryRelicInfo } from './generate'

it('does not have duplicated ids', () => {
    const ids = duplicates(data.map((rune) => rune.id))

    if (ids.length > 0) {
        throw new Error('Duplicated ids: ' + ids.join(', '))
    }
})
