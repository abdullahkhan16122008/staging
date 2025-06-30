import React, { useEffect } from "react";
import CountUp from "react-countup";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import BrandSlider from "./BrandSlider";
import AOS from 'aos'
 import 'aos/dist/aos.css';

function Service() {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "gray",
          position: "absolute",
          right: "2%",
          height: "64px",
          top: "34%",
          width: "64px",
          zIndex: "5",
          opacity: "0",
        }}
        onClick={onClick}
      />
    );
  }

  useEffect(()=>{
    AOS.init({once:false})
  },[])

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "gray",
          position: "absolute",
          left: "2%",
          height: "64px",
          width: "64px",
          top: "34%",
          zIndex: "5",
          opacity: "0",
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    fade: true,
  };

  return (
    <div>
      <section className="projects px-[190px] max-xl:px-[32px] py-[64px] my-[32px]">
        <div className="my-[16px]">
          <h2 className="introSubHead text-[#dfa667] max-sm:text-[18px] text-[20px] font-bold">
            Our Specialization
          </h2>
          <div className="ardich articleHead max-sm:text-3xl py-[12px] text-[42px] articleHead font-medium uppercase">
            What we do
          </div>
        </div>

        <article className="servicesSec flex flex-wrap justify-between">

          <div className="w-[20%] mr-[16px] max-xl:w-[40%] pb-[16px] max-md:w-[100%]">
            <img src="/services-1.webp" alt="" />
            <div className="aldrich articleHead py-[12px] max-xl:py-[4px] text-[25px] max-2xl:text-[20px] max-xl:text-[16px] my-[9px] max-xl:my-[4px] articleHead uppercase">
              Interior Design
            </div>
            <p className="text-gray-700 max-2xl:text-[14px] max-xl:text-[10px]">
              As you might expect of a company that began as a high-end
              interiors contractor, we pay strict attention.
            </p>
          </div>

          <div className="w-[20%] mr-[16px] max-xl:w-[40%] pb-[16px] max-md:w-[100%]">
            <img src="/services-2.webp" alt="" />
            <div className="aldrich articleHead py-[12px] max-xl:py-[4px] text-[25px] max-2xl:text-[20px] my-[9px] max-xl:text-[16px] articleHead max-xl:my-[4px] uppercase">
              Office Design
            </div>
            <p className="text-gray-700 max-2xl:text-[14px] max-xl:text-[10px]">
              Our commitment to exceptional quality has never wavered. To day
              ranks as one of the most highly-regarded construction.
            </p>
          </div>

          <div className="w-[20%] mr-[16px] max-xl:w-[40%] pb-[16px] max-md:w-[100%]">
            <img src="/services-3.webp" alt="" />
            <div className="aldrich articleHead py-[12px] max-xl:py-[4px] text-[25px] max-2xl:text-[20px] my-[9px] articleHead max-xl:text-[16px] max-xl:my-[4px] uppercase">
              Home Design
            </div>
            <p className="text-gray-700 max-2xl:text-[14px] max-xl:text-[10px]">
              Interdisciplinary architectural studio with cultural, residential
              and commercial projects built worldwide.
            </p>
          </div>

          <div className="w-[20%] mr-[16px] max-xl:w-[40%] pb-[16px] max-md:w-[100%]">
            <img src="/services-1.webp" alt="" />
            <div className="aldrich articleHead py-[12px] max-xl:py-[4px] text-[25px] max-2xl:text-[20px] my-[9px] articleHead max-xl:text-[16px] max-xl:my-[4px] uppercase">
              Design drawing
            </div>
            <p className="text-gray-700 max-2xl:text-[14px] max-xl:text-[10px]">
              Creating architectural and creative solutions to help people
              realize their vision and make them a reality.
            </p>
          </div>


        </article>
      </section>


      <div className="w-[100%] bg-dash">


        <div className="flex flex-wrap w-[80%] py-[42px] justify-self-center justify-between">
          <div className="w-[20%] flex aldrich mr-[16px] items-center max-xl:w-[40%] pb-[16px] max-md:w-[100%]">
            <CountUp
              start={0}
              end={85}
              duration={2}
              className="introSubHead px-[12px] text-[#dfa667] text-[54px] font-bold"
            ></CountUp>
            <div className="uppercase projectH text-white text-[20px] max-md:text-[16px] font-medium ml-[9px]">
              Project completed
            </div>
          </div>

          <div className="w-[20%] flex aldrich mr-[16px] items-center max-xl:w-[40%] pb-[16px] max-md:w-[100%]">
            <CountUp
              start={0}
              end={127}
              duration={2}
              className="introSubHead px-[12px] text-[#dfa667] text-[54px] font-bold"
            ></CountUp>
            <div className="uppercase projectH text-white text-[20px] font-medium ml-[9px] max-md:text-[16px]">
              Happy Clients
            </div>
          </div>

          <div className="w-[20%] flex aldrich mr-[16px] items-center max-xl:w-[40%] pb-[16px] max-md:w-[100%]">
            <CountUp
              start={0}
              end={36}
              duration={2}
              className="introSubHead px-[12px] text-[#dfa667] text-[54px] font-bold"
            ></CountUp>
            <div className="uppercase projectH text-white text-[20px] font-medium ml-[9px] max-md:text-[16px]">
              Awards Recieved
            </div>
          </div>

          <div className="w-[20%] flex aldrich mr-[16px] items-center max-xl:w-[40%] pb-[16px] max-md:w-[100%]">
            <CountUp
              start={0}
              end={74}
              duration={2}
              className="introSubHead px-[12px] text-[#dfa667] text-[54px] font-bold"
            ></CountUp>
            <div className="uppercase projectH text-white text-[20px] font-medium ml-[9px] max-md:text-[16px]">
              Cups of Coffee
            </div>
          </div>


        </div>

      </div>


      <div></div>
    </div>
  );
}

export default Service;
