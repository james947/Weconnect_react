import { combineReducers } from 'redux';
import fetchBusinessReducer from './redux/reducers/reducers';
import user from './redux/reducers/userReducer';

const rootReducer = combineReducers({
  business: fetchBusinessReducer,
  user

});

export default rootReducer;
