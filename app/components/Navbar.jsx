"use client"
import Link from 'next/link'
import React, {useEffect, useRef} from 'react'
import AOS from 'aos'
import "aos/dist/aos.css"
import { useState } from "react";
import Loader from './Loader';
import Script from 'next/script';
import Head from 'next/head';


const Navbar = () => {
  useEffect(() => {
    AOS.init({
      duration: 300,
    });
  }, []);

  const menuRef = useRef(null);
  const sideBarRef = useRef(null);
  const burgerRef = useRef(null);
  const navRef = useRef(null);

  const [navOpen, setNavOpen] = useState(false);

  const handleClickOutside = (event) => {
    if (
      navRef.current &&
      !navRef.current.contains(event.target) &&
      burgerRef.current &&
      !burgerRef.current.contains(event.target)
    ) {
      setNavOpen(false);
    }
  };


  const [loader, setLoader] = useState(true)
  useEffect(() => {
      let timeout = setTimeout(() =>{
          setLoader(false)
      }, 3300)}
    )
  return (
    <div>
    {/* {loader?<Loader />:""} */}
        <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a
      href="/"
      className="flex title-font font-bold items-center text-white mb-4 md:mb-0"
    >
      <span className="ml-3 text-5xl relative left-[30%] max-xl:text-4xl max-xl:left-[0%] max-md:text-3xl logo">Staging</span>
    </a>
    <nav className="md:ml-auto md:mr-auto relative left-[3%] max-xl:hidden flex flex-wrap items-center text-base justify-center">
      <Link href={'/'} className="mr-[35px] text-[18px] link text-white font-bold" onClick={loader => setLoader(true)}>Home<div className="line"></div></Link>
      <Link href={'/projects'} className="mr-[35px] text-[18px] link text-white font-bold" onClick={loader => setLoader(true)}>Projects<div className="line"></div></Link>
      <Link href={'/about'} className="mr-[35px] text-[18px] link text-white font-bold" onClick={loader => setLoader(true)}>About<div className="line"></div></Link>
      <div className="mr-[35px] pages text-[18px] link text-white font-bold"><Link href={'/'} className="pages text-[18px] link text-white font-bold">Pages</Link><div className="line"></div><div className='absolute pagesHidden hidden py-[9px] w-[128px] translate-x-[-35px] bg-white h-[128px]' data-aos='fade-top'>
        <ul className='text-black text-[13px] z-4 px-[12px] text-left font-medium'>
          <li className='mb-2'><Link href={"/"} onClick={loader => setLoader(true)}>
          Project Details
          </Link>
          </li>
          <li className='mb-2'><Link href={"/about"} onClick={loader => setLoader(true)}>
          About
          </Link></li>
          <li className='mb-2'>
          <Link href={"/services"} onClick={loader => setLoader(true)}>
          Services
          </Link>
          </li>
          <li className='mb-2'><Link href={"/blogdetails"} onClick={loader => setLoader(true)}>
          Blog Details
          </Link></li>
          </ul></div></div>
      <Link href={'/blog'} className="mr-[35px] text-[18px] link text-white font-bold" onClick={loader => setLoader(true)}>Blog<div className="line"></div></Link>
      <Link href={'/contact'} className="text-white text-[18px] link font-bold" onClick={loader => setLoader(true)}>Contact<div className="line"></div></Link>
    </nav>
    <div className="items-center w-[20%] py-1 px-3 mt-4 md:mt-0 max-xl:hidden">
      <div className='text-gray-300 text-[14px]'>Call us for any questions</div>
      <div className="phoneNumber text-[#dfa667] text-2xl font-medium relative max-xl:text-[20px] left-[-5%]">+01 123 456 789</div>
    


    </div>
    <div>
      <button className="absolute right-10 top-5 burger group xl:hidden max-sm:scale-[0.7] max-sm:right-3" ref={burgerRef} onClick={() => {
    if (navRef.current) {
      let a = navRef.current.style.left = '0%';
    }
  }}>
        <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
          <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-500 origin-center overflow-hidden group-focus:-rotate-180">
            <div className="bg-white h-[2px] w-7 transform transition-all duration-500 group-focus:rotate-45 -translate-x-1"></div>
            <div className="bg-white h-[2px] w-7 rounded transform transition-all duration-500 "></div>
            <div className="bg-white h-[2px] w-7 transform transition-all duration-500 group-focus:-rotate-45 -translate-x-1"></div>
          </div>
        </div>
      </button>

      <nav className='fixed navigation just w-[50%] top-[0%] max-md:w-[50%] overflow-hidden bottom-[0%] transition-all duration-300 z-777 left-[-32%] xl:hidden max-xl:block bg-light' style={{left: navOpen ? '0%' : '-50%',}} ref={navRef}>
      <button className="absolute right-10 top-5 burger group xl:hidden" ref={burgerRef} onClick={() => {
    if (navRef.current) {
      let a = navRef.current.style.left = '-50%';
    }
  }}>
        <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
          <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-500 origin-center overflow-hidden group-focus:-rotate-180">
            <div className='font-bold self-center text-white'>X</div>
          </div>
        </div>
      </button>

      <span className="ml-3 relative text-white top-10 left-6 max-md:text-2xl font-bold text-5xl logo">Staging</span>

      <div className='my-9 px-[16px] py-[42px] increase overflow-hidden duration-300 relative top-10 bg-nav w-[80%] h-[60px] justify-self-center' ref={sideBarRef} id='sideNavBar'>
        <button className='flex font-bold px-[16px] text-[18px] menu rounded-xl absolute top-3 right-2 text-white items-center bg-back' ref={menuRef} onClick={() => {
    if (sideBarRef.current) {
    const currentHeight = sideBarRef.current.style.height;
    if (currentHeight === '520px') {
      sideBarRef.current.style.height = '60px';
    } else {
      sideBarRef.current.style.height = '520px';
    }
  }
  }}>Menu
        <div className="relative flex items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all ring-opacity-30 duration-200 shadow-md">
          <div className="flex flex-col justify-between w-[20px] h-[14px] transform transition-all duration-500 origin-center overflow-hidden group-focus:-rotate-180">
            <div className="bg-white h-[2px] w-6 transform transition-all duration-500 group-focus:rotate-45 -translate-x-1"></div>
            <div className="bg-white h-[2px] w-6 rounded transform transition-all duration-500 "></div>
            <div className="bg-white h-[2px] w-6 transform transition-all duration-500 group-focus:-rotate-45 -translate-x-1"></div>
          </div>
        </div>
        </button>
        <ul className='relative top-10'>
          <li className='hover:bg-gray-300 my-1 px-[12px] py-[4px] rounded-sm hover:text-black linkHover'><Link href={'/'} onClick={loader => setLoader(true)} className='hoverLink w-[100%] hover:text-black' >Home</Link></li>
          <li className='hover:bg-gray-300 my-1 px-[12px] py-[4px] rounded-sm hover:text-black linkHover'><Link href={'/projects'} onClick={loader => setLoader(true)} className='hoverLink w-[100%] hover:text-black' >Projects</Link></li>
          <li className='hover:bg-gray-300 my-1 px-[12px] py-[4px] rounded-sm hover:text-black linkHover'><Link href={'/about'} onClick={loader => setLoader(true)} className='hoverLink w-[100%] hover:text-black' >About</Link></li>
          <li className='hover:bg-gray-300 pages my-1 px-[12px] py-[4px] relative rounded-sm hover:text-black linkHover'><div className='w-[100%] pages overflow-hidden sideNavBar' style={{height: '210px'}} ><button className='hoverLink pages relative text-left hover:text-black'>Pages</button>
            <div className='mt-2 relative left-2 flex flex-col'>
            <Link href={'/'} className='hoverLink my-1 px-[12px] py-[4px] rounded-sm'>Project Details</Link>
            <Link href={'/about'} onClick={loader => setLoader(true)} className='hoverLink my-1 px-[12px] py-[4px] rounded-sm'>About</Link>
            <Link href={'/services'} onClick={loader => setLoader(true)} className='hoverLink my-1 px-[12px] py-[4px] rounded-sm'>Services</Link>
            <Link href={'/blogdetails'} onClick={loader => setLoader(true)} className='hoverLink my-1 px-[12px] py-[4px] rounded-sm'>Blog Details</Link>
            </div>
            </div>
            </li>
          <li className='hover:bg-gray-300 my-1 px-[12px] py-[4px] rounded-sm hover:text-black linkHover'><Link href={'/blog'} onClick={loader => setLoader(true)} className='hoverLink w-[100%] hover:text-black' >Blog</Link></li>
          <li className='hover:bg-gray-300 my-1 px-[12px] py-[4px] rounded-sm hover:text-black linkHover'><Link href={'/'} onClick={loader => setLoader(true)} className='hoverLink w-[100%] hover:text-black' >Contact</Link></li>
        </ul>

      </div>
        <div className="items-center justify-self-center w-[80%] py-1 px-3 mt-5 md:mt-0">
      <div className='text-gray-300 text-[16px]'>Call us for any questions</div>
      <div className="phoneNumber text-[#dfa667] text-2xl font-medium relative left-[-5%]">+01 123 456 789</div>
    </div>



      </nav>
    </div>
  </div>
</header>
    </div>
  )
}

export default Navbar
