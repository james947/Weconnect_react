import * as types from '../../types';


export default function businesses(state = [], action) {
  switch (action.type) {
  case types.GET_BUSINESS:
    return action.payload

  case types.ADD_NEW_BUSINESS:
    return  [...state, action.payload]
  
  case types.DELETE_BUSINESS:
    return state.filter(businesses => businesses.id !== action.id);

  case types.EDIT_BUSINESS:
    return state.map(businesses => (businesses.id === action.business.id ?
      { ...state, ...action.business } : state));

  default:
    return state;
  }
}

