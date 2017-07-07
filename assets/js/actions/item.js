import {FETCH_ITEM_REQUEST, SET_CACHED_ITEM} from '../constants/item'

export const fetchItem = (id) => ({
  type: FETCH_ITEM_REQUEST,
  id
})

export const setCahcedItem = (item) => ({
  type: SET_CACHED_ITEM,
  item
})
