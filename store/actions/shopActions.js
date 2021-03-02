import instance from "./instance";
import { FETCH_SHOPS } from "./types";

export const fetchShops = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("shops");
      dispatch({
        type: FETCH_SHOPS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
