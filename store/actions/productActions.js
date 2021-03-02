import instance from "./instance";
import { FETCH_PRODUCTS } from "./types";

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("products");
      dispatch({
        type: FETCH_PRODUCTS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
