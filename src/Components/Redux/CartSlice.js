import { createSlice } from "@reduxjs/toolkit";

const cartState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: cartState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    deleteFromCart: (state, action) => {
      const index = state.cart.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        state.cart.splice(index, 1);
      }
    },
  },
});

export const { addToCart, deleteFromCart } = cartSlice.actions;

export default cartSlice.reducer;