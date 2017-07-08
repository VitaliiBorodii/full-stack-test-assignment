import {put, takeEvery} from 'redux-saga/effects'
import {FETCH_CATEGORY_REQUEST, FETCH_CATEGORY_ERROR, FETCH_CATEGORY_SUCCESS} from '../constants/category'
import * as API from '../api/category'

function* fetchCategory({id}) {
  try {
    const games = yield API.fetchCategory(id)
    yield put({
      type: FETCH_CATEGORY_SUCCESS,
      games
    })
  } catch (err) {
    yield put({
      type: FETCH_CATEGORY_ERROR,
      error: err.toString()
    })
  }
}

function* categorySaga() {
  yield takeEvery(FETCH_CATEGORY_REQUEST, fetchCategory)
}

export default categorySaga