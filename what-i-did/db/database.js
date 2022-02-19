import fs from "fs"
import { dbPath } from "../config.js"
import Log from "../lib/log.js"

/**
 * @class
 * It handles the database operations.
 */
class Database {
  constructor() {
    this.path = dbPath

    if (fs.existsSync(this.path)) {
      this.data = JSON.parse(fs.readFileSync(this.path))
    } else {
      this.data = []
      fs.writeFileSync(this.path, JSON.stringify(this.data))
    }
  }

  /**
   * Saves a log to the database.
   * @param {Log} log  Log to be saved
   */
  saveLog(log) {
    this.data.push(log.toJSON())
    fs.writeFileSync(this.path, JSON.stringify(this.data))
  }

  /**
   * Returns all logs from the database.
   * @returns {Log[]}  All logs in the database
   */
  getLogs() {
    return this.data.map((log) => Log.fromJSON(log))
  }

  /**
   * Reset database - delete all data permanently.
   */
  resetDb() {
    this.data = []
    fs.writeFileSync(this.path, JSON.stringify(this.data))
  }
}

export default new Database()
