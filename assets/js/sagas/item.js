import {put, takeEvery} from 'redux-saga/effects'
import {FETCH_ITEM_REQUEST, FETCH_ITEM_ERROR, FETCH_ITEM_SUCCESS} from '../constants/item'
import * as API from '../api/item'

function* fetchItem({id}) {
  try {
    const item = yield API.fetchItem(id)
    yield put({
      type: FETCH_ITEM_SUCCESS,
      item
    })
  } catch (err) {
    yield put({
      type: FETCH_ITEM_ERROR,
      error: err.toString()
    })
  }
}

function* itemSaga() {
  yield takeEvery(FETCH_ITEM_REQUEST, fetchItem)
}

export default itemSaga