import React from "react";
import { useState } from "react";
import productsData from "../data.json";
import Product from "./Product";

const ProductList = () => {
  const [products, setProducts] = useState(productsData);
  return (
    <div className="products grid gap-6 lg:grid-cols-3">
      {products.map((product) => (
        <Product key={Product.id} product={product}></Product>
      ))}
    </div>
  );
};

export default ProductList;
