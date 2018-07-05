import * as types from '../../types';

const initialState = {
  businesses: []
};

export default function fetchBusinessReduce(state = initialState, action) {
  switch (action.type) {
  case types.GET_BUSINESS:
    return {
      ...state,
      businesses: action.payload
    };

  case types.GET_BUSINES:
    return {
      businesses: action.payload
    };


  case types.DELETE_BUSINESS:
    return { business: state.businesses.filter(businesses => businesses.business.id !== action.id) };

  case types.EDIT_BUSINESS:
    return state.map(businesses => (businesses.id === action.business.id ?
      { ...state, ...action.business } : state));

  default:
    return state;
  }
}

