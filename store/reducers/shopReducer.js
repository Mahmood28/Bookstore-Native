import { FETCH_SHOPS } from "../actions/types";

const initialState = {
  shops: [],
  shopLoading: true,
};

const ShopReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SHOPS:
      return {
        ...state,
        shops: action.payload,
        shopLoading: false,
      };
    default:
      return state;
  }
};
export default ShopReducer;
