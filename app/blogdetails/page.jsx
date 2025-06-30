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
    }, 1500);
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

      <main className="py-[128px] max-md:py-[64px] px-4">
  <section className="Bmain w-[65%] max-xl:w-[80%] max-md:w-full mx-auto">
    <section className="leftSide">
      <div className="blogs">
        <div className="blog">
          <ul className="flex flex-wrap text-gray-400 text-sm gap-6 max-md:text-xs max-md:gap-3">
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
            className="w-full h-auto"
          />

          <p className="mt-9 mb-4 w-full text-base max-md:text-sm px-[39px] max-md:px-2 text-gray-600">
            Forget Ebay and other forms of advertising...
          </p>

          <BlogAbout />

          <p className="mt-9 mb-4 w-full px-[39px] max-md:px-2 text-base max-md:text-sm text-gray-600">
            Now times have changed and we at Investment...
          </p>

          <div className="flex flex-wrap justify-evenly gap-y-6">
            {['/bi-1.webp', '/bi-2.webp', '/bi-3.webp'].map((img, i) => (
              <div key={i} className="my-4">
                <Image src={img} width={300} height={420} alt={`bi-${i}`} className="w-[300px] max-md:w-[90vw] h-auto" />
              </div>
            ))}
          </div>

          <section className="flex flex-wrap text-center px-[60px] max-md:px-2 justify-between items-center w-full">
            <div className="flex flex-wrap text-sm">
              Tags:&nbsp;
              <ul className="flex flex-wrap text-gray-300 gap-4 ml-4 list-disc">
                <li className="uppercase list-none">Branding</li>
                <li className="uppercase">Office</li>
                <li className="uppercase">Creative</li>
              </ul>
            </div>

            <div className="socialLinks flex mt-4 max-md:mt-2">
              <ul className="flex items-center gap-4">
                <li>
                  <a href="#" className="font-bold text-2xl text-gray-400">f</a>
                </li>
                {['twitter.png', 'instagram.png', 'linkedin.png'].map((icon, i) => (
                  <li key={i}>
                    <a href="#">
                      <img src={`/${icon}`} alt={icon} className="h-[30px] brightness-60" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="customer bg-gray-50 py-6 px-4 my-9">
            <div className="flex flex-wrap gap-4 items-center">
              <div className="custLeft rounded-full h-[150px] w-[150px] bg-cover bg-center" style={{ backgroundImage: 'url(/team-2.jpg.webp)' }}></div>
              <div className="flex-1">
                <div className="font-bold text-[20px] max-md:text-[18px] my-2">Dana Vaughn</div>
                <p className="text-base text-gray-500 max-md:text-sm">
                  Now times have changed and we at Investment...
                </p>
              </div>
            </div>
          </section>

          <section className="flex flex-wrap justify-between gap-y-6">
            {/* Previous Blog */}
            <div className="flex items-center w-full md:w-[48%]">
              <Image src={'/latest-2.webp'} width={90} height={100} alt="prev" className="h-[90px] w-[90px]" />
              <div className="ml-4">
                <div className="text-gray-400 flex items-center text-sm">
                  <div className="font-bold text-xl mr-2">&larr;</div> Previous Blog
                </div>
                <div className="font-bold text-gray-800 text-lg max-md:text-base">Popular Uses Of The Internet</div>
              </div>
            </div>

            {/* Next Blog */}
            <div className="flex items-center justify-end w-full md:w-[48%]">
              <Image src={'/latest-1.webp'} width={90} height={100} alt="next" className="h-[90px] w-[90px]" />
              <div className="ml-4 text-right">
                <div className="text-gray-400 flex items-center text-sm justify-end">
                  <div className="font-bold text-xl mr-2">&rarr;</div> Next Blog
                </div>
                <div className="font-bold text-gray-800 text-lg max-md:text-base">Popular Uses Of The Internet</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>

    {/* Contact Form */}
    <form action="" method="post" className="w-full mt-8">
      <div className="my-7 flex flex-wrap gap-y-4 justify-between">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="placeholder:text-gray-400 w-full md:w-[32%] border border-gray-300 outline-none px-4 py-3"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="placeholder:text-gray-400 w-full md:w-[32%] border border-gray-300 outline-none px-4 py-3"
        />
        <input
          type="number"
          name="phone"
          placeholder="Phone Number"
          className="placeholder:text-gray-400 w-full md:w-[32%] border border-gray-300 outline-none px-4 py-3"
        />
      </div>
      <div>
        <textarea
          name="message"
          placeholder="Message"
          className="resize-none w-full h-[170px] placeholder:text-gray-400 border border-gray-300 outline-none px-4 py-3"
        ></textarea>
      </div>
      <button type="submit" className="bg-black text-white px-8 py-3 text-lg my-5 font-bold">
        Send Message
      </button>
    </form>
  </section>
</main>


      <Footer />
    </div>
  );
};

export default Blog;
