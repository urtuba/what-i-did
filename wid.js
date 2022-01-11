import Log from './model/log.js'

if (import.meta.url == `file://${process.argv[1]}`) {

  if(process.argv[2] == 'log') {
    const tags = process.argv.slice(3)
    const log = new Log("Hello World", tags)
    console.log(log.toJSON())
  }
  
  else if(process.argv[2] == 'ls') {
    const log = Log.fromJSON({
      id: '5521e159-acab-4664-b5ec-6867b631ed43',
      note: 'Hello World',
      tags: [ 'tag1', 'tag2' ],
      date: '2022-01-11T21:52:46.104Z'
    })
    console.log(log.toJSON())
  }
  
}