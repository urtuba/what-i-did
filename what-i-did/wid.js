import io from "./lib/io.js"
import { defaultLimit } from "./config.js"

const main = async () => {
  // Get help
  if (process.argv[2] == "help") io.help()
  // Add log
  else if (process.argv[2] == "log") io.saveLog(process.argv.slice(3))
  // List logs
  else if (process.argv[2] == "ls") {
    const configs = process.argv.slice(3)

    const tags = configs
      .filter((config) => config.startsWith("--tag="))
      .map((config) => config.slice(6))

    const limitConf = configs.find((config) => config.startsWith("--limit="))
    const limit = limitConf ? parseInt(limitConf.slice(8)) : defaultLimit

    io.printLastLogs(tags, limit)
  }
  // Delete all
  else if (process.argv[2] == "reset") io.resetData()
}

if (import.meta.url == `file://${process.argv[1]}`) main()
