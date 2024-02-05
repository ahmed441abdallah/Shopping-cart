import React from "react";
import Filter from "./Filter";
import ProductList from "./ProductList";

const Shop = () => {
  return (
    <div className="container mx-auto px-8 ">
      <h1 className="text-center text-5xl my-8">Browse Products</h1>
      <div>
        <Filter></Filter>
        <ProductList></ProductList>
      </div>
    </div>
  );
};

export default Shop;
