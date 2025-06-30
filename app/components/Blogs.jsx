import Image from "next/image";
import React from "react";
import "./style.css";

const Blogs = ({ blogsTitle1, imgUrl }) => {
  return (
    <div className="blogs my-8 px-4 sm:px-6">
      <div className="blog">
        <ul className="flex flex-wrap text-gray-400 gap-4 text-sm">
          <li>DECEMBER 20, 2019</li>
          <li className="list-disc ml-4">BY JOHN DOE</li>
          <li className="list-disc ml-4">PLANNING</li>
        </ul>

        <h1 className="text-2xl sm:text-3xl md:text-4xl leading-snug mt-4 mb-5 font-bold">
          {blogsTitle1}
        </h1>

        <Image
          src={imgUrl}
          height={780}
          width={750}
          alt="blog"
          className="w-full h-auto rounded-md"
        />

        <p className="mt-6 mb-4 px-2 sm:px-4 md:px-6 text-gray-600 text-sm sm:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus vel facilisis.
        </p>

        <div className="flex items-center mt-2">
          <div className="w-[32px] h-[1px] bg-[#dfa667] mr-2"></div>
          <button className="font-bold text-gray-900 cursor-pointer">Read more</button>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
