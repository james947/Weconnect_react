import * as types from '../../types';

const initialState = {
  reviews: []
};

export default function fetchReviews(state = initialState, action) {
  switch (action.type) {
  case types.GET_REVIEWS:
    return {
      ...state,
      reviews: action.reviews
    };
  case types.NEW_REVIEW:
    return {
      ...state,
      reviews: action.reviews
    };
  default:
    return state;
  }
}

