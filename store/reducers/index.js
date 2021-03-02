import { combineReducers } from "redux";
import shopReducer from "./shopReducer";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  shopReducer,
  productReducer,
  cartReducer,
});

export default rootReducer;
