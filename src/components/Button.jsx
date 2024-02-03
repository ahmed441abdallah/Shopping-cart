import React from "react";
import { MdArrowOutward } from "react-icons/md";

const Button = () => {
  return (
    <button className=" uppercase mx-auto px-8 py-3 bg-black flex items-center sm:mx-0 bn1 ">
      Shop Now <MdArrowOutward className=" ml-3" />
    </button>
  );
};

export default Button;
