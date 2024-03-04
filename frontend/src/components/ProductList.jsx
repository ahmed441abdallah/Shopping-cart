import React, { useState } from "react";
import Product from "./Product";

const ProductList = ({ products, isLogin }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = products.slice(startIndex, endIndex);

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
    <>
      <div className="products grid gap-6 lg:grid-cols-4 md:grid-cols-3">
        {currentItems.map((product) => (
          <Product
            key={product._id}
            product={product}
            isLogin={isLogin}
          ></Product>
        ))}
      </div>
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
    </>
  );
};

export default ProductList;
