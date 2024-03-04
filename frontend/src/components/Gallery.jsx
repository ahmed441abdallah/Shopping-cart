import React from "react";
import person1 from "../imgs/tourist_traveler_backpack_179602_1600x1200.jpg";
import person2 from "../imgs/man_backpack_style_212499_1600x1200.jpg";
import img1 from "../imgs/man_backpack_snow_198112_1600x1200.jpg";
import img2 from "../imgs/flipflops_briefcase_beach_164904_1600x1200.jpg";
import bag1 from "../imgs/backpack_hand_black_160585_1600x1200.jpg";
import bag2 from "../imgs/backpack_pockets_hand_168804_300x255.jpg";

const Gallery = () => {
  return (
    <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-24" id="gallery">
      <h1 className=" text-center text-5xl  my-4">Gallery</h1>
      <div class="-m-1 flex flex-wrap md:-m-2">
        <div class="flex w-1/2 flex-wrap">
          <div class="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              class="block h-full w-full rounded-lg object-cover object-center transition-transform duration-400 transform-gpu hover:scale-105"
              src={img1}
            />
          </div>
          <div class="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              class="block h-full w-full rounded-lg object-cover object-center transition-transform duration-400 transform-gpu hover:scale-105"
              src={img2}
            />
          </div>
          <div class="w-full p-1 md:p-2">
            <img
              alt="gallery"
              class="block h-full w-full rounded-lg object-cover object-center transition-transform duration-400 transform-gpu hover:scale-105"
              src={person2}
            />
          </div>
        </div>
        <div class="flex w-1/2 flex-wrap">
          <div class="w-full p-1 md:p-2">
            <img
              alt="gallery"
              class="block h-full w-full rounded-lg object-cover object-center transition-transform duration-400 transform-gpu hover:scale-105"
              src={person1}
            />
          </div>
          <div class="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              class="block h-full w-full rounded-lg object-cover object-center transition-transform duration-400 transform-gpu hover:scale-105"
              src={bag1}
            />
          </div>
          <div class="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              class="block h-full w-full rounded-lg object-cover object-center transition-transform duration-400 transform-gpu hover:scale-105"
              src={bag2}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
