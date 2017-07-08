import {FETCH_CATEGORY_REQUEST, SET_CACHED_CATEGORY} from '../constants/category'

export const fetchCategory = (id) => ({
  type: FETCH_CATEGORY_REQUEST,
  id
})

export const setCachedCategory = (item) => ({
  type: SET_CACHED_CATEGORY,
  item
})
