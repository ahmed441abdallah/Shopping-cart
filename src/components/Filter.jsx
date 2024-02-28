import React, { useState, useEffect, useRef } from "react";
import { FaArrowCircleDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setSize } from "../Redux/slices/product-slice";
import { setOrder } from "../Redux/slices/product-slice";
// Update the path

const Filtration = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();
  const { filteredProducts } = useSelector((state) => state.product);
  const { selectedSize } = useSelector((state) => state.product);
  const { order } = useSelector((state) => state.product);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("mousedown", closeDropdown);

    return () => {
      window.removeEventListener("mousedown", closeDropdown);
    };
  }, []);

  const handleSizeChange = (event) => {
    dispatch(setSize(event.target.value));
  };
  const handleOrderChange = (event) => {
    dispatch(setOrder(event.target.value));
  };

  return (
    <div className="relative flex justify-center mb-4 ">
      <button
        onClick={toggleDropdown}
        className="px-16 py-2 text-white bg-gray-500 rounded-lg flex items-center gap-4 focus:outline-none"
      >
        Filter <FaArrowCircleDown />
      </button>

      {isDropdownOpen && (
        <div
          ref={dropdownRef}
          className="absolute z-10 mt-12  w-64 bg-white rounded-md shadow-lg "
        >
          <div className="py-2 px-2 flex flex-col items-center ">
            <h1 className=" my-4 text-1xl bg-slate-300 p-2 rounded-md">
              Number of Products {filteredProducts.length}
            </h1>
            <div className="fil-size flex flex-col">
              <span className="text-1xl mb-2 bg-slate-300 p-2 rounded-md">
                Filter By size :
              </span>
              <select
                className="px-4 py-2"
                onChange={handleSizeChange}
                value={selectedSize}
              >
                <option value="ALL">ALL</option>
                <option value="SMALL">SMALL</option>
                <option value="MEDIUM">MEDIUM</option>
                <option value="LARGE">LARGE</option>
              </select>
            </div>
            <div className="fil-Order flex flex-col">
              <span className="my-2 text-1xl mb-2 bg-slate-300 p-2 rounded-md">
                Filter By Order :
              </span>
              <select
                className=" px-4 py-2"
                onChange={handleOrderChange}
                value={order}
              >
                <option value="Latest">Latest</option>
                <option value="Highest">Highest</option>
                <option value="Lowest">Lowest</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filtration;
