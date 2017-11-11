import { createStore, combineReducers } from 'redux';
import all from './reducers/all';
import fav from './reducers/fav';

export default createStore(combineReducers({
   all,
   fav
}));