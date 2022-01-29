import io from './lib/io.js'

const main = async () => {
  if (process.argv[2] == 'log')
    io.saveLog(process.argv.slice(3))
  
  else if(process.argv[2] == 'ls')
    io.printLastLogs()
}

if (import.meta.url == `file://${process.argv[1]}`)
  main()