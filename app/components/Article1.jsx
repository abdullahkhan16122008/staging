import Image from 'next/image';
import React from 'react'

const Article1 = () => {
    return (
        <div>
            <article className='pt-[120px] pb-[165px] justify-evenly overflow-hidden justify-center flex flex-wrap w-[90%] justify-self-center max-xl p-[16px]'>
                <div className="leftSide pt-[50px] w-[37%] max-xl:w-[90%] max-xl:justify-self-cente">
                    <div className="introSubHead text-[#dfa667] font-bold">WHO ARE WE</div>
                    <div className='ardich py-[12px] text-[42px] max-md:text-3xl articleHead font-medium'>We propose and discuss design rules</div>
                    <p className='py-[32px] max-md:text-[14px] text-gray-700'>Metasurfaces are generally designed by placing scatterers in periodic or pseudo-periodic grids. We propose and discuss design rules for functional metasurfaces with randomly placed.
                    </p>
                    <p className='pb-[12px] max-md:text-[14px] text-gray-700'>
                        Anisotropic elements that randomly sample. Quisque sit amet nisl ante. Fusce lacinia non tellus id gravida. Cras neque dolor, volutpat et hendrerit et.
                    </p>
                    <button className='text-black heroBtn py-[12px] my-[24px] px-[18px] font-bold text-[20px] rounded'>

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

                </div>
                <div className="rightSide h-[600px] max-xl:my-9 w-[470px]">
                    <div className="imgShadow border-[14px] max-xl:border-[9px] border-gray-200 translate-x-[32px] max-xl:translate-x-[5px] translate-y-[32px] absolute h-[600px] max-md:w-[500px] max-md:hidden z-[-1] w-[470px]">
                    </div>
                    <Image src="/about-pic.webp" width={600} height={470} alt="img" className='h-[600px] w-[470px] max-md:w-[270px] max-md:h-[300px]' />
                </div>
            </article>
        </div>
    )
}

export default Article1;
