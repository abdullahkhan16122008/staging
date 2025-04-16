import Image from 'next/image';
import React, {useEffect, useState} from 'react'

const Loader = () => {

  return (
    <div>

        <div className="loader w-[128px] fixed top-[0%] left-[0%] justify-items-center content-center">
            <Image src={'/loader.gif'} width={256} height={256} alt='loader' className='justify-self-center' />
        </div>
      
    </div>
  )
}

export default Loader;
