import React from "react";
import Modal from "react-modal";
import { RiCloseCircleFill } from "react-icons/ri";
const ProductModal = ({ productDetails, closeModal }) => {
  return (
    <Modal
      isOpen={productDetails}
      onRequestClose={closeModal}
      className="bg-gray-200 p-8"
    >
      <div className="flex">
        <div className=" w-1/2 m-auto text-center ">
          <img
            src={productDetails.image_url}
            alt="products"
            className="rounded-xl sm:w-96 sm:h-96 mx-auto"
          ></img>
          <h1 className=" text-xl sm:text-2xl sm:font-bold mt-4">
            {productDetails.title}
          </h1>
          <p> {productDetails.description}</p>
          <h3 className=" text-red-600"> ${productDetails.price} </h3>
        </div>
        <RiCloseCircleFill
          className=" text-2xl cursor-pointer"
          onClick={closeModal}
        ></RiCloseCircleFill>
      </div>
    </Modal>
  );
};

export default ProductModal;
