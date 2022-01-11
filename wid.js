import database from './db/database.js'
import Log from './model/log.js'

if (import.meta.url == `file://${process.argv[1]}`) {

  if(process.argv[2] == 'log') {
    const tags = process.argv.slice(3)
    const log = new Log("Hello World", tags)
    database.saveLog(log)
  }
  
  else if(process.argv[2] == 'ls') {
    console.log(database.getLogs())
  }
  
}