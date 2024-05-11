import { duplicates } from 'flocky'
import data from './data'

it('does not have duplicated ids', () => {
    const ids = duplicates(data.map((infusion) => infusion.id))

    if (ids.length > 0) {
        throw new Error('Duplicated ids: ' + ids.join(', '))
    }
})