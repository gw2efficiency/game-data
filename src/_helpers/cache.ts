import fs from 'fs/promises'
import path from 'path'

const CACHE_DIR = path.join(__dirname, '../../.cache')

export async function readCacheFile<T = unknown>(fileName: string): Promise<T> {
  const filePath = path.join(CACHE_DIR, fileName)
  const fileContent = await fs.readFile(filePath, 'utf-8')

  return JSON.parse(fileContent) as T
}
