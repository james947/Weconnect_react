const initialState = {
  businesses: []
};

const fetchBusinessReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'GET_BUSINESS':
    return {
      ...state,
      businesses: action.payload
    };

  default:
    return state;
  }
};

export default fetchBusinessReducer;

