import { combineReducers } from 'redux';
import fetchBusinessReducer from './redux/reducers';

const rootReducer = combineReducers({
  business: fetchBusinessReducer
});

export default rootReducer;
