import React, { useState } from "react";
import ProductModal from "./ProductModal";
const Product = ({ product, addToCart }) => {
  const [productDetails, setProductDetails] = useState("");
  const openModal = (product) => {
    setProductDetails(product);
  };
  const closeModal = () => {
    setProductDetails(false);
  };
  return (
    <div className=" text-center sm:text-left mb-4 rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
      <div
        className="relative overflow-hidden bg-cover bg-no-repeat"
        data-te-ripple-init
        data-te-ripple-color="light"
      >
        <img
          className="rounded-t-lg mx-auto sm:mx-0 w-full h-80 object-contain"
          src={product.image_url}
          alt="product"
        />
        <button onClick={() => openModal(product)}>
          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
        </button>
      </div>
      <div className="p-6">
        <h5 className="mb-2 text-xl font-medium leading-tight">
          {product.title}
        </h5>
        <p className="mb-4 text-base">{product.description}</p>
        <h1 className=" m-2 text-gray-500"> ${product.price}</h1>
        <button
          type="button"
          className=" mx-auto sm:mx-0 items-center rounded bg-black text-white  px-6 pb-2 pt-2.5 text-xs font-medium capitalize leading-normal ]"
          data-te-ripple-init
          data-te-ripple-color="light"
          onClick={() => addToCart(product)}
        >
          Add to cart
        </button>
      </div>
      {
        <ProductModal
          productDetails={productDetails}
          closeModal={closeModal}
        ></ProductModal>
      }
    </div>
  );
};

export default Product;
