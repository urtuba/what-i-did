
/**
 * It filters logs by tags. If a log has some of the tags, it will be included to the result.
 * @param {Log[]} logs  Logs to be filtered
 * @param  {String[]} tags Tags to use while filtering
 * @returns {Log[]}   Filtered logs
 */

const filterByTags = (logs, ...tags) => {
  if (tags.length == 0)
    return logs
  else
    return logs.filter(log => {
      return tags.some(tag => log.hasTag(tag))
    })
}

export {
  filterByTags
}