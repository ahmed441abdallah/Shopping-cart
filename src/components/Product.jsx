import React, { useState } from "react";
import Modal from "react-modal";
import { RiCloseCircleFill } from "react-icons/ri";
import { RiShoppingBasketLine } from "react-icons/ri";

const Product = ({ product }) => {
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
          className="rounded-t-lg"
          src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
          alt="product"
        />
        <a onClick={() => openModal(product)}>
          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
        </a>
      </div>
      <div className="p-6">
        <h5 className="mb-2 text-xl font-medium leading-tight">
          {product.title}
        </h5>
        <p className="mb-4 text-base">{product.description}</p>
        <button
          type="button"
          className=" flex mx-auto sm:mx-0 items-center gap-2 rounded bg-black text-white  px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal  shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <RiShoppingBasketLine className=" text-2xl"></RiShoppingBasketLine>
          Add to cart
        </button>
      </div>
      {
        <Modal isOpen={productDetails}>
          <div className="flex">
            <div className=" w-1/2 m-auto text-center">
              <img
                src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                alt="products"
                className=" rounded-xl"
              ></img>
              <h1 className=" text-2xl font-bold mt-4">
                {productDetails.title}
              </h1>
              <p> {productDetails.description}</p>
              <h3 className=" text-red-600"> {productDetails.price} $</h3>
            </div>
            <RiCloseCircleFill
              className=" text-2xl cursor-pointer"
              onClick={closeModal}
            ></RiCloseCircleFill>
          </div>
        </Modal>
      }
    </div>
  );
};

export default Product;
