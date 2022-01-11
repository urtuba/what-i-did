import { v4 } from 'uuid'

class Log {
    constructor (note, tags = []) {
        this.id = v4()
        this.note = note
        this.tags = tags
        this.date = new Date()
    }

    toJSON () {
        return {
            id: this.id,
            note: this.note,
            tags: this.tags,
            date: this.date.toISOString()
        }
    }

    static fromJSON (json) {
        const log = new Log(json.note, json.tags)
        log.id = json.id
        log.date = new Date(json.date)
        return log
    }

    hasTag (tag) {
        return this.tags.includes(tag)
    }
}

export default Log