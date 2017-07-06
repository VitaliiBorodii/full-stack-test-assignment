import {PAGE_SIZE, FETCH_FEED_REQUEST, FETCH_FEED_ERROR, FETCH_FEED_SUCCESS} from '../constants/feed'

const initState = {
  pending: false,
  feed: {},
  meta: {
    offset: 0,
    total: Infinity
  },
  error: null
}

export default (state = initState, action) => {
  console.log(action)
  switch (action.type) {
    case FETCH_FEED_REQUEST:
      return {
        ...state,
        error: null,
        pending: true
      }

    case FETCH_FEED_SUCCESS:
      return {
        ...state,
        feed: {...state.feed, ...action.feed},
        meta: action.meta,
        pending: false
      }

    case FETCH_FEED_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      }

    default:
      return state
  }
}