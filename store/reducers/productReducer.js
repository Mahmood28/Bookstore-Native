import { FETCH_PRODUCTS } from "../actions/types";

const initialState = {
  products: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
export default reducer;
