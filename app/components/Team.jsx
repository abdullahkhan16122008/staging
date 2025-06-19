import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Team = () => {


  useEffect(() => {

    AOS.init()

  }, [])


  return (
    <div>
      <section className='w-[75vw] my-[64px] justify-self-center align-self-center'>

<div className='w-[100%] my-[128px]'>

        <div className='my-[16px] inline-block max-xl:w-[100%] max-xl:my-[32px]'>
          <h2 className="introSubHead text-[#dfa667] text-[20px] max-md:text-[18px] font-bold">Our Team</h2>
          <div className='ardich articleHead py-[12px] text-[42px] articleHead max-md:text-[27px] max-sm:right-[0%] font-medium uppercase'>Meat Our Team</div>
        </div>

        <button className='text-black heroBtn py-[12px] mt-[24px] max-xl:my-[32px] px-[18px] font-bold text-[20px] float-right max-xl:float-start rounded'>

          <div className='relative top-[-10px]'>

            <div className='absolute heroLine border-1 border-gray-400 w-[35%] justify-self-end top-[0%] right-[-30%]'></div>

            <div className='absolute border-1 heroLine2 border-gray-400 w-[2px] bg-gray-500 h-[30px] translate-y-[0%] left-[127%] right-[0%]'></div>

          </div>
          See Project

          <div className='relative top-[12px] rotate-180'>

            <div className='absolute heroLine border-1 border-gray-400 w-[35%] justify-self-end top-[0%] right-[-30%]'></div>

            <div className='absolute border-1 heroLine2 border-gray-400 w-[2px] bg-gray-700 h-[30px] translate-y-[0%] left-[127%] right-[0%]'></div>

          </div>

        </button>
</div>

        <div className='flex flex-wrap'>


          <div className='team1 hiddenHover h-[470px] mr-[18px] max-sm:w-[100%] w-[370px] max-sm:h-[370px] overflow-hidden'>

            <div className="hiddenDetail w-[100%] h-[100%] bg-visible hidden bg-[#262626]">

              <div className='w-[85%] justify-self-center hidden2'>


              <div className='inline-block' data-aos='fade-left'>
                <h2 className="introSubHead serif mt-[24px] text-[20px] text-white font-bold" data-aos='fade-right'>Shahzaib Khan</h2>
                <h2 className="introSubHead aldrich text-[#dfa667] mb-[24px] text-[12px] font-extrabold" data-aos='fade-right'>CEO & Founder</h2>
              </div><br />

              <hr className='border-gray-700'/>
              <br />

              <p className='text-gray-300 text-[16px] paraH max-sm:text-[12px]'>
              Vestibulum dapibus odio quam, sit amet hendrerit dui ultricies consectetur. Ut viverra porta leo, non tincidunt mauris condimentum eget. Vivamus non turpis elit. Aenean ultricies nisl sit amet.
              </p>

              <div className="socialLinks mt-[40%] flex">
                <a href="#" className='font-bold text-2xl text-white translate-y-[-3px] mr-[20px]'>f</a>
                <a href="#"><img src="/twitter.png" alt="" className='h-[30px] mr-[14px]'/></a>
                <a href="#"><img src="/instagram.png" alt="" className='h-[30px] mr-[14px]'/></a>
              </div>


              </div>

              
            </div>

            <div className='hoverHidden relative top-[80%]'>


              <div className='px-[32px] max-sm:translate-y-[-20px] inline-block self-end'>
                <h2 className="introSubHead serif translate-y-[24px] text-[20px] text-white font-bold" data-aos='fade-right'>Shahzaib Khan</h2>
                <h2 className="introSubHead aldrich text-[#dfa667] translate-y-[24px] text-[12px] font-extrabold" data-aos='fade-right'>CEO & Founder</h2>
              </div>


            </div>
          </div>

          <div className='team2 lady hiddenHover h-[470px] mr-[18px] max-sm:w-[100%] max-sm:h-[370px] max-md:mt-5 w-[370px]  overflow-hidden'>

            <div className="hiddenDetail w-[100%] h-[100%] bg-visible hidden bg-[#262626]">

              <div className='w-[85%] justify-self-center hidden2'>


              <div className='inline-block' data-aos='fade-left'>
                <h2 className="introSubHead serif mt-[24px] text-[20px] text-white font-bold" data-aos='fade-right'>Lina Karsh</h2>
                <h2 className="introSubHead aldrich text-[#dfa667] mb-[24px] text-[12px] font-extrabold" data-aos='fade-right'>CEO & Founder</h2>
              </div><br />

              <hr className='border-gray-700'/>
              <br />

              <p className='text-gray-300 text-[16px] paraH max-sm:text-[12px]'>
              Vestibulum dapibus odio quam, sit amet hendrerit dui ultricies consectetur. Ut viverra porta leo, non tincidunt mauris condimentum eget. Vivamus non turpis elit. Aenean ultricies nisl sit amet.
              </p>

              <div className="socialLinks mt-[40%] flex">
                <a href="#" className='font-bold text-2xl text-white translate-y-[-3px] mr-[20px]'>f</a>
                <a href="#"><img src="/twitter.png" alt="" className='h-[30px] mr-[14px]'/></a>
                <a href="#"><img src="/instagram.png" alt="" className='h-[30px] mr-[14px]'/></a>
              </div>


              </div>

              
            </div>

            <div className='hoverHidden relative top-[80%]'>


              <div className='px-[32px] max-sm:translate-y-[-20px] inline-block self-end'>
                <h2 className="introSubHead serif translate-y-[24px] text-[20px] text-white font-bold" data-aos='fade-right'>Shahzaib Khan</h2>
                <h2 className="introSubHead aldrich text-[#dfa667] translate-y-[24px] text-[12px] font-extrabold" data-aos='fade-right'>CEO & Founder</h2>
              </div>


            </div>
          </div>

          <div className='team3 hiddenHover h-[470px] max-xl:mt-[20px] mr-[18px] max-sm:w-[100%] w-[370px] max-sm:h-[370px] overflow-hidden'>

            <div className="hiddenDetail w-[100%] h-[100%] bg-visible hidden bg-[#262626]">

              <div className='w-[85%] justify-self-center hidden2'>


              <div className='inline-block' data-aos='fade-left'>
                <h2 className="introSubHead serif mt-[24px] text-[20px] text-white font-bold" data-aos='fade-right'>Zain Adeeb</h2>
                <h2 className="introSubHead aldrich text-[#dfa667] mb-[24px] text-[12px] font-extrabold" data-aos='fade-right'>CEO & Founder</h2>
              </div><br />

              <hr className='border-gray-700'/>
              <br />

              <p className='text-gray-300 text-[16px] paraH max-sm:text-[12px]'>
              Vestibulum dapibus odio quam, sit amet hendrerit dui ultricies consectetur. Ut viverra porta leo, non tincidunt mauris condimentum eget. Vivamus non turpis elit. Aenean ultricies nisl sit amet.
              </p>

              <div className="socialLinks mt-[40%] flex">
                <a href="#" className='font-bold text-2xl text-white translate-y-[-3px] mr-[20px]'>f</a>
                <a href="#"><img src="/twitter.png" alt="" className='h-[30px] mr-[14px]'/></a>
                <a href="#"><img src="/instagram.png" alt="" className='h-[30px] mr-[14px]'/></a>
              </div>


              </div>

              
            </div>

            <div className='hoverHidden relative top-[80%]'>


              <div className='px-[32px] inline-block max-sm:translate-y-[-20px] self-end'>
                <h2 className="introSubHead serif translate-y-[24px] text-[20px] text-white font-bold" data-aos='fade-right'>Shahzaib Khan</h2>
                <h2 className="introSubHead aldrich text-[#dfa667] translate-y-[24px] text-[12px] font-extrabold" data-aos='fade-right'>CEO & Founder</h2>
              </div>


            </div>
          </div>


        </div>



      </section>
    </div>
  )
}

export default Team;
