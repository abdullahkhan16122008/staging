"use client";
import React from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Loader from "../components/Loader";
import { useState, useEffect } from "react";

const contact = () => {
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
        </div>
      </div>

      <main>
        <section className="w-[80%] max-xl:text-center justify-self-center my-[128px]">
          <div className="w-[30%] max-xl:w-[100%]">
            <div className="introSubHead text-[#dfa667] font-bold">
              Information
            </div>
            <div className="ardich py-[12px] text-[42px] articleHead font-medium">
              Contact Details
            </div>
            <p className="py-[9px] text-gray-700">
              As you might expect of a company that began as a high-end
              interiors contractor, we pay strict attention.
            </p>
          </div>
        </section>

        <section className="contactInfo w-[80%] justify-self-center">
          <article className="flex flex-wrap">
            <div className="">
              <ul className="flex max-xl:flex-col max-xl:justify-self-center gap-[100px]">


                <li className="flex max-xl:my-9 max-xl:justify-self-center">
              <Image src={"/ci-1.webp"} height={40} width={40} alt="img" />
              <div className="block px-[16px]">
                <div className="introSubHead uppercase text-[#dfa667] aldrich font-bold ">
                  phone number
                </div>
                <div className="font-medium">
                +01 123 456 789
                </div>
              </div>
                </li>

                <div className="h-[55px] w-[1px] bg-gray-300 max-xl:hidden"></div>

                <li className="flex max-xl:my-9 max-xl:justify-self-center">
              <Image src={"/ci-2.webp"} height={40} width={40} alt="img" />
              <div className="block px-[16px]">
                <div className="introSubHead uppercase text-[#dfa667] aldrich font-bold ">
                  email address
                </div>
                <div className="font-medium">
                nfo.colorlib@gmail.com
                </div>
              </div>
                </li>

                <div className="h-[55px] w-[1px] bg-gray-300 max-xl:hidden"></div>

                <li className="flex">
              <Image src={"/ci-3.webp"} height={40} width={40} alt="img" />
              <div className="block px-[16px]">
                <div className="introSubHead uppercase text-[#dfa667] aldrich font-bold ">
                  office location
                </div>
                <div className="font-medium">
                Latifabad unit no: 10, Hyderabad
                </div>
              </div>
                </li>
              </ul>
            </div>
          </article>
        </section>

        <section className="map w-[80%] justify-self-center my-[128px] w-[100%] overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7639.14165895407!2d68.3515527683891!3d25.364788143434822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c706e8c701a23%3A0xa06878d4ff6aaa7e!2sUnit%2010%20Latifabad%20Unit%2010%20Latifabad%2C%20Hyderabad%2C%20Pakistan!5e0!3m2!1sen!2s!4v1744295953137!5m2!1sen!2s"
            // height="512"
            // width="1250"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0 w-[80%] h-[500px] relative left-[-0.5%] justify-self-center"
          ></iframe>
        </section>

        <section className="w-[80%] max-xl:text-center justify-self-center my-[128px]">
          <div className="w-[30%] max-xl:w-[100%]">
            <div className="introSubHead text-[#dfa667] font-bold">
              FORM
            </div>
            <div className="aldrich py-[12px] text-[42px] articleHead font-medium">
              GET IN TOUCH
            </div>
            <p className="py-[9px] text-gray-700">
              As you might expect of a company that began as a high-end
              interiors contractor, we pay strict attention.
            </p>
          </div>

          <form action="" method="post" className="w-[50%]">
            <div className="my-7 flex">
              <input type="text" name="name" placeholder="Name" id="" className="placeholder:text-gray-400 w-[47%] border-1 border-gray-300 outline-none px-[16px] py-[12px]" />
              <input type="email" name="email" placeholder="Email" id="" className="placeholder:text-gray-400 ml-9 w-[47%] border-1 border-gray-300 outline-none px-[16px] py-[12px]" />
            </div>
            <div>
              <textarea name="message" id="" placeholder="message" className="resize-none w-[100%] h-[170px] placeholder:text-gray-400 border-1 border-gray-300 outline-none px-[16px] py-[12px]"></textarea>
            </div>
            <button className="bg-[#dfa667] text-white px-[32px] text-[18px] py-[12px] my-5 font-bold">Send Message</button>
          </form>


        </section>



      </main>



      <Footer />
    </div>
  );
};

export default contact;
