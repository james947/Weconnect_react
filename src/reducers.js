import { combineReducers } from 'redux';
import businesses from './redux/reducers/reducers';
import fetchReviews from './redux/reducers/reviews';
import user from './redux/reducers/userReducer';


const rootReducer = combineReducers({
  businesses,
  user,
  fetchReviews


});

export default rootReducer;
