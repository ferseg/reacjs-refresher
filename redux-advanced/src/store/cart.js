import { createSlice } from "@reduxjs/toolkit";

const cartInitialState = {
  items: [],
  quantity: 0,
};

const findIndex = (items, id) => {
  return items.findIndex((item) => item.id === id);
};

const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    addItem(state, action) {
      const item = action.payload;
      const foundIndex = findIndex(state.items, item.id);
      if (foundIndex < 0) {
        item.total = item.price;
        state.items = [item, ...state.items];
      } else {
        state.items[foundIndex].quantity++;
        state.items[foundIndex].total += state.items[foundIndex].price;
      }
      state.quantity++;
    },
    removeItem(state, action) {
      const itemId = action.payload;
      const foundIndex = findIndex(state.items, itemId);
      if (state.items[foundIndex].quantity === 1) {
        state.items = state.items.filter((item) => item.id !== itemId);
      } else {
        state.items[foundIndex].quantity--;
        state.items[foundIndex].total -= state.items[foundIndex].price;
      }
      state.quantity--;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
