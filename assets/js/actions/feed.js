import {FETCH_FEED_REQUEST} from '../constants/feed'

export const loadFeed = (offset) =>({
  type: FETCH_FEED_REQUEST,
  offset
})