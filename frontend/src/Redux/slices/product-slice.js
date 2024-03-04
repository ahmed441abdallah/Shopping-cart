import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchProducts = createAsyncThunk(
  "productSlice/fetchProducts",
  async () => {
    const response = await axios.get("https://o-live-api.vercel.app/products");
    return response.data;
  }
);
const initialState = {
  products: [],
  filteredProducts: [],
  error: null,
  status: "idle",
  selectedSize: "",
  order: "",
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSize: (state, action) => {
      state.selectedSize = action.payload;
      if (action.payload === "ALL") {
        state.filteredProducts = state.products;
      } else {
        state.filteredProducts = state.products.filter((product) =>
          product.sizes.includes(action.payload)
        );
      }
    },
    setOrder: (state, action) => {
      state.order = action.payload;
      if (action.payload === "Lowest") {
        state.filteredProducts.sort((a, b) => a.price - b.price);
      } else if (action.payload === "Highest") {
        state.filteredProducts.sort((a, b) => b.price - a.price);
      } else {
        state.filteredProducts.sort((a, b) => (a.id < b.id ? 1 : -1));
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
        state.filteredProducts = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// Action creators are generated for each case reducer function
export const { setProducts, setSize, setOrder } = productSlice.actions;

export default productSlice.reducer;
