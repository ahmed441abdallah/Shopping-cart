import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../imgs/cat1.jpg";
import img2 from "../imgs/cat2.jpg";
import img3 from "../imgs/cat3.jpg";
import img4 from "../imgs/cat4.jpg";
import img5 from "../imgs/cat5.jpg";
import img6 from "../imgs/cat6.jpg";
import img7 from "../imgs/cat7.jpg";
import img8 from "../imgs/cat8.jpg";

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
              <img src={el} alt="1" width="500px"></img>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Categories;
