import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

const BrandSlider = () => {


  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          speed: 1000,
          autoplaySpeed: 3000,
        }
      },

      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          speed: 1000,
          autoplaySpeed: 3000,
        }
      },

    ]
  };

  return (
    <div>

      <article className='w-[75vw] relative left-[3%] mt-[64px] justify-self-center'>
        <Slider {...settings}>

          <div>
            <Image src={'/logo-1.png.webp'} width={150} height={60} alt='img' />
          </div>
          <div>
            <Image src={'/logo-2.png.webp'} width={150} height={60} alt='img' />
          </div>
          <div>
            <Image src={'/logo-3.png.webp'} width={150} height={60} alt='img' />
          </div>
          <div>
            <Image src={'/logo-4.png.webp'} width={150} height={60} alt='img' />
          </div>
          <div>
            <Image src={'/logo-5.png.webp'} width={150} height={60} alt='img' />
          </div>

        </Slider>
      </article>

    </div>
  )
}

export default BrandSlider;
