import React, { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import Empty from "../imgs/Empty-amico.png";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishList } from "../Redux/slices/wish-slice";
import { addToCart } from "../Redux/slices/cart-slice";

const Wishlist = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const { wishListItems } = useSelector((state) => state.wishList);

  const totalPages = Math.ceil(wishListItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = wishListItems.slice(startIndex, endIndex);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPagination = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li key={i}>
          <a
            href="#/"
            onClick={() => handlePageChange(i)}
            className={`flex items-center justify-center px-3 h-8 leading-tight ${
              currentPage === i
                ? "text-blue-600 bg-blue-50 border border-blue-300"
                : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
            }`}
          >
            {i}
          </a>
        </li>
      );
    }
    return pageNumbers;
  };
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl mb-4">Wishlist 😊</h1>
      {wishListItems.length >= 1 ? (
        currentItems.map((el) => (
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
                onClick={() => dispatch(removeFromWishList(el._id))}
                className="absolute top-[-30px] right-0 text-2xl cursor-pointer text-red-600"
              />
              <button
                className="flex items-center gap-2 rounded bg-opacity-60 hover:bg-opacity-100 bg-black text-white px-4 py-4 text-xs"
                onClick={() => dispatch(addToCart(el))}
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
      {wishListItems.length >= 1 && (
        <nav aria-label="Page navigation example">
          <ul className="flex items-center justify-center -space-x-px h-8 text-sm">
            <li>
              <a
                href="#/"
                onClick={() => handlePageChange(currentPage - 1)}
                className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700"
              >
                <span className="sr-only">Previous</span>
                <svg
                  className="w-2.5 h-2.5 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
              </a>
            </li>
            {renderPagination()}
            <li>
              <a
                href="#/"
                onClick={() => handlePageChange(currentPage + 1)}
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
              >
                <span className="sr-only">Next</span>
                <svg
                  className="w-2.5 h-2.5 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Wishlist;
