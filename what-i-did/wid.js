import database from './db/database.js'
import readline from 'readline'
import Log from './model/log.js'


const log = async () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  const prompt = (query) => new Promise(resolve => rl.question(query, resolve))

  const note = await prompt('Note: ')
  const tags = process.argv.slice(3)
  const log = new Log(note, tags)

  database.saveLog(log)

  rl.close()
}

const list = async (tags = null) => {
  const logs = database.getLogs()
  console.log(logs)
}

const main = async () => {
  if(process.argv[2] == 'log')
    log()
  
  else if(process.argv[2] == 'ls')
    console.log(database.getLogs())

}

if (import.meta.url == `file://${process.argv[1]}`)
  main()