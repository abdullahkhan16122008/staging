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
                <div className="pb-[32px] max-xl:text-[28px] max-xl:text-2xl text-white text-[52px] aldrich w-[50%] relative justify-self-center">
                  Blog Details
                </div>
                <div className="text-xl max-xl:text-[14px] text-white">
                  Home ~ <span className="text-color max-xl:text-[14px]">Blogs</span>
                </div>

                <div className="animateMe heroButton"></div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <main className="py-[128px]">
        <section className="Bmain w-[65%] justify-self-center">
          <section className="leftSide">
            <div className="blogs">
              <div className="blog">
                <ul className="flex text-gray-400 max-md:text-[12px] gap-[50px]">
                  <li>DECEMBER 20, 2019</li>
                  <li className="list-disc">BY JOHN DOE</li>
                  <li className="list-disc">PLANNING</li>
                </ul>
                <h1 className="text-5xl leading-[45px] max-md:text-2xl my-7 font-bold">
                  Target and Amazon Shopping List for Home Stagers
                </h1>
                <Image
                  src={`/project-p3.webp`}
                  height={550}
                  width={1000}
                  alt="blog"
                  className=""
                />
                <p className="mt-9 mb-4 w-[100%] max-md:text-[14px] px-[39px] text-gray-600">
                Forget Ebay and other forms of advertising for your property that costs you hard earned money. Properties have ready several locations around the world to take your free listings for any luxury property you have. <br /><br />
                Each location web site is purpose built so every Search Engine will pick up new listings within minutes. This way your customers only have to type in keywords relating to their search for a luxury home and the Search Engine will show the Invest Asset web site applicable to their location they are looking for. <br /><br />
                Most real estate companies are way too busy with selling their client’s properties to put any effort forth to their web site. Hence, making it difficult for web surfers to find their listings.
                </p><br />
                <BlogAbout />
                <p className="mt-9 mb-4 w-[100%] px-[39px] max-md:text-[14px] text-gray-600">
                Now times have changed and we at Investment Assets Properties are thinking of the customer before the business. If you have a property in a location not listed at Investment Assets Properties. Don’t worry. A quick email to us will ensure your location is built to accommodate your listing. <br /><br />
                Selling your luxury home, condominium or property should not be a painstaking event. It should be easy and stress free and it should be able to be advertised on a global scale for free. Investment Assets Properties can and will do this for you in a hassle free way.
                </p>
                <div className="flex flex-wrap justify-evenly">

                    <div className="my-[32px]">
                    <Image src={'/bi-1.webp'} width={300} height={420} alt="my-[64px] h-[420px]" />
                    </div>
                    <div className="my-[32px]">
                    <Image src={'/bi-2.webp'} width={300} height={420} alt="my-[64px] h-[420px]" />
                    </div>
                    <div className="my-[32px]">
                    <Image src={'/bi-3.webp'} width={300} height={420} alt="my-[64px] h-[420px]" />
                    </div>

              </div>
              <div>
                
          <section className="flex flex-wrap text-center px-[60px] justify-between w-[100%] justify-items-center">
            <div className="flex">Tags: &nbsp; <ul className="flex text-gray-300 gap-[32px] ml-[16px] list-disc">
                <li className="uppercase list-none">Branding</li>
                <li className="uppercase">Office</li>
                <li className="uppercase">Creative</li>
                </ul>
                </div>
            


              <div className="socialLinks flex">
                <ul className="flex items-center gap-[16px]">
                  <li>
                    <a
                      href="#"
                      className="font-bold text-2xl text-gray-400 translate-y-[-3px] mr-[20px]"
                    >
                      f
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="/twitter.png"
                        alt=""
                        className="h-[30px] brightness-60 mr-[12px]"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="/instagram.png"
                        alt=""
                        className="h-[30px] brightness-60 mr-[12px]"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="/linkedin.png"
                        alt=""
                        className="h-[30px] brightness-60"
                      />
                    </a>
                  </li>
                </ul>
              </div>

          </section>

          <section className="customer content-center bg-gray-50 py-[20px] px-[32px] my-9">
            <div className="my-9 flex flex-wrap justify-between">
            <div className="custLeft radius-full h-[150px] w-[150px]" style={{backgroundImage: 'url(/team-2.jpg.webp)',backgroundRepeat: 'none', backgroundSize: '100% 100%'}}></div>
            <div className="block w-[80%]">
              <div className="heading font-bold text-[20px] max-md:text-[18px] my-5">Dana Vaughn</div>
              <p className="text-xl text-gray-500 max-md:text-[16px]">Now times have changed and we at Investment Assets Properties are thinking of the customer before the business. If you have a property in a location not listed at Investment Assets Properties.</p>
            </div>
            </div>
          </section>

          <section className="flex flex-wrap justify-between">

            <div className="flex items-center">
              <div><Image src={'/latest-2.webp'} width={90} height={100} alt="prev" className="h-[90px]" /></div>
                <div className="block items-center mx-4">
              <div className="text-gray-400 flex items-center">

                <div className="mx-4 font-bold text-xl max-xl:text-[14px]">&larr;</div> <div>
                Previous Blog
                </div>
                </div>
                <div className="mx-4 font-bold text-gray-800 text-[22px] max-md:text-[14px] max-xl:text-[16px]">Popular Uses Of The Internet</div>
                </div>
            </div>

            <div className="flex flex-row-reverse items-center relative left-[0%]">
              <div><Image src={'/latest-1.webp'} width={90} height={100} alt="prev" className="h-[90px]" /></div>
                <div className="block items-center mx-4">
              <div className="text-gray-400 flex items-center">

                <div className="mx-4 font-bold text-xl max-xl:text-[14px]">&larr;</div> <div>
                Previous Blog
                </div>
                </div>
                <div className="mx-4 font-bold text-gray-800 text-[22px] max-md:text-[14px] max-xl:text-[16px]">Popular Uses Of The Internet</div>
                </div>
            </div>

          </section>

              </div>
            </div>
            </div>
          </section>

          <form action="" method="post" className="w-[100%]">
            <div className="my-7 flex">
              <input type="text" name="name" placeholder="Name" id="" className="placeholder:text-gray-400 w-[32%] border-1 border-gray-300 outline-none px-[16px] py-[12px]" />
              <input type="email" name="email" placeholder="Email" id="" className="placeholder:text-gray-400 ml-9 w-[32%] border-1 border-gray-300 outline-none px-[16px] py-[12px]" />
              <input type="number" name="email" placeholder="Phone Number" id="" className="placeholder:text-gray-400 ml-9 w-[32%] border-1 border-gray-300 outline-none px-[16px] py-[12px]" />
            </div>
            <div>
              <textarea name="message" id="" placeholder="message" className="resize-none w-[100%] h-[170px] placeholder:text-gray-400 border-1 border-gray-300 outline-none px-[16px] py-[12px]"></textarea>
            </div>
            <button className="bg-black text-white px-[32px] text-[18px] py-[12px] my-5 font-bold">Send Message</button>
          </form>


        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
