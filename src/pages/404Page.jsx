import React from "react";
import { TbError404 } from "react-icons/tb";
import { Link } from "react-router-dom";
import { IoCloseCircleOutline } from "react-icons/io5";

const Page404 = () => {
  return (
    <div className="card bg-gray-300 w-1/2 h-96 mx-auto mt-20 rounded-md text-center flex flex-col justify-center ">
      <IoCloseCircleOutline className=" mx-auto text-2xl"></IoCloseCircleOutline>
      <TbError404 className=" text-6xl mx-auto mb-2"></TbError404>
      <p className=" mb-2 text-xl">Page Not Found.</p>
      <p className="mb-2">
        You are to access to get page not found , try again
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
