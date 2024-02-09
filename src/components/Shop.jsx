import React, { useState } from "react";
import Filter from "./Filter";
import ProductList from "./ProductList";
import productsData from "../data.json";
const Shop = () => {
  const [products, setProducts] = useState(productsData);
  const [size, setSize] = useState("");
  const [order, setOrder] = useState("");
  const handleSizeChange = (e) => {
    setSize(e.target.value);
    if (e.target.value === "ALL") {
      setProducts(productsData);
    } else {
      const filteredProducts = productsData.filter((product) =>
        product.sizes.includes(e.target.value)
      );
      setProducts([...filteredProducts]); // Make a copy of the filtered array
    }
  };
  const handleOrderChange = (e) => {
    setOrder(e.target.value);
    const filteredProducts = productsData.sort(function (a, b) {
      if (e.target.value === "Lowest") {
        return a.price - b.price;
      } else if (e.target.value === "Highest") {
        return b.price - a.price;
      } else {
        return a.id < b.id ? 1 : -1;
      }
    });
    setProducts([...filteredProducts]);
  };
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
        <ProductList products={products}></ProductList>
      </div>
    </div>
  );
};

export default Shop;
