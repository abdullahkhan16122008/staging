import Image from 'next/image';
import React from 'react'
import Link from 'next/link';

const Footer = () => {
    return (
        <div>

            <footer className="text-gray-400 body-font pb-[32px] bg-light">

                <div className='w-[80%] justify-self-center py-[77px]'>
                    <h2 className='aldrich text-[42px] max-xl:text-[32px] max-md:text-[24px] ml-[5px] inline-block text-white font-bold'>Ready to Work with Us</h2>
                    <div className='w-[35%] max-md:w-[70%] float-right max-xl:float-left max-xl:justify-self-center tab'>
                        <div className='flex'>
                            <input type="search" name="search" className='w-[75%] max-md:w-[500px] max-sm:w-[220px] bg-white px-[36px] py-[14px]' placeholder='Enter your Email...' id="search" />
                            <button className='bg-[#dfa667] py-[12px] px-[18px]'><img src={'/plane.png'} className='w-[32px] max-sm:w-[20px]' alt='img' /></button>
                        </div>
                    </div>
                </div>
                

                <hr className='border-gray-500 w-[80%] justify-self-center' />

                <div className="container px-5 py-24 w-[80%] justify-self-center mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap relative max-xl:left-[-18px] flex-col">
                    <div className="w-64 max-sm:justify-items-center max-sm:justify-center flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <Link href={''} className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                            <span className="text-xl logo text-[42px]">Staging</span>
                        </Link>
                        <p className="mt-9 text-[16px] relative w-[200px] text-gray-400">
                            7176 Blue Spring Lane
                            Santa Monica, CA 90403
                        </p>
                        <p className="mt-9 text-[16px] w-[200px] text-gray-400">
                            abdullahkhan16122008<br/>@gmail.com<br/>
                            +92 3046640361
                        </p>

                        <div className='mt-9'>


                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                            <Link href={''} className="text-gray-400">
                                <svg
                                    fill="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    className="w-5 h-5"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                                </svg>
                            </Link>
                            <Link href={''} className="ml-3 text-gray-400">
                                <svg
                                    fill="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    className="w-5 h-5"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                </svg>
                            </Link>
                            <Link href={''} className="ml-3 text-gray-400">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    className="w-5 h-5"
                                    viewBox="0 0 24 24"
                                >
                                    <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                                </svg>
                            </Link>
                            <Link href={''} className="ml-3 text-gray-400">
                                <svg
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={0}
                                    className="w-5 h-5"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="none"
                                        d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                                    />
                                    <circle cx={4} cy={4} r={2} stroke="none" />
                                </svg>
                            </Link>
                        </span>

                        </div>
                        
                    </div>
                    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-white tracking-widest text-xl mb-9">
                                Company
                            </h2>
                            <nav className="list-none mb-10">
                                <li className='py-[12px]'>
                                    <Link href={'/about'} className="text-gray-400 hover:text-white">About</Link>
                                </li>
                                <li className='py-[12px]'>
                                    <Link href={''} className="text-gray-400">Services</Link>
                                </li>
                                <li className='py-[12px]'>
                                    <Link href={''} className="text-gray-400">Our Works
                                    </Link>
                                </li>
                                <li className='py-[12px]'>
                                    <Link href={''} className="text-gray-400">Career</Link>
                                </li>
                                <li className='py-[12px]'>
                                    <Link href={''} className="text-gray-400">FAQs</Link>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-white tracking-widest text-xl mb-9">
                                Services
                            </h2>
                            <nav className="list-none mb-10">
                                <li className='py-[12px]'>
                                    <Link href={''} className="text-gray-400">Architecture</Link>
                                </li>
                                <li className='py-[12px]'>
                                    <Link href={''} className="text-gray-400">Interior Design</Link>
                                </li>
                                <li className='py-[12px]'>
                                    <Link href={''} className="text-gray-400">Exterior Design</Link>
                                </li>
                                <li className='py-[12px]'>
                                    <Link href={''} className="text-gray-400">Planning</Link>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-white tracking-widest text-xl mb-9">
                                Get In Touch
                            </h2>
                            <nav className="list-none mb-10">
                                <li className='py-[12px]'>
                                    <Link href={''} className="text-gray-400">7176 Blue Spring Lane
                                    Santa Monica, CA 90403</Link>
                                </li>
                                <li className='py-[12px]'>
                                    <Link href={''} className="text-gray-400">Info.colorlib@gmail.com
                                    +84 123 456 789</Link>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>

                <hr className='border-gray-500 w-[80%] justify-self-center' />


                <div className="bg-light w-[80%] justify-self-center">
                    <div className="container mx-auto py-4 px-5 max-sm:px-1 flex flex-wrap flex-col sm:flex-row">
                        <div className="text-gray-400 text-sm max-md:text-[12px] max-sm:text-[13px] sm:text-left">
                        Copyright © 2025 All rights reserved | This template is made with love  by
                            <Link
                                href={"https://twitter.com/knyttneve"}
                                rel="noopener noreferrer"
                                className="text-white ml-1"
                                target="_blank"
                            >
                                Abdullah Khan
                            </Link>
                        </div>
                    <div className='inline policy float-right absolute right-[10%] max-sm:text-[12px] max-sm:my-8'><Link href={'/'} className='text-gray-400'>Terms of use</Link> | <Link href={'/'} className='text-gray-400'>Privacy Policy</Link></div>
                        
                    </div>
                </div>
            </footer>


        </div>
    )
}

export default Footer;
