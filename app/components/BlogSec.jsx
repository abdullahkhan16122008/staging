import Image from 'next/image';
import React from 'react';

const BlogSec = () => {
    return (
        <div>

            <section className="blogSec my-[128px]">
                <div className='w-[80%] justify-self-center'>
                    <div className='my-[16px] inline-block max-xl:w-[100%]'>
                        <h2 className="introSubHead text-[#dfa667] text-[20px] max-md:text-[18px] font-bold">Latest News</h2>
                        <div className='ardich articleHead py-[12px] text-[42px] max-md:text-[30px] articleHead font-medium uppercase'>From Our Blogs</div>



                    </div>


                    <button className='text-black max-sm:scale-[0.80] heroBtn py-[12px] mt-[24px] max-sm:mt-[0px] px-[18px] font-bold text-[20px] float-right rounded max-xl:mb-[32px] max-xl:float-start'>

                        <div className='relative top-[-10px]'>

                            <div className='absolute heroLine border-1 border-gray-400 w-[35%] justify-self-end top-[0%] right-[-30%]'></div>

                            <div className='absolute border-1 heroLine2 border-gray-400 w-[2px] bg-gray-500 h-[30px] translate-y-[0%] left-[127%] right-[0%]'></div>

                        </div>
                        See Project

                        <div className='relative top-[12px] rotate-180'>

                            <div className='absolute heroLine border-1 border-gray-400 w-[35%] justify-self-end top-[0%] right-[-30%]'></div>

                            <div className='absolute border-1 heroLine2 border-gray-400 w-[2px] bg-gray-700 h-[30px] translate-y-[0%] left-[127%] right-[0%]'></div>

                        </div>

                    </button>

                    <section className="blogsItems max-md:justify-items-left max-md:justify-left w-[80vw] max-sm:w-[95%] py-[64px]">
                        <ul className='flex flex-wrap justify-self-center max-xl:mt-12 max-md:justify-items-left justify-left gap-[64px]'>


                        <li>



                        <div className="item w-[350px] max-sm:w-[290px] max-sm:justify-self-center shadow-2xl">
                            <Image src="/latest-1.webp" width={350} height={370} alt="" />
                            <div className='w-[85%] justify-self-center py-[16px]'>
                                <h1 className='text-gray-400 serif font-bold text-[16px] max-sm:text-[12px] py-[8px] uppercase'>Architecture</h1>
                                <h3 className='serif text-2xl max-sm:text-[18px] font-bold text-gray-900 pb-[8px]'>Target and Amazon Shopping List for Home Stagers</h3>
                                <div className='flex items-center readBtn'>
                                    <div className='w-[32px] h-[1px] bg-[#dfa667] mr-[8px] readLine'></div>
                                    <button className='font-bold text-gray-900 read cursor-pointer'>Read more</button>
                                </div>
                            </div>

                            </div>

                        </li>


                        <li>

                            <div className="item w-[350px] max-sm:w-[290px] shadow-2xl">
                            <Image src="/latest-2.webp" width={350} height={370} alt="" />
                            <div className='w-[85%] justify-self-center py-[16px]'>
                                <h1 className='text-gray-400 serif font-bold text-[16px] max-sm:text-[12px] py-[8px] uppercase'>Interior</h1>
                                <h3 className='serif text-2xl font-bold text-gray-900 pb-[8px] max-sm:text-[18px]'>6 Ideas for Team Building and Employee Appreciation for Home Stagers</h3>
                                <div className='flex items-center readBtn'>
                                    <div className='w-[32px] h-[1px] bg-[#dfa667] mr-[8px] readLine'></div>
                                    <button className='font-bold text-gray-900 read cursor-pointer'>Read more</button>
                                </div>
                            </div>
                            </div>

                            </li>

                        <li>


                            <div className="item w-[350px] max-sm:w-[290px] shadow-2xl">
                            <Image src="/latest-3.webp" width={350} height={370} alt="" />
                            <div className='w-[85%] justify-self-center py-[16px]'>
                                <h1 className='text-gray-400 serif font-bold text-[16px] max-sm:text-[12px] py-[8px] uppercase'>Planning</h1>
                                <h3 className='serif text-2xl font-bold text-gray-900 pb-[8px] max-sm:text-[18px]'>How to Find the Best Price Structure for Your Home Staging Services</h3>
                                <div className='flex items-center readBtn'>
                                    <div className='w-[32px] h-[1px] bg-[#dfa667] mr-[8px] readLine'></div>
                                    <button className='font-bold text-gray-900 read cursor-pointer'>Read more</button>
                                </div>
                            </div>
                            </div>


                        </li>

                        </ul>
                    </section>


                </div>
            </section>

        </div>
    )
}

export default BlogSec;
