import {combineReducers, applyMiddleware, compose, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga';

import feedReducer from './reducers/feed'
import itemReducer from './reducers/item'
import categoryReducer from './reducers/category'

import feedSaga from './sagas/feed'
import itemSaga from './sagas/item'
import categorySaga from './sagas/category'

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  feed: feedReducer,
  item: itemReducer,
  category: categoryReducer
})


const Store = compose(
  applyMiddleware(
    sagaMiddleware
  )
)(createStore)(reducers)

sagaMiddleware.run(feedSaga)
sagaMiddleware.run(itemSaga)
sagaMiddleware.run(categorySaga)

export default Store