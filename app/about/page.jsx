"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Loader from "../components/Loader";
import { useState, useEffect } from "react";
import AboutSec from "../components/AboutSec";
import Team from "../components/Team";

const About = () => {
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
                <div className="pb-[32px] text-white text-[52px] max-xl:text-2xl aldrich w-[50%] relative justify-self-center">
                  ABOUT US
                </div>
                <div className="text-xl text-white">
                  Home ~ <span className="text-color">About Us</span>
                </div>

                <div className="animateMe heroButton"></div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <main className="py-[128px]">
        <div className="flex flex-wrap w-[90%] px-[64px] my-[96px] justify-self-center">
          <article className="aboutLeft left w-[25vw]">
            <h1 className="text-color text-[18px] pt-[16px]">Who are we</h1>
            <h1 className="aldrich text-4xl font-bold uppercase py-[16px]">
              About Us
            </h1>
            <p className="text-[16px] text-gray-700">
              As you might expect of a company that began as a high-end
              interiors contractor.
            </p>
          </article>
          <section className="w-[50%]">
            <section className="about">
              <div className="w-[45vw] mt-[16px] aboutPara text-gray-700">
                <p>
                  Metasurfaces are generally designed by placing scatterers in
                  periodic or pseudo-periodic grids. We propose and discuss
                  design rules for functional metasurfaces with randomly placed.
                  Anisotropic elements that randomly sample. Quisque sit amet
                  nisl ante.
                </p>
              </div>

              <div className="serviceCards pt-[32px] flex">
                <ul className="flex flex-wrap gap-[32px]">
                  <li>
                    <div className="serviceCard w-[100%] block">
                      <Image
                        src={"/services-5.webp"}
                        className="py-[16px]"
                        width={60}
                        height={60}
                        alt="service"
                      />
                      <h1 className="aldrich text-2xl uppercase py-[16px]">
                        Our Mission
                      </h1>
                      <p className="text-gray-700">
                        As you might expect of a company that began as a
                        high-end interiors contractor, we pay strict attention.
                        Anisotropic elements that randomly sample.
                      </p>
                    </div>
                  </li>

                  <li>
                    <div className="serviceCard w-[100%] block">
                      <Image
                        src={"/services-6.webp"}
                        className="py-[16px]"
                        width={60}
                        height={60}
                        alt="service"
                      />
                      <h1 className="aldrich text-2xl uppercase py-[16px]">
                        Our Vision
                      </h1>
                      <p className="text-gray-700">
                        Our commitment to exceptional quality has never wavered.
                        To day ranks as one of the most highly-regarded
                        construction. Anisotropic elements that randomly
                        sample..
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
          </section>
        </div>

        <AboutSec />

        <Team />
      </main>

      <Footer />
    </div>
  );
};

export default About;
