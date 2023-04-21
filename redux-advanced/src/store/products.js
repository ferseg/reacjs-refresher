import { createSlice } from "@reduxjs/toolkit";

const productItemInitialState = {
  products: [
    {
      id: 1,
      title: "Keyboard",
      description: "The best keyboar in the market",
      price: 12.5,
    },
    {
      id: 2,
      title: "Mouse",
      description: "The best mouse in the market",
      price: 5.5,
    },
  ],
};

const productItemSlice = createSlice({
  name: "product-item",
  initialState: productItemInitialState,
  reducers: {
    addProduct(state, product) {},
  },
});

export default productItemSlice.reducer;
