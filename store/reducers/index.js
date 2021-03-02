import { combineReducers } from "redux";
import shopReducer from "./shopReducer";
import productReducer from "./productReducer";

const rootReducer = combineReducers({
  shopReducer,
  productReducer,
});

export default rootReducer;
