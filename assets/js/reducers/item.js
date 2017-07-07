import {FETCH_ITEM_REQUEST, FETCH_ITEM_ERROR, SET_CACHED_ITEM, FETCH_ITEM_SUCCESS} from '../constants/item'

const initState = {
  item: null,
  pending: null,
  error: null,
}

export default (state = initState, action) => {

  switch (action.type) {
    case FETCH_ITEM_REQUEST:
      return {
        ...state,
        error: null,
        pending: true
      }

    case FETCH_ITEM_SUCCESS:
    case SET_CACHED_ITEM:
      return {
        ...state,
        item: action.item,
        pending: false
      }

    case FETCH_ITEM_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      }

    default:
      return state
  }
}