import { v4 } from 'uuid'

/**
 * @class
 * Data structure for a log entry.
 * @param {string} note
 * @param {string} tags
 */
class Log {
  constructor(note, tags = []) {
    this.id = v4()
    this.note = note
    this.tags = tags
    this.date = new Date()
  }

  /**
   * Converts the log to JSON.
   * @returns {Object}  JSON object { id, note, tags, date }
   */
  toJSON() {
    return {
      id: this.id,
      note: this.note,
      tags: this.tags,
      date: this.date.toISOString(),
    }
  }

  /**
   * Converts the JSON record to a Log object.
   * @param {Object} json  JSON object { id, note, tags, date }
   * @returns {Log}
   */
  static fromJSON(json) {
    const log = new Log(json.note, json.tags)
    log.id = json.id
    log.date = new Date(json.date)
    return log
  }

  /**
   * Checks if the log has the given tag.
   * @param {string} tag  Tag to be checked
   * @returns {boolean}  True if the log has the tag, false otherwise
   */
  hasTag(tag) {
    return this.tags.includes(tag)
  }
}

export default Log
