import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/product-slice";
import cartSlice from "./slices/cart-slice";
import wishSlice from "./slices/wish-slice";
export const store = configureStore({
  reducer: {
    product: productSlice,
    cart: cartSlice,
    wishList: wishSlice,
  },
});
