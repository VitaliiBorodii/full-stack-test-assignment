import json from '../../json/feed.json'

const categories = json.games.reduce((acc, item) => {
  item.categories.forEach(cat => {
    acc[cat] = acc[cat] || []
    acc[cat].push(item)
  })
  return acc
}, {})


export const fetchFeed = (offset) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const response = {
        feed: {},
        meta: {
          offset: offset,
          total: json.categories.length
        }
      }
      for (let i = (offset - 1); i < (offset); i++) {
        const category = json.categories[i]
        if (!category) break
        response.feed[category] = categories[category]
      }

      resolve(response)
    }, Math.random() * 500)
  })
}