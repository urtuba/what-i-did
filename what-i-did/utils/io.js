import database from '../db/database.js'
import readline from 'readline'
import colors from 'colors/safe.js'

import Log from '../models/log.js'
import { filterByTags } from './filters.js'

const saveLog = async (tags) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  const prompt = (query) => new Promise(resolve => rl.question(query, resolve))

  const note = await prompt('Note: ')
  const log = new Log(note, tags)

  database.saveLog(log)
  
  printLog(log)
  console.log('Log saved!')

  rl.close()
}

const printLog = (log) => {
  const date = colors.red(log.date.toDateString())
  const note = colors.green(log.note)
  const tags = colors.yellow(` ~ ~ [ ${log.tags.join(', ')} ]`)

  console.log(`${date} ${note} ${tags}`)
}

const printLastLogs = async (tags = null, limit = 20) => {
  let logs
  if (tags == null) logs = database.getLogs()
  else logs = filterByTags(database.getLogs())

  if (logs.length > 20) logs = logs.slice(-20)

  logs.forEach(log => printLog(log))
}

export default {
  saveLog,
  printLog,
  printLastLogs
}