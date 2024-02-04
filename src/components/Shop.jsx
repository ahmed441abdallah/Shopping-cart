import React from "react";
import Filter from "./Filter";
import Products from "./Products";

const Shop = () => {
  return (
    <div className="container mx-auto px-8 ">
      <h1 className="text-center text-5xl my-8">Browse Products</h1>
      <div>
        <Filter></Filter>
        <Products></Products>
      </div>
    </div>
  );
};

export default Shop;
