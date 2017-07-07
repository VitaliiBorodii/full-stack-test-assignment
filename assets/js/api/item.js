import json from '../../json/feed.json'


export const fetchItem = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      for (let i = 0; i < json.games.length; i++) {
        const item = json.games[i]
        if (item.package_id === id) {
          resolve(item)
          return
        }
      }

      reject(new Error(`Item ${id} was not found`))

    }, Math.random() * 500)
  })
}