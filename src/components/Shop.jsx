import React, { useState } from "react";
import Filter from "./Filter";
import ProductList from "./ProductList";
import productsData from "../data.json";

const Shop = () => {
  const [products, setProducts] = useState(productsData);

  return (
    <div className="container mx-auto px-8 ">
      <h1 className="text-center text-5xl my-8">Browse Products</h1>
      <div>
        <Filter></Filter>
        <ProductList products={products}></ProductList>
      </div>
    </div>
  );
};

export default Shop;
