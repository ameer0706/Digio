import {createStore, combineReducers, applyMiddleware} from 'redux';
import Common from './reducer/Common';
import thunk from 'redux-thunk';

const store = createStore(
  combineReducers({
    common: Common,
  }),
  applyMiddleware(thunk),
);

export default store;
