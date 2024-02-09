import React from "react";
import Product from "./Product";

const ProductList = ({ products }) => {
  return (
    <div className="products grid gap-6 lg:grid-cols-3">
      {products.map((product) => (
        <Product key={product.id} product={product}></Product>
      ))}
    </div>
  );
};

export default ProductList;
