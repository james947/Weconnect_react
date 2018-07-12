import * as types from '../../types';


export default function filteredBusinesses(state = [], action) {
  switch (action.type) {
  case types.FILTER_BUSINESS:
    return action.businesses
  default:
    return state;
  }
}

