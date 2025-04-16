'use client'
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Loader from "../components/Loader";
import { useState, useEffect } from "react";


const Projects = () => {


   const [loader, setLoader] = useState(true)
    useEffect(() => {
        let timeout = setTimeout(() =>{
            setLoader(false)
        }, 3000)}
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
                <div className="pb-[32px] text-white max-xl:text-2xl text-[52px] aldrich w-[50%] relative justify-self-center">
                  Our Projects
                </div><br />
                <div className="text-xl text-white">Home ~ <span className="text-color">Project</span></div>

                <div className="animateMe heroButton"></div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <main>
        <section className="projectsMain w-[90%] justify-self-center py-[128px]">
          <div className="flex flex-wrap justify-center">

            <ul className="flex flex-wrap justify-center gap-[32px]">

              <li><div className="block text-center">
              <Image
                src={"/project-p1.webp"}
                alt="project"
                width={520}
                height={390}
              />
              <h1 className="aldrich text-2xl font-light py-[16px]">OFFICE BUILDING</h1>
            </div></li>


              <li><div className="block text-center">
              <Image
                src={"/project-p3.webp"}
                alt="project"
                width={520}
                height={390}
              />
              <h1 className="aldrich text-2xl font-light py-[16px]">Funiture Decorative</h1>
            </div></li>

            <li><div className="block text-center">
              <Image
                src={"/project-p4.webp"}
                alt="project"
                width={520}
                height={390}
              />
              <h1 className="aldrich text-2xl font-light py-[16px]">Decoration</h1>
            </div></li>

            <li><div className="block text-center">
              <Image
                src={"/project-p5.webp"}
                alt="project"
                width={520}
                height={390}
              />
              <h1 className="aldrich text-2xl font-light py-[16px]">Funiture</h1>
            </div></li>

            <li><div className="block text-center">
              <Image
                src={"/project-p1.webp"}
                alt="project"
                width={520}
                height={390}
              />
              <h1 className="aldrich text-2xl font-light py-[16px]">Home Building</h1>
            </div></li>

            <li><div className="block text-center">
              <Image
                src={"/project-p3.webp"}
                alt="project"
                width={520}
                height={390}
              />
              <h1 className="aldrich text-2xl font-light py-[16px]">Interior Design</h1>
            </div></li>

            
            </ul>
            
      <button className='text-black heroBtn py-[12px] my-[32px] px-[18px] font-bold text-[20px] rounded'>

        <div className='relative top-[-10px]'>

          <div className='absolute heroLine border-1 border-gray-400 w-[35%] justify-self-end top-[0%] right-[-30%]'></div>

          <div className='absolute border-1 heroLine2 border-gray-400 w-[2px] bg-gray-700 h-[30px] translate-y-[0%] left-[127%] right-[0%]'></div>

        </div>
        Learn More

        <div className='relative top-[12px] rotate-180'>

          <div className='absolute heroLine border-1 border-gray-400 w-[35%] justify-self-end top-[0%] right-[-30%]'></div>

          <div className='absolute border-1 heroLine2 border-gray-400 w-[2px] bg-gray-700 h-[30px] translate-y-[0%] left-[127%] right-[0%]'></div>

        </div>

      </button>
          </div>
        </section>
      </main>


      <Footer />
    </div>
  );
};

export default Projects;
