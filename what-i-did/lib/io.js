import database from "../db/database.js"
import readline from "readline"
import colors from "colors/safe.js"

import Log from "./log.js"
import { filterByTags } from "./filters.js"

/**
 * Prints help message.
 * @returns {void}  Nothing
 */
const help = () => {
  console.log(
    "\nWelcome to " +
      colors.bold(colors.green("what-i-did!")) +
      "! " +
      "You can log your daily activities / notes / reminders here. Us"
  )
  console.log(colors.bold(colors.cyan("\nUsage:")))
  console.log(
    colors.bold(colors.red("\twid log [...tags]\n\t\t>")) +
      " Allows you to log. You can add tags to your log by adding them after the log command.\n"
  )
  console.log(
    colors.bold(
      colors.red("\twid ls [--tag=tag1] [--tag=tag2]... [--limit=n]\n\t\t>")
    ) +
      " Allows you to list your logs. You can filter by tags and limit the number of logs to be displayed.\n"
  )
  console.log(
    colors.bold(colors.red("\twid help\n\t\t>")) + " Shows this help message.\n"
  )
}

/**
 * It logs a note with the given tags.
 * It uses console / prompt to ask for the note.
 * @param {String[]} tags   Tags to be added to the log
 */
const saveLog = async (tags) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  const prompt = (query) =>
    new Promise((resolve) => rl.question(query, resolve))

  const note = await prompt("Note: ")
  const log = new Log(note, tags)

  database.saveLog(log)

  printLog(log)
  console.log("Log saved!")

  rl.close()
}

/**
 *
 * @param {Log} log   Log to be printed
 * @param {Number} colorNo  Color number for date field
 */
const printLog = (log, colorNo) => {
  let color
  if (colorNo == 0) color = colors.red
  else if (colorNo == 1) color = colors.green
  else color = colors.blue

  const date = color(new Date(log.date).toDateString())
  const note = log.note
  const tags = colors.yellow(` ~ ~ [ ${log.tags.join(", ")} ]`)
  console.log(`${date} ${note} ${tags}`)
}

const printLastLogs = (tags = null, limit = 20) => {
  const logs = database.getLogs()

  let filteredLogs = filterByTags(logs, ...tags)
  if (logs.length > limit) filteredLogs = filteredLogs.slice(-limit)

  filteredLogs.forEach((log, i) => printLog(log, i % 2))
}

const resetData = async () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  const prompt = (query) =>
    new Promise((resolve) => rl.question(query, resolve))
  const answer = await prompt("All logs will be removed! Are you sure? (Y/n):")

  if (answer == "Y") database.resetDb()
  else console.log("Aborted!")

  rl.close()
}

export default {
  help,
  saveLog,
  printLog,
  printLastLogs,
  resetData,
}
