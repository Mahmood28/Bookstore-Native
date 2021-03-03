import { combineReducers } from "redux";
import shopReducer from "./shopReducer";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  shopReducer,
  productReducer,
  cartReducer,
  authReducer,
});

export default rootReducer;
