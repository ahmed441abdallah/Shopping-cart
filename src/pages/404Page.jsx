import React from "react";
import { Link } from "react-router-dom";
import img_404 from "../imgs/undraw_Page_not_found_re_e9o6.png";

const Page404 = () => {
  return (
    <div className=" w-1/2 h-96 mx-auto mt-32 rounded-md text-center flex flex-col justify-center ">
      <img src={img_404} alt="404_img"></img>
      <p className="mb-2 text-xl lg:text-2xl font-bold">
        You try to access page not found , try again
      </p>

      <div className=" mt-2">
        <Link to="/" className=" bg-black text-white px-4 py-2">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default Page404;
