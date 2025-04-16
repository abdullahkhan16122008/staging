import Image from "next/image";
import React from "react";
import "./style.css";

const Blogs = (props) => {
  return (
    <div>


            <div className="blogs">
              <div className="blog">
                <ul className="flex text-gray-400 gap-[50px]">
                  <li>DECEMBER 20, 2019</li>
                  <li className="list-disc">BY JOHN DOE</li>
                  <li className="list-disc">PLANNING</li>
                </ul>
                <h1 className="text-4xl leading-[45px] my-7 font-bold">
                  {props.blogsTitle1}
                </h1>
                <Image
                  src={`${props.imgUrl}`}
                  height={780}
                  width={750}
                  alt="blog"
                />
                <p className="mt-9 mb-4 px-[39px] text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Risus commodo viverra maecenas accumsan lacus vel facilisis.
                </p>
                <div className="flex items-center readBtn">
                  <div className="w-[32px] h-[1px] bg-[#dfa667] mr-[8px] readLine"></div>
                  <button className="font-bold text-gray-900 read cursor-pointer">
                    Read more
                  </button>
                </div>
              </div>
            </div>

            

    </div>
  );
};

export default Blogs;
