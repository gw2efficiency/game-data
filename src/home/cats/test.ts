import data from './data'
import { IMAGE_FILE_ENDINGS, validDateString, validFileEnding, validUrl } from '../../_helpers/test'

it('has the correct type', () => {
  const ids = data
    .filter(
      (cat) =>
        cat.id === 0 ||
        cat.name === '' ||
        cat.icon === '' ||
        cat.description === '' ||
        (cat.map_screenshot && cat.map_screenshot === '') ||
        cat.release_date === ''
    )
    .map((cat) => cat.id)

  if (ids.length > 0) {
    throw new Error('Incorrect type: ' + ids.join(', '))
  }
})

it('does not have duplicated ids', () => {
  const ids = data.map((cat) => cat.id).filter((x, i, self) => self.indexOf(x) !== i)

  if (ids.length > 0) {
    throw new Error('Duplicated ids: ' + ids.join(', '))
  }
})

it('has correctly formatted icon urls', () => {
  const ids = data
    .filter((cat) => !validUrl(cat.icon) || !validFileEnding(cat.icon, IMAGE_FILE_ENDINGS))
    .map((cat) => cat.id)

  if (ids.length > 0) {
    throw new Error('Invalid icon url: ' + ids.join(', '))
  }
})

it('has correctly formatted map_screenshot urls', () => {
  const ids = data
    .filter(
      (cat) =>
        cat.map_screenshot &&
        (!validUrl(cat.map_screenshot) || !validFileEnding(cat.map_screenshot, IMAGE_FILE_ENDINGS))
    )
    .map((cat) => cat.id)

  if (ids.length > 0) {
    throw new Error('Invalid map_screenshot url: ' + ids.join(', '))
  }
})

it('has correctly formatted release_date', () => {
  const ids = data.filter((cat) => !validDateString(cat.release_date)).map((cat) => cat.id)

  if (ids.length > 0) {
    throw new Error('Invalid release_date date: ' + ids.join(', '))
  }
})
