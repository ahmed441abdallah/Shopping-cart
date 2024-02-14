import React from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { BsCartX } from "react-icons/bs";
import { Link } from "react-router-dom";

const Cart = ({ onClose, cartItem, removeFromCart }) => {
  const total = Math.round(
    cartItem.reduce((acc, product) => {
      return acc + product.price * product.qty;
    }, 0)
  );
  return (
    <div className="fixed top-0 right-0 bg-opacity-50 flex justify-end items-start p-4 z-50">
      <div className="bg-white p-4 rounded-md w-80 shadow-md overflow-y-auto max-h-screen">
        <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800"
          >
            <IoIosCloseCircle className=" w-6 h-6"></IoIosCloseCircle>
          </button>
        </div>
        {cartItem.length > 0 ? (
          <>
            {cartItem.map((el) => (
              <div className="text-gray-700 shadow-md p-1 mb-1" key={el.id}>
                <div className="flex justify-between mb-2 items-center ">
                  <div>
                    <img
                      src={el.image_url}
                      className=" w-20 h-20 mb-2"
                      alt="image1"
                    ></img>
                    <span>{el.title}</span>
                    <h3>{el.qty}items</h3>
                  </div>
                  <div className=" flex flex-col gap-4">
                    <h1>${el.price}</h1>
                    <button
                      onClick={() => removeFromCart(el.id)}
                      className="bg-black cursor-pointer transition duration-1000 ease-in-out text-white rounded-sm p-2 hover:bg-white hover:text-black"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <hr></hr>
            <div className="mt-4 ">
              <p className="text-gray-700 mb-2">Total:</p>
              <h3 className="text-xl font-bold">$ {total}</h3>
            </div>
            <Link to="/shop/checkout">
              {" "}
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">
                Checkout
              </button>
            </Link>
          </>
        ) : (
          <h1 className="flex items-center justify-center mt-2 gap-2 bg-slate-400 p-2 rounded-sm">
            Cart is Empty <BsCartX></BsCartX>
          </h1>
        )}
      </div>
    </div>
  );
};

export default Cart;
