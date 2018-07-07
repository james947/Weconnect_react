import { combineReducers } from 'redux';
import businesses from './redux/reducers/reducers';
import fetchReviews from './redux/reducers/reviews';
import user from './redux/reducers/userReducer';
import filteredBusinesses from './redux/reducers/filtersReducer';


const rootReducer = combineReducers({
  businesses,
  user,
  fetchReviews,
  filteredBusinesses



});

export default rootReducer;
