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
                <div className="pb-[32px] text-white text-[52px] aldrich w-[50%] relative justify-self-center">
                  Blogs
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

<main className="py-[128px] max-md:py-[64px] px-4">
  <section className="Bmain flex flex-wrap w-[90%] max-w-[1300px] mx-auto">
    {/* Left Side */}
    <section className="leftSide w-full lg:w-[60%]">
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

      <div className="overflow-x-auto">
        <ul className="flex gap-3 flex-wrap">
          {["1", "2", "3", ">>"].map((item, i) => (
            <li
              key={i}
              className="font-bold border-2 border-transparent py-2 px-4 transition-all duration-300 hover:border-[#dfa667]"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>

    {/* Right Side */}
    <section className="rightSide w-full lg:w-[40%] text-center px-4 lg:px-[60px] mt-12 lg:mt-0">
      {/* Team Sign */}
      <article className="teamSign">
        <div
          className="w-[128px] h-[128px] mx-auto my-4 rounded-full bg-cover bg-center"
          style={{ backgroundImage: 'url(/team-3.jpg.webp)' }}
        ></div>
        <p className="my-4 text-gray-800 text-[17px]">
          Quis ipsum suspendisse ultrices gravid. Risus commodo viverra maece accums lacus vel facilisis.
        </p>
        <Image
          src={'/signature.webp'}
          height={220}
          width={220}
          alt="signature"
          className="mx-auto"
        />
      </article>

      {/* Search Bar */}
      <div className="searchBar flex w-full my-6">
        <input
          type="search"
          className="w-full border-b border-gray-400 py-2 px-3"
          placeholder="Search.."
        />
        <button>
          <Image
            src={'/plane.png'}
            width={40}
            height={40}
            alt="send"
            className="ml-[-18px] mb-2"
          />
        </button>
      </div>

      {/* Categories */}
      <div className="my-10 text-left">
        <h1 className="uppercase aldrich text-[22px]">Categories</h1>
        <ul className="my-5 leading-[40px] text-gray-400">
          {["Work Space", "Office Building", "HomeStay", "Making", "Process"].map((cat, idx) => (
            <li key={idx}>
              <Link href="#" className="text-[16px]">
                {cat}
              </Link>
            </li>
          ))}
        </ul>
      </div>

     {/* Feature News */}
<div className="my-10 text-left w-full">
  <h1 className="uppercase aldrich text-[22px]">Feature News</h1>
  <ul className="my-5 space-y-5">
    {["latest-1.webp", "latest-2.webp", "latest-3.webp"].map((img, i) => (
      <li key={i}>
        <Link href="#" className="flex flex-col sm:flex-row items-start">
          <Image
            src={`/${img}`}
            width={100}
            height={100}
            alt="news"
            className="w-full sm:w-[100px] h-auto object-cover sm:scale-y-[1.7] sm:scale-x-[1.1]"
          />
          <div className="mt-2 sm:mt-0 sm:ml-4">
            <div className="text-gray-400 font-bold mb-2 text-sm">
              20 DECEMBER 2025
            </div>
            <h1 className="font-bold text-base leading-5 max-w-[90%]">
              {i === 0
                ? "Grace Millane's mother tells killer she died 'terrified"
                : "A 'gregarious' gap-year student who dreamed."}
            </h1>
          </div>
        </Link>
      </li>
    ))}
  </ul>
</div>

{/* Tags */}
<div className="my-10 text-left w-full">
  <h1 className="uppercase aldrich text-[22px]">Tags</h1>
  <ul className="flex flex-wrap gap-3 mt-4 text-gray-400 font-bold text-sm">
    {[
      "Branding",
      "Planning",
      "Business",
      "Travel",
      "Ideas",
      "Planes",
      "Designs",
      "Latest",
      "New Designs",
    ].map((tag, i) => (
      <li key={i}>
        <Link href="#" className="hover:underline">
          {tag}
        </Link>
      </li>
    ))}
  </ul>
</div>

{/* Follow Us */}
<div className="my-10 text-left w-full">
  <h1 className="uppercase aldrich text-2xl">Follow Us</h1>
  <ul className="flex flex-wrap items-center gap-4 my-4">
    {[
      { icon: "f", type: "text" },
      { icon: "/twitter.png", type: "img" },
      { icon: "/instagram.png", type: "img" },
      { icon: "/linkedin.png", type: "img" },
    ].map((item, i) => (
      <li key={i} className="flex items-center gap-2">
        {item.type === "text" ? (
          <a
            href="#"
            className="font-bold text-2xl text-gray-400 inline-block"
          >
            {item.icon}
          </a>
        ) : (
          <a href="#">
            <img
              src={item.icon}
              className="h-[30px] brightness-60"
              alt="social"
            />
          </a>
        )}
        {i < 3 && (
          <div className="hidden sm:block w-[32px] h-[1px] bg-gray-400"></div>
        )}
      </li>
    ))}
  </ul>
</div>


      {/* News Shelter */}
      <div className="w-full">
        <h1 className="uppercase aldrich text-[22px] text-left">NewsShelter</h1>
        <div className="searchBar flex w-full my-3">
          <input
            type="search"
            className="w-full border-b border-gray-400 py-2 px-3"
            placeholder="Search.."
          />
          <button>
            <Image src={'/plane.png'} width={40} height={40} alt="send" className="ml-[-18px] mb-2" />
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
