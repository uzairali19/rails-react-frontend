import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import comicReducer from './reducers/comicReducer';

const reducer = combineReducers({
  comicReducer,
});

const store = createStore(
  reducer,
  compose(applyMiddleware(thunkMiddleware, logger)),
);

export default store;
