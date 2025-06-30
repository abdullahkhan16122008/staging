"use client"
import Image from "next/image";
import Hero from "./components/Hero";
import Article1 from "./components/Article1";
import Navbar from "./components/Navbar";
import Script from "next/script";
import Projects from "./components/Projects";
import Service from "./components/Service";
import Team from "./components/Team";
import AboutSec from "./components/AboutSec";
import BlogSec from "./components/BlogSec";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";

// import Testimonials from "./components/testimonials";

export default function Home() {
  const [loader, setLoader] = useState(true)
  useEffect(() => {
      let timeout = setTimeout(() =>{
          setLoader(false)
      }, 1500)}
    )
  return (
    <>
    {loader?<Loader />:""}

      <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Aldrich&display=swap" rel="stylesheet" />
      <Script
  src="/static/script.js"
  strategy="lazyOnload"
  onLoad={() =>
    console.log(`script loaded correctly, window.FB has been populated`)
  }
/>
      <div className="">
        <div className="background">
          <div className='dim'>
            <Navbar />
            <Hero />
          </div>
        </div>
            <Article1 />
            <Projects />
            <Service />
            <Team />
            <AboutSec />
            <BlogSec />
            <Footer />
      </div>
    </>
  );
}
