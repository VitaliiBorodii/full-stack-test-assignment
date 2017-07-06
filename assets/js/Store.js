import {combineReducers, applyMiddleware, compose, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga';

import feedReducer from './reducers/feed'

import feedSaga from './sagas/feed'

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  feed: feedReducer
})


const Store = compose(
  applyMiddleware(
    sagaMiddleware
  )
)(createStore)(reducers)

sagaMiddleware.run(feedSaga)

export default Store