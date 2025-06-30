"use client"
import React, { useEffect } from 'react'
import AOS from 'aos';
import './style.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, [])

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "gray", zIndex: "4", padding: "47px",transform: "translateX(-32px)", marginTop: "-37px", opacity: '0'}}
        onClick={onClick}
      >
        </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "gray", zIndex: "4", padding: "47px", opacity: "0",transform: "translateX(20px)", opacity: "0", position: 'absolute', left: "-1%", top: '46%'}}
        onClick={onClick}
      />
    );
  }


  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },


        {
          breakpoint: 720,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
    ]
  };
  
  return (
    <div>

      <section className="projects justify-center content-center text-center px-[24px] max-sm:px-[0px]">
        <h2 className="introSubHead text-[#dfa667] font-bold max-sm:px-[5px]">WHO ARE WE</h2>
        <div className='ardich articleHead py-[12px] text-[42px] max-sm:text-[35px] articleHead max-sm:px-[5px] max-sm:leading-[30px] font-medium uppercase'>Latest Projects</div>
        
        <div className="projectSlider w-[100%] px-[16px] max-sm:-px-[2px] h-[50%] overflow-hidden py-[16px]">

          <div className="slider mx-[16px] max-sm:mx-[0px] justify-evenly">

            <button className="next text-5xl max-sm:scale-[0.70] px-[12px] py-[9px] mr-[77px] max-sm:mr-[30px] absolute bg-white cursor-pointer translate-y-[250px] max-sm:translate-y-[150px] right-[0%] z-3 font-bold">&rarr;</button>
            <button className="prev text-5xl px-[12px] max-sm:scale-[0.70] py-[9px] ml-[77px] max-sm:ml-[30px] absolute bg-white cursor-pointer translate-y-[250px] max-sm:translate-y-[150px] left-[0%] z-3 font-bold">&larr;</button>


          <Slider {...settings}>

            <div className="img imgWidth overflow-hidden">
              <div className="hoverDiv transition-all duration-300 w-[80%] bg-white justify-self-center">
              <div className='py-[16px]'>
                <h2 className="introSubHead text-[#dfa667] font-bold" data-aos='fade-left'>Interiors</h2>
                <div className='ardich uppercase articleHead py-[12px] sliderHead text-[20px] articleHead font-medium uppercase'>Lower River Street Astoria</div>

              </div>
            </div>
            </div>

            <div className="img2 imgWidth overflow-hidden">
            <div className="hoverDiv transition-all duration-300 w-[80%] bg-white justify-self-center">
              <div className='py-[16px]'>
                <h2 className="introSubHead text-[#dfa667] font-bold" data-aos='fade-left'>Interiors</h2>
                <div className='ardich uppercase articleHead py-[12px] sliderHead text-[20px] articleHead font-medium uppercase'>Lower River Street Astoria</div>

              </div>
            </div>
            </div>


            <div className="img3 imgWidth overflow-hidden">
            <div className="hoverDiv transition-all duration-300 w-[80%] bg-white justify-self-center">
              <div className='py-[16px]'>
                <h2 className="introSubHead text-[#dfa667] font-bold" data-aos='fade-left'>Interiors</h2>
                <div className='ardich uppercase articleHead py-[12px] sliderHead text-[20px] articleHead font-medium uppercase'>Lower River Street Astoria</div>

              </div>
            </div>
            </div>

            <div className="img4 imgWidth overflow-hidden">
            <div className="hoverDiv transition-all duration-300 w-[80%] bg-white justify-self-center">
              <div className='py-[16px]'>
                <h2 className="introSubHead text-[#dfa667] font-bold" data-aos='fade-left'>Interiors</h2>
                <div className='ardich uppercase articleHead py-[12px] sliderHead text-[20px] articleHead font-medium uppercase'>Lower River Street Astoria</div>

              </div>
            </div>
            </div>

            <div className="img5 imgWidth overflow-hidden">
            <div className="hoverDiv transition-all duration-300 w-[80%] bg-white justify-self-center">
              <div className='py-[16px]'>
                <h2 className="introSubHead text-[#dfa667] font-bold" data-aos='fade-left'>Interiors</h2>
                <div className='ardich uppercase articleHead py-[12px] sliderHead text-[20px] articleHead font-medium uppercase'>Lower River Street Astoria</div>

              </div>
            </div>
            </div>

            </Slider>

          </div>
        </div>
      </section>


    </div>
  )
}

export default Projects;
