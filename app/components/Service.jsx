import React from 'react'
import CountUp from 'react-countup';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import BrandSlider from './BrandSlider';

function Service() {

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "gray", position: "absolute", right: "1%", height: "64px", top: '34%', width: "64px", zIndex: "5", opacity: "0" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "gray", position: "absolute", left: "1%", height: "64px", width: "64px", top: '34%', zIndex: "5", opacity: "0" }}
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
      <section className="projects px-[190px] max-xl:px-[90px] max-sm:px-[32px] py-[64px] my-[32px]">
        <div className='my-[16px]'>
          <h2 className="introSubHead text-[#dfa667] text-[20px] max-md:text-[18px] font-bold">Our Specialization</h2>
          <div className='ardich articleHead py-[12px] text-[42px] articleHead max-sm:text-[24px] font-medium uppercase'>What we do</div>
        </div>

        <article className="servicesSec flex flex-wrap justify-between">

          <div className='w-[20%] mr-[16px] max-xl:w-[40%] pb-[16px] max-md:w-[100%]'>
            <img src="/services-1.webp" alt="" />
            <div className='aldrich articleHead py-[12px] text-[25px] max-2xl:text-[20px] my-[9px] articleHead uppercase'>Interior Design</div>
            <p className='text-gray-700 max-2xl:text-[14px]'>As you might expect of a company that began as a high-end interiors contractor, we pay strict attention.</p>

          </div>



          <div className='w-[20%] mr-[16px] max-xl:w-[40%] pb-[16px] max-md:w-[100%]'>
            <img src="/services-2.webp" alt="" />
            <div className='aldrich articleHead py-[12px] text-[25px] max-2xl:text-[20px] my-[9px] articleHead uppercase'>Office Design</div>
            <p className='text-gray-700 max-2xl:text-[14px]'>Our commitment to exceptional quality has never wavered. To day ranks as one of the most highly-regarded construction.</p>

          </div>

          <div className='w-[20%] mr-[16px] max-xl:w-[40%] pb-[16px] max-md:w-[100%]'>
            <img src="/services-3.webp" alt="" />
            <div className='aldrich articleHead py-[12px] text-[25px] max-2xl:text-[20px] my-[9px] articleHead uppercase'>Home Design</div>
            <p className='text-gray-700 max-2xl:text-[14px]'>Interdisciplinary architectural studio with cultural, residential and commercial projects built worldwide.</p>

          </div>

          <div className='w-[20%] mr-[16px] max-xl:w-[40%] pb-[16px] max-md:w-[100%]'>
            <img src="/services-1.webp" alt="" />
            <div className='aldrich articleHead py-[12px] text-[25px] max-2xl:text-[20px] my-[9px] articleHead uppercase'>Design drawing</div>
            <p className='text-gray-700 max-2xl:text-[14px]'>Creating architectural and creative solutions to help people realize their vision and make them a reality.</p>

          </div>

          <hr className="border-gray-300 w-[100%] my-[32px] mb-[47px]" />


          <div className='flex flex-wrap justify-between'>


            <div className='w-[20%] flex aldrich mr-[16px] items-center max-xl:w-[40%] pb-[16px] max-md:w-[100%]'>
              <CountUp start={0} end={85} duration={2} className='introSubHead px-[12px] text-[#dfa667] text-[54px] font-bold'></CountUp>
              <div className='uppercase projectH text-[20px] font-medium ml-[9px]'>
                Project completed
              </div>
            </div>


            <div className='w-[20%] flex aldrich mr-[16px] items-center max-xl:w-[40%] pb-[16px] max-md:w-[100%]'>
              <CountUp start={0} end={127} duration={2} className='introSubHead px-[12px] text-[#dfa667] text-[54px] font-bold'></CountUp>
              <div className='uppercase projectH text-[20px] font-medium ml-[9px]'>
                Happy Clients
              </div>
            </div>


            <div className='w-[20%] flex aldrich mr-[16px] items-center max-xl:w-[40%] pb-[16px] max-md:w-[100%]'>
              <CountUp start={0} end={36} duration={2} className='introSubHead px-[12px] text-[#dfa667] text-[54px] font-bold'></CountUp>
              <div className='uppercase projectH text-[20px] font-medium ml-[9px]'>
                Awards Recieved
              </div>
            </div>


            <div className='w-[20%] flex aldrich mr-[16px] items-center max-xl:w-[40%] pb-[16px] max-md:w-[100%]'>
              <CountUp start={0} end={74} duration={2} className='introSubHead px-[12px] text-[#dfa667] text-[54px] font-bold'></CountUp>
              <div className='uppercase projectH text-[20px] font-medium ml-[9px]'>
                Cups of Coffee
              </div>
            </div>



          </div>





        </article>

      </section>

      <div>
        <section className="bg-gray-100 justify-center items-center max-xl:hidden py-16 px-8 min-h-[300px]">

          <div className='my-[16px]'>
            <h2 className="introSubHead text-[#dfa667] text-[20px] text-center font-bold">Testimonials</h2>
            <div className='ardich articleHead py-[12px] text-[42px] text-center max-md:text-[32px] articleHead font-medium uppercase'>What your clients say</div>
          </div>

          <div className='flex justify-center items-center text-center'>


            <button className='text-white next heroBtn py-[12px] px-[18px] font-bold text-[20px] rounded absolute max-xl:right-[17%] right-[15%] max-xl:translate-y-[-80px] max-xl:right-[19%] max-md:translate-y-[-100px] translate-y-[-60px] z-4 max-xl:hidden'>
              <div className='relative top-[-10px]'>

                <div className='absolute heroLine border-1 border-gray-60 border-gray-400 w-[35%] justify-self-end top-[0%] right-[-30%]'></div>

                <div className='absolute border-1 heroLine2 border-gray-60 border-gray-400 w-[2px] bg-gray-700 h-[30px] translate-y-[0%] left-[127%] right-[0%]'></div>

              </div>
              <div className='text-4xl my-[-6px] text-black'>
                &rarr;
              </div>

              <div className='relative top-[12px] rotate-180'>

                <div className='absolute heroLine border-1 border-gray-60 border-gray-400 w-[35%] justify-self-end top-[0%] right-[-30%]'></div>

                <div className='absolute border-1 heroLine2 border-gray-60 border-gray-400 w-[2px] bg-gray-700 h-[30px] translate-y-[0%] left-[127%] right-[0%]'></div>

              </div>

            </button>


            <button className='text-white prev heroBtn py-[12px] px-[18px] font-bold text-[20px] rounded absolute left-[15%] translate-y-[-60px] max-xl:left-[17%] max-xl:translate-y-[-80px] z-4 max-xl:hidden'>
              <div className='relative top-[-10px]'>

                <div className='absolute heroLine border-1 border-gray-60 border-gray-400 w-[35%] justify-self-end top-[0%] right-[-30%]'></div>

                <div className='absolute border-1 heroLine2 border-gray-60 border-gray-400 w-[2px] bg-gray-700 h-[30px] translate-y-[0%] left-[127%] right-[0%]'></div>

              </div>
              <div className='text-4xl text-black my-[-6px]'>
                &larr;
              </div>

              <div className='relative top-[12px] rotate-180'>

                <div className='absolute heroLine border-1 border-gray-60 border-gray-400 w-[35%] justify-self-end top-[0%] right-[-30%]'></div>

                <div className='absolute border-1 heroLine2 border-gray-60 border-gray-400 w-[2px] bg-gray-700 h-[30px] translate-y-[0%] left-[127%] right-[0%]'></div>

              </div>

            </button>


            <div className="w-[95%] pt-[90px] px-[150px] text-center">
              <Slider {...settings}>
                <div className="text-gray-800">

                  <div className='bg-white py-[128px] max-xl:mt-[32px] scale-x-[1.05] px-[128px] max-xl:scale-x-[1] max-xl:px-[52px]'>
                  <h3 className="text-[24px] max-xl:text-[18px] max-md:text-[16px] max-xl:leading-[26px] leading-[37px]">
                    "1. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi expedita sequi voluptatum sed sunt harum architecto quos? Eum impedit magnam dolorum error, mollitia quas voluptatum consectetur vel, tenetur hic est, nihil at sunt iste! "
                  </h3>
                  </div>

                  <div className='justify-self-center mb-[32px] mt-[0px] self-center w-[50vw]'>

                    <div className='flex-wrap relative justify-self-center flex pb-[64px]'>



                      <div className='team1 radius-full w-[100px] h-[100px] max-xl:w-[60px] max-xl:h-[60px]'>
                      </div>
                      <div className='team2 radius-full w-[100px] h-[100px] max-xl:w-[60px] max-xl:h-[60px]'>
                      </div>
                      <div className='team3 radius-full w-[100px] border-5 border-gray-100 content-end scale-[1.9] max-xl:scale-[1.4] mx-[64px] max-xl:mx-[24px] h-[100px]'>
                        <div className='relative top-[15%]'>
                          <h2 className="introSubHead aldrich translate-y-[24px] text-[10px] text-center font-extrabold">Renee Calhoun</h2>
                          <h2 className="introSubHead aldrich text-[#dfa667] translate-y-[24px] text-[7px] text-center font-extrabold">CEO Woolley</h2>
                        </div>

                      </div>
                      <div className='team1 radius-full w-[100px] h-[100px] max-xl:w-[60px] max-xl:h-[60px]'>
                      </div>
                      <div className='team2 radius-full w-[100px] h-[100px] max-xl:w-[60px] max-xl:h-[60px]'>
                      </div>



                    </div>
                  </div><br />


                </div>

                <div className="text-gray-800">
                <div className='bg-white py-[128px] scale-x-[1.05] max-xl:mt-[32px] px-[128px]'>
                  <h3 className="lineH text-[24px]">
                    "2. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi expedita sequi voluptatum sed sunt harum architecto quos? Eum impedit magnam dolorum error, mollitia quas voluptatum consectetur vel, tenetur hic est, nihil at sunt iste! "
                  </h3>
                  </div>
                  <div className='justify-self-center mb-[32px] mt-[0px] self-center w-[50vw]'>

                    <div className='flex-wrap relative left-[11%] flex pb-[64px]'>



                      <div className='team2 radius-full w-[100px] h-[100px]'>
                      </div>
                      <div className='team3 radius-full w-[100px] h-[100px]'>
                      </div>
                      <div className='team1 radius-full w-[100px] border-5 border-gray-100 content-end scale-[1.9] mx-[64px] h-[100px]'>
                        <div className='relative top-[15%]'>
                          <h2 className="introSubHead aldrich translate-y-[24px] text-[10px] text-center font-extrabold">Shahzaib Khan</h2>
                          <h2 className="introSubHead aldrich text-[#dfa667] translate-y-[24px] text-[7px] text-center font-extrabold">Founder</h2>
                        </div>

                      </div>
                      <div className='team2 radius-full w-[100px] h-[100px]'>
                      </div>
                      <div className='team1 radius-full w-[100px] h-[100px]'>
                      </div>



                    </div>
                  </div><br />



                </div>

                <div className="text-gray-800">

                <div className='bg-white py-[128px] scale-x-[1.05] max-xl:mt-[32px] px-[128px]'>
                  <h3 className="lineH text-[24px]">
                    "3. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi expedita sequi voluptatum sed sunt harum architecto quos? Eum impedit magnam dolorum error, mollitia quas voluptatum consectetur vel, tenetur hic est, nihil at sunt iste! "
                  </h3>
                  </div>

                  <div className='justify-self-center mb-[32px] mt-[0px] self-center w-[50vw]'>

                    <div className='flex-wrap relative left-[11%] flex pb-[64px]'>



                      <div className='team3 radius-full w-[100px] h-[100px]'>
                      </div>
                      <div className='team1 radius-full w-[100px] h-[100px]'>
                      </div>
                      <div className='team2 radius-full w-[100px] border-5 border-gray-100 content-end scale-[1.9] mx-[64px] h-[100px]'>
                        <div className='relative top-[15%]'>
                          <h2 className="introSubHead aldrich translate-y-[24px] text-[10px] text-center font-extrabold">Alizah</h2>
                          <h2 className="introSubHead aldrich text-[#dfa667] translate-y-[24px] text-[7px] text-center font-extrabold">Manager</h2>
                        </div>

                      </div>
                      <div className='team1 radius-full w-[100px] h-[100px]'>
                      </div>
                      <div className='team2 radius-full w-[100px] h-[100px]'>
                      </div>



                    </div>
                  </div><br />



                </div>
              </Slider>



            </div>
          </div>
          <BrandSlider />
        </section>
      </div>


    </div>
  )
}

export default Service;
