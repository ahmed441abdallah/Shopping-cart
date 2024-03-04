import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
const Button = () => {
  return (
    <button className=" uppercase mx-auto px-8 py-3 bg-black flex items-center sm:mx-0 bn1 ">
      <Link to="/shop">Shop Now</Link> <MdArrowOutward className=" ml-3" />
    </button>
  );
};

export default Button;
