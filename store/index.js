import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reducer from "./reducers";

// Actions
import { fetchProducts } from "./actions/productActions";
import { fetchShops } from "./actions/shopActions";
import { checkForToken } from "./actions/authActions";
import { fetchCart } from "./actions/cartActions";

const store = createStore(reducer, applyMiddleware(thunk));

store.dispatch(fetchProducts());
store.dispatch(fetchShops());
store.dispatch(checkForToken());
store.dispatch(fetchCart());

export default store;
