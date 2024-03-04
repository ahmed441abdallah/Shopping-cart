import React from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import empty_image from "../imgs/undraw_empty_cart_co35.png";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../Redux/slices/cart-slice";
const Cart = ({ onClose }) => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const total = Math.round(
    cartItems.reduce((acc, product) => {
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
        {cartItems.length > 0 ? (
          <>
            {cartItems.map((el) => (
              <div className="text-gray-700 shadow-md p-1 mb-1" key={el._id}>
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
                      onClick={() => dispatch(removeFromCart(el._id))}
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
              <button className="mt-4 bg-gray-600 text-white px-4 py-2 rounded-md">
                Checkout
              </button>
            </Link>
          </>
        ) : (
          <>
            <img src={empty_image} alt="empty_image"></img>
            <h3 className="text-center"> Your Cart is Empty</h3>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
