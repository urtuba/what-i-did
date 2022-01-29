import database from '../db/database.js'
import readline from 'readline'
import colors from 'colors/safe.js'

import Log from './log.js'
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

const printLog = (log, colorNo) => {
  let color
  if (colorNo == 0)
    color = colors.red
  else if (colorNo == 1)
    color = colors.green
  else
    color = colors.blue

  const date = color(new Date(log.date).toDateString())
  const note = log.note
  const tags = colors.yellow(` ~ ~ [ ${log.tags.join(', ')} ]`)
  console.log(`${date} ${note} ${tags}`)
}

const printLastLogs = async (tags = null, limit = 20) => {
  let logs
  if (tags == null) logs = database.getLogs()
  else logs = filterByTags(database.getLogs(), ...tags)

  if (logs.length > 20) logs = logs.slice(-20)

  logs.forEach((log, i) => printLog(log, i%2))
}

export default {
  saveLog,
  printLog,
  printLastLogs
}