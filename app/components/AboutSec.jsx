import React from 'react'
import './style.css'

const AboutSec = () => {
  return (
    <div>

        <section className="aboutSec aboutBg">
            <div className="dimBg py-[128px] px-[366px] max-xl:px-[90px] max-md:px-[45px] w-[100%] h-[100%] text-center">
            <h2 className="introSubHead serif text-[#dfa667] mb-[24px] text-[18px] font-bold uppercase" data-aos='fade-right'>Why choose us?</h2>
            <h2 className="introSubHead aldrich text-white mb-[24px] text-[45px] max-xl:text-[32px] aboutH font-bold" data-aos='fade-right'>Our Ability To Deliver Outstanding Results For Our Clients Starts With Our Team Of Smart.</h2>

            <button className='bg-[#db984c] hover:bg-[#dfa667] text-white font-bold text-xl w-[190px] h-[64px] rounded'>Contact Us</button>

            </div>
        </section>
      
    </div>
  )
}

export default AboutSec;
