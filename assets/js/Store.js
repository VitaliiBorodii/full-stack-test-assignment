import {combineReducers, applyMiddleware, compose, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga';

import feedReducer from './reducers/feed'
import itemReducer from './reducers/item'

import feedSaga from './sagas/feed'
import itemSaga from './sagas/item'

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  feed: feedReducer,
  item: itemReducer,
})


const Store = compose(
  applyMiddleware(
    sagaMiddleware
  )
)(createStore)(reducers)

sagaMiddleware.run(feedSaga)
sagaMiddleware.run(itemSaga)

export default Store