import { combineReducers } from 'redux';
import fetchBusinessReducer from './redux/reducers/reducers';
import fetchReviews from './redux/reducers/reviews';
import user from './redux/reducers/userReducer';


const rootReducer = combineReducers({
  business: fetchBusinessReducer,
  user,
  fetchReviews


});

export default rootReducer;
