import React, { useEffect } from "react";
import Filter from "./Filter";
import ProductList from "./ProductList";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Redux/slices/product-slice";
import Loader from "./Loader";
import ErrorFetchingDataComponent from "./ErrorFetchingDataComponent";
const Shop = ({ isLogin }) => {
  const { status, filteredProducts } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);
  if (status === "loading") {
    return <Loader></Loader>;
  }
  if (status === "failed") {
    return <ErrorFetchingDataComponent></ErrorFetchingDataComponent>;
  }

  return (
    <div className="container mx-auto px-8 ">
      <h1 className="text-center text-2xl bold sm:text-4xl my-8">
        Featured Collections
      </h1>
      <div>
        <Filter></Filter>
        <ProductList
          products={filteredProducts}
          isLogin={isLogin}
        ></ProductList>
      </div>
    </div>
  );
};

export default Shop;
