import React from "react";
import landing_img from "../imgs/ACD5_132080167455041830W1SulGrnvC-removebg-preview.png";
import Button from "../components/Button";
import bag2 from "../imgs/lartdetravaillerlecuir-2b.jpg";
import bag3 from "../imgs/backpack_glasses_scarf_188937_1600x1200.jpg";
import Categories from "../components/Categories";
import Divider from "../components/Divider";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Collections from "../components/Collections";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Questions from "../components/Questions";

const Landing = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className="landing bg-gray-100">
        <div className="container  mx-auto px-8 flex justify-center items-center gap-14 hero-img">
          <div
            className="text-center sm:text-left"
            data-aos="zoom-in-right"
            data-aos-duration="1000"
          >
            <h3 className="  uppercase font-bold text-3xl mb-4">summer 2024</h3>
            <h1 className="text-3xl font-bold mb-4 sm:text-7xl ">
              -30% Discount
            </h1>
            <p>We know how large objects will acts,</p>
            <p className=" mb-4">but things on a small scale</p>
            <Button></Button>
          </div>
          <div className="img hidden sm:block">
            <img src={landing_img} alt="bag1"></img>
          </div>
        </div>
      </section>
      <div className="my-8" id="about">
        <div className="container  mx-auto px-8">
          <div className=" flex flex-col gap-4  justify-around items-center sm:flex-row">
            <div
              className=" text-center sm:text-left"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
            >
              <p className=" capitalize text-gray-500 text-2xl">introduce</p>
              <h2 className=" text-3xl my-5 capitalize leading-normal sm:text-4xl">
                From trendy backpacks to<br></br> elegant handbags,
              </h2>
              <Button></Button>
            </div>
            <div>
              <img src={bag2} alt="bag2" width="400px" height="400px"></img>
            </div>
          </div>
          <div className="flex flex-col gap-4  justify-around items-center sm:flex-row">
            <div>
              <img src={bag3} alt="bag3" width="500px"></img>
            </div>
            <div
              className="text-center sm:text-left"
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
            >
              <p className=" capitalize text-gray-500 text-2xl">introduce</p>
              <h2 className=" text-3xl my-5 capitalize leading-normal sm:text-4xl	">
                Elevate your fashion game<br></br> with our latest arrivals,
                <br></br> and experience the perfect <br></br>aesthetics
              </h2>
              <Button></Button>
            </div>
          </div>
        </div>
      </div>
      <Divider></Divider>
      <Categories></Categories>
      <Divider></Divider>
      <Features></Features>
      <Divider></Divider>
      <Questions></Questions>
      <Divider></Divider>

      <Gallery></Gallery>
      <Collections></Collections>
      <Footer></Footer>
    </>
  );
};

export default Landing;
