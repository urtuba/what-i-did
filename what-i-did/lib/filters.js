const filterByTags = (logs, ...tags) => {
  return logs.filter(log => {
    return tags.some(tag => log.hasTag(tag))
  })
}

export {
  filterByTags
}