import {
  ADD_ITEM,
  REMOVE_ITEM,
  CHECKOUT_ITEMS,
  FETCH_CART,
} from "../actions/types";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
  items: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const { newItem } = action.payload;
      const foundItem = state.items.find(
        (item) => item.productId === newItem.productId
      );
      const newState = {
        ...state,
        items: foundItem
          ? state.items.map((item) =>
              item === foundItem
                ? {
                    ...foundItem,
                    quantity: foundItem.quantity + newItem.quantity,
                  }
                : item
            )
          : [...state.items, newItem],
      };
      AsyncStorage.setItem("myCart", JSON.stringify(newState.items));
      console.log(newState.items);
      return newState;
    case REMOVE_ITEM:
      const { productId } = action.payload;
      const updatedState = {
        ...state,
        items: state.items.filter((item) => item.productId !== productId),
      };
      AsyncStorage.setItem("myCart", JSON.stringify(updatedState.items));
      return updatedState;

    case CHECKOUT_ITEMS:
      alert("Thank you for your purchase! Have a great day 😃");
      AsyncStorage.removeItem("myCart");
      return {
        items: [],
      };

    case FETCH_CART:
      return {
        ...state,
        items: action.payload ?? [],
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
