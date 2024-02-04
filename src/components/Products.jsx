import React from "react";
import { useState } from "react";
import productsData from "../data.json";
const Products = () => {
  const [products, setProducts] = useState(productsData);
  return (
    <div className="products flex flex-wrap">
      {products.map((product) => (
        <div className=" w-1/2 sm:w-1/4 ">
          <h1>Title {product.title}</h1>
          <p> id:{product.id}</p>
          <img src={product.image_url} alt="img"></img>
        </div>
      ))}
    </div>
  );
};

export default Products;
