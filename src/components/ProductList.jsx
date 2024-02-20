import React from "react";
import Product from "./Product";

const ProductList = ({ products, addToCart, addWishList }) => {
  return (
    <div className="products grid gap-6 lg:grid-cols-4 md:grid-cols-3">
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          addToCart={addToCart}
          addWishList={addWishList}
        ></Product>
      ))}
    </div>
  );
};

export default ProductList;
