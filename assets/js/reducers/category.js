import {FETCH_CATEGORY_REQUEST, FETCH_CATEGORY_ERROR, FETCH_CATEGORY_SUCCESS, SET_CACHED_CATEGORY} from '../constants/category'

const initState = {
  games: null,
  pending: null,
  error: null,
}

export default (state = initState, action) => {

  switch (action.type) {
    case FETCH_CATEGORY_REQUEST:
      return {
        ...state,
        error: null,
        pending: true
      }

    case FETCH_CATEGORY_SUCCESS:
    case SET_CACHED_CATEGORY:
      return {
        ...state,
        games: action.games,
        pending: false
      }

    case FETCH_CATEGORY_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      }

    default:
      return state
  }
}