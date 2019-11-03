export function escapeQuotes (string: string): string {
  return string.replace(/'/g, `\\'`)
}
