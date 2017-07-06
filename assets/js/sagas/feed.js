import {put, takeEvery} from 'redux-saga/effects'
import {FETCH_FEED_REQUEST, FETCH_FEED_SUCCESS, FETCH_FEED_ERROR} from '../constants/feed'
import * as API from '../api/feed'

function* fetchFeed({page, limit}) {
  try {
    const response = yield API.fetchFeed(limit, page)
    yield put({
      type: FETCH_FEED_SUCCESS,
      ...response
    })
  } catch (err) {
    yield put({
      type: FETCH_FEED_ERROR,
      error: err.toString()
    })
  }
}

function* feedSaga() {
  yield takeEvery(FETCH_FEED_REQUEST, fetchFeed)
}

export default feedSaga