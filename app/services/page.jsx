"use client"
import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Loader from "../components/Loader";
import { useState, useEffect } from "react";
import Service from '../components/Services';


const page = () => {

    
       const [loader, setLoader] = useState(true)
        useEffect(() => {
            let timeout = setTimeout(() =>{
                setLoader(false)
            }, 1500)}
          )
    


  return (
    <div>

        
{loader?<Loader />:""}


<div className="background bgProjects">
  <div className="dim">
    <Navbar />
    <section className="hero h-[40vh] justify-center text-center">
      <div className="h-[100%] w-[100%] justify-center text-center content-center align-center">
        <div className="relative">
          <div className="pb-[32px] text-white text-[52px] max-xl:text-2xl aldrich w-[50%] relative justify-self-center">
            OUR SERVICES
          </div><br />
          <div className="text-xl text-white">Home ~ <span className="text-color">Project</span></div>

          <div className="animateMe heroButton"></div>
        </div>
      </div>
    </section>
  </div>
</div>

<main>
    <Service />

    <section className="clients my-[64px]">
        <div className='w-[80%] justify-self-center justify-between content-center flex flex-wrap'>

    <div className="my-[16px] block">
          <h2 className="introSubHead uppercase max-sm:text-[18px] text-[#dfa667] text-[20px] font-bold">
            Branding
          </h2>
          <div className="ardich articleHead py-[12px] text-[42px] max-sm:text-2xl articleHead font-medium uppercase">
            Our Clients
          </div>

    </div>
    <div className='w-[70%] flex flex-wrap'>
      <Image src={'/logo-1.png.webp'} width={190} height={70} className='mx-[32px] my-[24px]' alt='brand' /> 
      <Image src={'/logo-2.png.webp'} width={190} height={70} className='mx-[32px] my-[24px]' alt='brand' /> 
      <Image src={'/logo-3.png.webp'} width={190} height={70} className='mx-[32px] my-[24px]' alt='brand' /> 
      <Image src={'/logo-4.png.webp'} width={190} height={70} className='mx-[32px] my-[24px]' alt='brand' /> 
      <Image src={'/logo-5.png.webp'} width={190} height={70} className='mx-[32px] my-[24px]' alt='brand' /> 
      <Image src={'/logo-2.png.webp'} width={190} height={70} className='mx-[32px] my-[24px]' alt='brand' /> 
    </div>

        </div>
    </section>
</main>

<Footer />
      
    </div>
  )
}

export default page
