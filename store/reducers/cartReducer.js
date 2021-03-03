import { ADD_ITEM, REMOVE_ITEM, CHECKOUT_ITEMS } from "../actions/types";

const initialState = {
  items: [
    { id: 1, quantity: 2 },
    { id: 2, quantity: 1 },
    { id: 7, quantity: 1 },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const { newItem } = action.payload;
      const foundItem = state.items.find((item) => item.id === newItem.id);
      return {
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
    case REMOVE_ITEM:
      const { productId } = action.payload;
      return {
        ...state,
        items: state.items.filter((item) => item.id !== productId),
      };

    case CHECKOUT_ITEMS:
      alert("Thank you for your purchase! Have a great day 😃");
      return {
        items: [],
      };
    default:
      return state;
  }
};

export default reducer;
