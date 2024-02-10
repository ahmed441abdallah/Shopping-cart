import React from "react";
import Product from "./Product";

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="products grid gap-6 lg:grid-cols-3">
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          addToCart={addToCart}
        ></Product>
      ))}
    </div>
  );
};

export default ProductList;
