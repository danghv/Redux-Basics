import { combineReducers } from 'redux';
// import lastId from './reducer_lastID';
import pizzas from './reducer_pizzas';

const rootReducer = combineReducers({ pizzas });

export default rootReducer;