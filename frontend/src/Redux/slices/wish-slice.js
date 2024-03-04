import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  wishListItems: [],
};
export const wishListSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    addToWishList: (state, action) => {
      const existingItem = state.wishListItems.find(
        (el) => el._id === action.payload._id
      );
      if (existingItem) {
        alert("Already Added");
      } else {
        state.wishListItems.push(action.payload);
      }
    },
    removeFromWishList: (state, action) => {
      state.wishListItems = state.wishListItems.filter(
        (product) => product._id !== action.payload
      );
    },
  },
});
export const { addToWishList, removeFromWishList } = wishListSlice.actions;
export default wishListSlice.reducer;
