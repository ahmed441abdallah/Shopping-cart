import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import Cart from "./Cart";
import { useSelector } from "react-redux";

const Header = ({ shouldRender }) => {
  const [isCartOpen, setCartOpen] = useState(false);
  const { cartItems } = useSelector((state) => state.cart);

  const toggleCart = () => {
    setCartOpen(!isCartOpen);
  };
  return (
    <nav className=" flex flex-col shadow-md  py-4 gap-7 justify-around items-center sm:flex-row">
      <Link to="/">
        <h2 className=" text-2xl font-bold uppercase sm:text-4xl flex  items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="mr-3 h-4 w-4"
          >
            <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
          </svg>
          O live
        </h2>
      </Link>
      <ul className="flex gap-4 sm:gap-16">
        <li>
          <Link to="/" className=" text-gray-600 hover:text-gray-800  ">
            Home
          </Link>
        </li>
        <li>
          <a href="#gallery" className=" text-gray-600 hover:text-gray-800">
            Gallery
          </a>
        </li>
        <li>
          <Link to="/wish" className=" text-gray-600 hover:text-gray-800">
            Wishlist
          </Link>
        </li>
        <li>
          <Link to="/shop" className=" text-gray-600 hover:text-gray-800">
            Shop
          </Link>
        </li>
        <li className="">
          <Link
            to="/login"
            className=" text-white text-sm px-2 sm:px-4 rounded-sm py-1 sm:py-2  bg-black hover:text-black hover:bg-white transition-all duration-1000  "
          >
            Get Started
          </Link>
        </li>

        <li>
          <Link to="#" className=" text-gray-600 hover:text-gray-800 relative">
            <FiShoppingCart
              className="text-xl cursor-pointer"
              onClick={toggleCart}
            ></FiShoppingCart>

            {cartItems.length >= 1 && (
              <span className=" absolute top-[-8px] right-6  bg-slate-300 w-5 h-5 text-sm rounded-full flex justify-center items-center">
                {cartItems.length}
              </span>
            )}
          </Link>
        </li>
      </ul>
      {isCartOpen && <Cart onClose={toggleCart} />}
    </nav>
  );
};

export default Header;
