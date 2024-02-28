import React from "react";

const Features = () => {
  return (
    <section id="feature" className="my-4 shadow-md">
      <h1 className="text-center text-5xl my-8">Features</h1>
      <div className="container mx-auto px-8 flex flex-wrap">
        <div
          className="w-full sm:w-1/2 lg:w-1/4"
          data-aos="fade-up"
          data-aos-duration="3000"
          data-aos-delay="0"
        >
          <div className="flex p-8 gap-4">
            <h2 className=" bg-red-300 rounded-sm text-xl  font-bold w-20 h-16 flex justify-center items-center">
              1
            </h2>
            <div>
              <h3 className="text-xl font-bold">Fast delivery 🚚</h3>
              <p className="text-gray-600 mt-2">
                We prioritize the acceleration of delivery
              </p>
            </div>
          </div>
        </div>
        <div
          className="w-full sm:w-1/2 lg:w-1/4"
          data-aos="fade-up"
          data-aos-duration="3000"
          data-aos-delay="400"
        >
          <div className="flex p-8 gap-4">
            <h2 className="bg-yellow-300 rounded-sm  font-bold text-xl w-20 h-16 flex justify-center items-center">
              2
            </h2>
            <div>
              <h3 className="text-xl font-bold">custom order📦</h3>
              <p className="text-gray-600 mt-2">
                We aim to exceed your expectations
              </p>
            </div>
          </div>
        </div>
        <div
          className="w-full sm:w-1/2 lg:w-1/4"
          data-aos="fade-up"
          data-aos-duration="3000"
          data-aos-delay="600"
        >
          <div className="flex p-8 gap-4">
            <h2 className="bg-green-300 rounded-sm text-xl  w-20 h-16 flex justify-center items-center">
              3
            </h2>
            <div>
              <h3 className="text-xl font-bold">High quality💯</h3>
              <p className="text-gray-600 mt-2">
                Permeates every aspect of our operations
              </p>
            </div>
          </div>
        </div>
        <div
          className="w-full sm:w-1/2 lg:w-1/4"
          data-aos="fade-up"
          data-aos-duration="3000"
          data-aos-delay="800"
        >
          <div className="flex p-8 gap-4">
            <h2 className="bg-green-500 rounded-sm text-xl  w-20 h-16 flex justify-center items-center">
              4
            </h2>
            <div>
              <h3 className="text-xl font-bold ">Coupon saving 🪙</h3>
              <p className="text-gray-600 mt-2">
                Up to 40% for all summer collections
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
