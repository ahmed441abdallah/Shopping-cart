import React from "react";
import Filter from "./Filter";
import ProductList from "./ProductList";
const Shop = ({
  handleSizeChange,
  size,
  handleOrderChange,
  order,
  products,
  addToCart,
}) => {
  return (
    <div className="container mx-auto px-8 ">
      <h1 className="text-center text-5xl my-8">Browse Products</h1>
      <div>
        <Filter
          handleSizeChange={handleSizeChange}
          size={size}
          products={products}
          handleOrderChange={handleOrderChange}
          order={order}
        ></Filter>
        <ProductList products={products} addToCart={addToCart}></ProductList>
      </div>
    </div>
  );
};

export default Shop;
