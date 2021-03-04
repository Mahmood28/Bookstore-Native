import instance from "./instance";
import { ADD_ITEM, REMOVE_ITEM, CHECKOUT_ITEMS, FETCH_CART } from "./types";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const addItemToCart = (newItem) => {
  return {
    type: ADD_ITEM,
    payload: { newItem },
  };
};

export const deleteItemFromCart = (productId) => {
  return { type: REMOVE_ITEM, payload: { productId } };
};

export const checkout = () => {
  return {
    type: CHECKOUT_ITEMS,
  };
};

export const fetchCart = () => {
  return async (dispatch) => {
    try {
      const cart = JSON.parse(await AsyncStorage.getItem("myCart"));
      console.log(cart);
      dispatch({
        type: FETCH_CART,
        payload: cart,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
