import data from './data'

it('does not have duplicated ids', () => {
  const ids = data.map((item) => item.id).filter((x, i, self) => self.indexOf(x) !== i)

  if (ids.length > 0) {
    throw new Error('Duplicated ids: ' + ids.join(', '))
  }
})
