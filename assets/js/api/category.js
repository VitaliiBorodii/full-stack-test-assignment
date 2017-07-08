import json from '../../json/feed.json'

const categories = json.games.reduce((acc, item) => {
  item.categories.forEach(cat => {
    acc[cat] = acc[cat] || []
    acc[cat].push(item)
  })
  return acc
}, {})


export const fetchCategory = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const response = categories[id]

      response ? resolve(response) : reject(new Error(`Category ${id} not found!`))
    }, 200 + (Math.random() * 300))
  })
}