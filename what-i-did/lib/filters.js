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