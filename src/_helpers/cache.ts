import * as fs from 'fs'
import * as util from 'util'
import path from 'path'

const readFile = util.promisify(fs.readFile)

const CACHE_DIR = path.join(__dirname, '../../.cache')

export async function readCacheFile<T = unknown>(fileName: string): Promise<T> {
  const filePath = path.join(CACHE_DIR, fileName)
  const fileContent = await readFile(filePath, 'utf-8')

  return JSON.parse(fileContent) as T
}
