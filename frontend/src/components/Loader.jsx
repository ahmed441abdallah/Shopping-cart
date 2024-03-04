import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const Loader = () => {
  const loaderitem = [1, 2, 3, 4];
  return (
    <div className=" container mx-auto p-8">
      <div className=" grid gap-6 lg:grid-cols-4 mt-12">
        {loaderitem.map((item) => (
          <div className=" loading-card" key={item}>
            <Skeleton height={250}></Skeleton>
            <Skeleton height={30} width={300}></Skeleton>
            <Skeleton height={20} count={4} width={300}></Skeleton>
            <Skeleton height={40} width={100}></Skeleton>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loader;
