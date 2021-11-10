import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import greetingSlice from './greeting/greetingSlice';

const combineMiddleware = [thunk, logger];

const reducer = combineReducers(
  {
    greeting: greetingSlice.reducer,
  },
);

const store = createStore(
  reducer,
  applyMiddleware(...combineMiddleware),
);

export default store;
