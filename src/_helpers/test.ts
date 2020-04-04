const URL_REGEX = /^https:\/\/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}([-a-zA-Z0-9()@:%_\+.~#?&\/\/=]*)$/
const DATE_REGEX = /^(\d{4})-(\d{2})-(\d{2})T(\d{2})\:(\d{2})\:(\d{2})\.(\d{3})Z$/
export const IMAGE_FILE_ENDINGS = ['png', 'jpg', 'jpeg']

export function validUrl(url: string): boolean {
  return !!url.match(URL_REGEX)
}

export function validFileEnding(url: string, endings: Array<string>): boolean {
  return endings.some((ending) => url.endsWith(ending))
}

export function validDateString(dateString: string): boolean {
  return !!dateString.match(DATE_REGEX) && !isNaN(new Date(dateString).getTime())
}
