'use client'
import React from 'react'
import { useEffect } from 'react';
import Navbar from './Navbar'
import AOS from 'aos';
import Article1 from './Article1';

const Hero = () => {

  useEffect(() => {
    let text = document.querySelector('.textChanging')
    let number = document.querySelector('.number')
    let number1 = document.querySelector('.number1')
    let fillColor = document.querySelector('.fillColor')
    let next = document.querySelector('.next')
    let prev = document.querySelector('.prev')

    setTimeout(() => {
      text.innerHTML = `<div class='animateMe'>Quality is not only our standard.</div>`
      number.innerHTML = `01`
      number1.innerHTML = `01`
      fillColor.style.width = '50%'
      prev.addEventListener('click', ()=>{
      text.innerHTML = `<div class='animateMe'>Quality is not only our standard 2nd.</div>`
      })

    }, 0)

    setInterval(() => {
      text.innerHTML = `<div class='animateMe'>Quality is not only our standard 2nd.</div>`
      number.innerHTML = `02`
      number1.innerHTML = `02`
      fillColor.style.width = '100%'
      next.addEventListener('click', ()=>{
        text.innerHTML = `<div class='animateMe'>Quality is not only our standard.</div>`
        })  
    }, 3000)
    setInterval(() => {
      text.innerHTML = `<div class='animateMe'>Quality is not only our standard.</div>`
      number.innerHTML = `01`
      number1.innerHTML = `01`
      fillColor.style.width = '50%'
      prev.addEventListener('click', ()=>{
        text.innerHTML = `<div class='animateMe'>Quality is not only our standard 2nd.</div>`
        })
  
    }, 6000)

    if (text == `<div class='animateMe'>Quality is not only our standard 2nd.</div>`) {
      prev.addEventListener('click', ()=>{
        text.innerHTML = `<div class='animateMe'>Quality is not only our standard.</div>`
        })
        next.addEventListener('click', ()=>{
          text.innerHTML = `<div class='animateMe'>Quality is not only our standard.</div>`
          })
      
    }
    else if(text == `<div class='animateMe'>Quality is not only our standard.</div>`){
      prev.addEventListener('click', ()=>{
        text.innerHTML = `<div class='animateMe'>Quality is not only our standard 2nd.</div>`
        })
        next.addEventListener('click', ()=>{
          text.innerHTML = `<div class='animateMe'>Quality is not only our standard 2nd.</div>`
          })
    }
  }, []);


  return (
    <>

          <section className="hero h-[105vh] justify-center text-center">
            
            <div className='h-[100%] w-[100%] justify-center text-center content-center align-center'>

            <button className='text-white next heroBtn py-[12px] px-[18px] font-bold text-[20px] rounded relative right-[-40%] z-3 top-[10%]'>
              <div className='relative top-[-10px]'>

                <div className='absolute heroLine border-1 border-gray-60 border-gray-400 w-[35%] justify-self-end top-[0%] right-[-30%]'></div>

                <div className='absolute border-1 heroLine2 border-gray-60 border-gray-400 w-[2px] bg-gray-700 h-[30px] translate-y-[0%] left-[127%] right-[0%]'></div>

              </div>
              <div className='text-4xl my-[-6px]'>
                &rarr;
              </div>

              <div className='relative top-[12px] rotate-180'>

                <div className='absolute heroLine border-1 border-gray-60 border-gray-400 w-[35%] justify-self-end top-[0%] right-[-30%]'></div>

                <div className='absolute border-1 heroLine2 border-gray-60 border-gray-400 w-[2px] bg-gray-700 h-[30px] translate-y-[0%] left-[127%] right-[0%]'></div>

              </div>

            </button>


            <button className='text-white prev heroBtn py-[12px] px-[18px] font-bold text-[20px] rounded relative left-[-40%] z-3 top-[10%]'>
              <div className='relative top-[-10px]'>

                <div className='absolute heroLine border-1 border-gray-60 border-gray-400 w-[35%] justify-self-end top-[0%] right-[-30%]'></div>

                <div className='absolute border-1 heroLine2 border-gray-60 border-gray-400 w-[2px] bg-gray-700 h-[30px] translate-y-[0%] left-[127%] right-[0%]'></div>

              </div>
              <div className='text-4xl my-[-6px]'>
                &larr;
              </div>

              <div className='relative top-[12px] rotate-180'>

                <div className='absolute heroLine border-1 border-gray-60 border-gray-400 w-[35%] justify-self-end top-[0%] right-[-30%]'></div>

                <div className='absolute border-1 heroLine2 border-gray-60 border-gray-400 w-[2px] bg-gray-700 h-[30px] translate-y-[0%] left-[127%] right-[0%]'></div>

              </div>

            </button>

            <div className='relative'>
              <div className="textChanging transition-all duration-500 pb-[45px] text-white text-[72px] max-xl:text-[50px] aldrich w-[50%] max-md:text-[35px] relative justify-self-center"></div>

              <div className='animateMe heroButton'>

              <button className='text-white heroBtn py-[12px] px-[18px] font-bold text-[20px] rounded'>

                <div className='relative top-[-10px]'>

                  <div className='absolute heroLine border-1 border-gray-400 w-[35%] justify-self-end top-[0%] right-[-30%]'></div>

                  <div className='absolute border-1 heroLine2 border-gray-400 w-[2px] bg-gray-700 h-[30px] translate-y-[0%] left-[127%] right-[0%]'></div>

                </div>
                See Project

                <div className='relative top-[12px] rotate-180'>

                  <div className='absolute heroLine border-1 border-gray-400 w-[35%] justify-self-end top-[0%] right-[-30%]'></div>

                  <div className='absolute border-1 heroLine2 border-gray-400 w-[2px] bg-gray-700 h-[30px] translate-y-[0%] left-[127%] right-[0%]'></div>

                </div>

              </button>

              </div>

            </div>
              
            </div>



            <aside className="heroFooter relative top-[-15%] justify-self-center w-[80%] flex justify-between">


              <div className="counter text-white font-bold text-[18px] flex relative">
                <div className="number" id='number'></div>
                <div className="counterLine w-[110px] bg-gray-500 self-center mx-[16px] h-[2px]"><div className="fillColor bg-white transition-all duration-500 h-[2px] w-[50%]"></div></div>
                <div className="number1" id='number1'></div>
              </div>


              <div className="descoverMore"><a href="#" className='text-gray-400'>Discover More</a></div>

              <div className="socialLinks flex">
                <a href="#" className='font-bold text-2xl text-white translate-y-[-3px] mr-[20px]'>f</a>
                <a href="#"><img src="/twitter.png" alt="" className='h-[30px] mr-[12px]'/></a>
                <a href="#"><img src="/instagram.png" alt="" className='h-[30px] mr-[12px]'/></a>
                <a href="#"><img src="/linkedin.png" alt="" className='h-[30px]'/></a>
              </div>


            </aside>

          </section>

    </>
  )
}

export default Hero;
