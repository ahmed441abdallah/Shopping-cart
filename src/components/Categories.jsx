import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../imgs/Surface Pro 8 – 1.png";
import img2 from "../imgs/Surface Pro 8 – 2.png";
import img3 from "../imgs/Surface Pro 8 – 3.png";
import img4 from "../imgs/Surface Pro 8 – 4.png";
import img5 from "../imgs/Surface Pro 8 – 5.png";
import img6 from "../imgs/Surface Pro 8 – 6.png";
import img7 from "../imgs/Surface Pro 8 – 7.png";
import img8 from "../imgs/Surface Pro 8 – 8.png";

const imgs = [img1, img2, img6, img4, img5, img3, img7, img8];
const Categories = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div id="Categories">
      <div className=" container  mx-auto px-8">
        <h1 className=" text-center text-5xl  my-8">Categories</h1>
        <Slider {...settings}>
          {imgs.map((el) => (
            <div>
              <img src={el} alt="1" width="600px" height="600px"></img>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Categories;
