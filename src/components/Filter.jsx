import React, { useState, useEffect, useRef } from "react";
import { FaArrowCircleDown } from "react-icons/fa";

const CenteredDropdown = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

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

  return (
    <div className="relative flex justify-center mb-4 ">
      <button
        onClick={toggleDropdown}
        className="px-4 py-2 text-white bg-gray-800 rounded-lg flex items-center gap-4 focus:outline-none"
      >
        Filter <FaArrowCircleDown />
      </button>

      {isDropdownOpen && (
        <div
          ref={dropdownRef}
          className="absolute z-10 mt-12 w-48 bg-white rounded-md shadow-lg "
        >
          <div className="py-1">
            <a
              href="#/"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-300"
            >
              Item 1
            </a>
            <a
              href="#/"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-300"
            >
              Item 2
            </a>
            <a
              href="#/"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-300"
            >
              Item 3
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default CenteredDropdown;
