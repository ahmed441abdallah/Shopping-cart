import React from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import Empty from "../imgs/Empty-amico.png";

const Wishlist = ({ wishListItem, addToCart, removeFromWhishList }) => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl mb-4">Wishlist 😊</h1>
      {wishListItem.length >= 1 ? (
        wishListItem.map((el) => (
          <div
            className="wishlist flex justify-between items-center mb-4 shadow-lg p-2"
            key={el.id}
          >
            <div className="flex gap-4">
              <img
                src={el.image_url}
                alt="ay 7aga"
                className="w-24 h-24 rounded-lg"
              />
              <div className="whish_text">
                <h2>{el.title}</h2>
                <p className="text-gray-400 font-normal">{el.description}</p>
                <p>${el.price}</p>
              </div>
            </div>
            <div className="relative">
              <IoMdCloseCircleOutline
                onClick={() => removeFromWhishList(el.id)}
                className="absolute top-[-30px] right-0 text-2xl cursor-pointer text-red-600"
              />
              <button
                className="flex items-center gap-2 rounded bg-opacity-60 hover:bg-opacity-100 bg-black text-white px-4 py-4 text-xs"
                onClick={() => addToCart(el)}
              >
                Add <FaCartShopping />
              </button>
            </div>
          </div>
        ))
      ) : (
        <div>
          <img
            src={Empty}
            alt="Empty_img"
            className=" lg:w-96 lg:h-96 mx-auto"
          ></img>
          <p className=" text-2xl text-center">Wishlist is empty 😶</p>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
