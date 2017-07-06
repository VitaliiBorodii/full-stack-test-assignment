import {FETCH_FEED_REQUEST} from '../constants/feed'

export const loadFeed = (page, limit) =>({
  type: FETCH_FEED_REQUEST,
  limit,
  page
})