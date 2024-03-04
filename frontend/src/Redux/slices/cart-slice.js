import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartItems: [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(
        (el) => el._id === action.payload._id
      );
      if (existingItem) {
        existingItem.qty++;
        state.cartItems = [...state.cartItems];
      } else {
        state.cartItems.push({ ...action.payload, qty: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (product) => product._id !== action.payload
      );
    },
  },
});
export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
