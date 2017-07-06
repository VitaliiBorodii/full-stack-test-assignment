import json from '../../json/feed.json'

const categories = json.games.reduce((acc, item) => {
  item.categories.forEach(cat => {
    acc[cat] = acc[cat] || []
    acc[cat].push(item)
  })
  return acc
}, {})


export const fetchFeed = (limit, page) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const response = {
        feed: {},
        meta: {
          page: page,
          limit,
          total: json.categories.length
        }
      }
      for (let i = (page - 1) * limit; i < (page * limit); i++) {
        const category = json.categories[i]
        response.feed[category] = categories[category]
      }

      resolve(response)
    }, Math.random() * 500)
  })
}