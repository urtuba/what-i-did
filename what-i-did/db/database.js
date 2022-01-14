import fs from 'fs'
import config from '../config.js'
import Log from '../models/log.js'

class Database {
  constructor () {
    this.path = config.dbPath

    if (fs.existsSync(this.path)) {
      this.data = JSON.parse(fs.readFileSync(this.path))
    }
    else {
      this.data = []
      fs.writeFileSync(this.path, JSON.stringify(this.data))
    }
  }

  saveLog (log) {
    this.data.push(log.toJSON())
    fs.writeFileSync(this.path, JSON.stringify(this.data))
  }

  getLogs () {
    return this.data.map(log => Log.fromJSON(log))
  }
}

export default new Database()