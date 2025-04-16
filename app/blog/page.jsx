"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Loader from "../components/Loader";
import { useState, useEffect } from "react";
import Blogs from "../components/Blogs";
import BlogAbout from "../components/blogAbout";
import Link from "next/link";

const Blog = () => {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    let timeout = setTimeout(() => {
      setLoader(false);
    }, 3000);
  });

  return (
    <div>
      {loader ? <Loader /> : ""}

      <div className="background bgProjects">
        <div className="dim">
          <Navbar />
          <section className="hero h-[40vh] justify-center text-center">
            <div className="h-[100%] w-[100%] justify-center text-center content-center align-center">
              <div className="relative">
                <div className="pb-[32px] text-white text-[52px] aldrich w-[50%] relative justify-self-center">
                  ABOUT US
                </div>
                <div className="text-xl text-white">
                  Home ~ <span className="text-color">Blogs</span>
                </div>

                <div className="animateMe heroButton"></div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <main className="py-[128px]">
        <section className="Bmain flex flex-wrap w-[75%] justify-self-center">
          <section className="leftSide w-[60%]">


            <Blogs
              blogsTitle1="Target and Amazon Shopping List for Home Stagers"
              imgUrl="/blog-1.webp"
            />

            <BlogAbout />


            <Blogs
              blogsTitle1="6 Ideas for Team Building & Employee Appreciation for Home Stagers"
              imgUrl="/blog-2.webp"
            />


            <hr className="my-9 border-gray-200" />


            <Blogs
              blogsTitle1="How to Find the Best Price Structure for Your Home Staging Services"
              imgUrl="/blog-2.webp"
            />


            <hr className="my-9 border-gray-200" />


            <div>
              <ul className="flex gap-5">
                <li className="font-bold border-2 border-transparent py-[10px] px-[18px] transition-all duration-300 hover:border-[#dfa667]">1</li>
                <li className="font-bold border-2 border-transparent py-[10px] px-[18px] transition-all duration-300 hover:border-[#dfa667]">2</li>
                <li className="font-bold border-2 border-transparent py-[10px] px-[18px] transition-all duration-300 hover:border-[#dfa667]">3</li>
                <li className="font-extrabold border-2 border-transparent py-[10px] px-[18px] transition-all duration-300 hover:border-[#dfa667] font-width">{`>>`}</li>
              </ul>
            </div>



          </section>



          <section className="rightSide text-center px-[60px] justify-center w-[40%] justify-items-center">
            <article className="teamSign">
              <div className="w-[128px] h-[128px] justify-self-center my-4 rounded-full" style={{ backgroundImage: 'url(/team-3.jpg.webp)', backgroundSize: '100% 100%' }}>
              </div>
              <div className="paragraph my-4 text-gray-800 text-[17px]">Quis ipsum suspendisse ultrices gravid. Risus commodo viverra maece accums lacus vel facilisis.</div>
              <Image src={'/signature.webp'} height={220} width={220} alt="img" className="justify-self-center" />
            </article>

            <div className="searchBar flex w-full my-[22px]">
              <input type="search" name="search" id="" className="border-b-1 w-[100%] border-gray-400 py-[9px] px-[12px]" placeholder="Search.." />
              <button>
              <Image src={'/plane.png'} width={50} height={50} alt="img" className="ml-[-18px] mb-[12px]" />
              </button>
            </div>


            <div className="categories justify-self-start my-10">
              <h1 className="uppercase aldrich text-[22px]">Categories</h1>
              <ul className="my-5 text-start leading-[45px]">
                <li>
                  <Link href='#' className='text-[16px] text-gray-400'>Work Space</Link>
                </li>

                <li>
                  <Link href='#' className='text-[16px] text-gray-400'>Office Building</Link>
                </li>

                <li>
                  <Link href='#' className='text-[16px] text-gray-400'>HomeStay</Link>
                </li>

                <li>
                  <Link href='#' className='text-[16px] text-gray-400'>Making</Link>
                </li>

                <li>
                  <Link href='#' className='text-[16px] text-gray-400'>Process</Link>
                </li>
              </ul>
            </div>


            <div className="categories justify-self-start my-10">
              <h1 className="uppercase aldrich text-[22px]">Feature News</h1>
              <ul className="my-5 text-start leading-[45px]">


                <li>
                  <Link href='#' className='flex items-center content-center'>
                    <div className="newsLeft">
                      <Image src={'/latest-1.webp'} width={100} height={250} alt="img" className="scale-y-[1.7] scale-x-[1.1]" />
                    </div>
                    <div className="block mx-[16px]">
                      <div className="text-gray-400 font-bold mb-3">
                        20 DECEMBER 2025
                      </div>
                      <h1 className="font-bold leading-[24px] translate-y-[-16px]">Grace Millane's mother tells killer she died 'terrified</h1>
                    </div>
                  </Link>
                </li>

                <li>
                  <Link href='#' className='flex items-center content-center'>
                    <div className="newsLeft">
                      <Image src={'/latest-2.webp'} width={100} height={250} alt="img" className="scale-y-[1.7] scale-x-[1.1]" />
                    </div>
                    <div className="block mx-[16px]">
                      <div className="text-gray-400 font-bold mb-3">
                        20 DECEMBER 2025
                      </div>
                      <h1 className="font-bold leading-[24px] translate-y-[-16px]">A 'gregarious' gap-year student who dreamed.</h1>
                    </div>
                  </Link>
                </li>

                <li>
                  <Link href='#' className='flex items-center content-center'>
                    <div className="newsLeft">
                      <Image src={'/latest-3.webp'} width={100} height={250} alt="img" className="scale-y-[1.7] scale-x-[1.1]" />
                    </div>
                    <div className="block mx-[16px]">
                      <div className="text-gray-400 font-bold mb-3">
                        20 DECEMBER 2025
                      </div>
                      <h1 className="font-bold leading-[24px] translate-y-[-16px]">A 'gregarious' gap-year student who dreamed.</h1>
                    </div>
                  </Link>
                </li>


              </ul>
            </div>



            <div className="categories justify-self-start my-10">
              <h1 className="uppercase aldrich text-start text-[22px]">Tags</h1>
              <ul className="my-5 list-disc relative left-[5%] text-gray-400 flex gap-[25px] leading-[4px] w-[90%] flex-wrap text-start font-bold">


                <li>
                  <Link href='#' className='text-[14px] font-bold text-gray-400'>
                    Branding
                  </Link>
                </li>

                <li>
                  <Link href='#' className='text-[14px] font-bold text-gray-400'>
                    Planning
                  </Link>
                </li>

                <li>
                  <Link href='#' className='text-[14px] font-bold text-gray-400'>
                    Business
                  </Link>
                </li>

                <li>
                  <Link href='#' className='text-[14px] font-bold text-gray-400'>
                    Travel
                  </Link>
                </li>

                <li>
                  <Link href='#' className='text-[14px] font-bold text-gray-400'>
                    Ideas
                  </Link>
                </li>

                <li>
                  <Link href='#' className='text-[14px] font-bold text-gray-400'>
                    Planes
                  </Link>
                </li>

                <li>
                  <Link href='#' className='text-[14px] font-bold text-gray-400'>
                    Designs
                  </Link>
                </li>

                <li>
                  <Link href='#' className='text-[14px] font-bold text-gray-400'>
                    Latest
                  </Link>
                </li>

                <li>
                  <Link href='#' className='text-[14px] font-bold text-gray-400'>
                    New Designs
                  </Link>
                </li>



              </ul>
            </div>


            <div className="followUs justify-self-start mt-[64px] my-[32px]">

              <h1 className="uppercase aldrich text-start text-2xl">Follow Us</h1>

              <div className="socialLinks flex my-5">
                <ul className="flex items-center gap-[16px]">
                  <li>
                <a href="#" className='font-bold text-2xl text-gray-400 translate-y-[-3px] mr-[20px]'>f</a>
                  </li>
                  <div className="w-[32px] h-[1px] relative left-[-3%] bg-gray-400"></div>
                  <li>
                <a href="#"><img src="/twitter.png" alt="" className='h-[30px] brightness-60 mr-[12px]' /></a>
                  </li>
                  <div className="w-[32px] h-[1px] relative left-[-3%] bg-gray-400"></div>
                  <li>
                <a href="#"><img src="/instagram.png" alt="" className='h-[30px] brightness-60 mr-[12px]' /></a>
                  </li>
                  <div className="w-[32px] h-[1px] relative left-[-3%] bg-gray-400"></div>
                  <li>
                <a href="#"><img src="/linkedin.png" alt="" className='h-[30px] brightness-60' /></a>
                  </li>
                  </ul>
              </div>


            </div>


            <div className="newsShelter mt-[16px] w-[100%]">

            <h1 className="uppercase aldrich text-start text-[22px]">Newsshelter</h1>

            <div className="searchBar flex w-[100%] my-[12px]">
              <input type="search" name="search" id="" className="border-b-1 w-[100%] border-gray-400 py-[9px] px-[12px]" placeholder="Search.." />
              <button>
              <Image src={'/plane.png'} width={50} height={50} alt="img" className="ml-[-18px] mb-[12px]" />
              </button>
            </div>
            
            </div>




          </section>




        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
