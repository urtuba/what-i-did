import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const rootDir       = dirname(fileURLToPath(import.meta.url))
const dbPath        = join(rootDir, '/db/data.json')
const userName      = 'urtuba'
const defaultLimit  = 200

export { rootDir, dbPath, userName, defaultLimit }