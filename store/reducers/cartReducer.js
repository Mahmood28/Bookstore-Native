const initialState = {
  cart: [
    { id: 1, quantity: 2 },
    { id: 2, quantity: 1 },
    { id: 7, quantity: 1 },
  ],
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CART":
      return {
        ...state,
        cart: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
