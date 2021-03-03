import instance from "./instance";
import { ADD_ITEM, REMOVE_ITEM, CHECKOUT_ITEMS } from "./types";

export const addItemToCart = (newItem) => {
  return {
    type: ADD_ITEM,
    payload: { newItem },
  };
};

export const deleteItemFromCart = (productId) => {
  return {
    type: REMOVE_ITEM,
    payload: { productId },
  };
};

export const checkout = () => {
  return {
    type: CHECKOUT_ITEMS,
  };
};
