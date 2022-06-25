import React from 'react'
import Image from 'next/image'
import ImageDash from '../../public/imagen.jpg'
import BottomRight from './BottomRight'

const Right = () => {
  return (
    <div className='hidden md:flex flex-col mt-10 mr-4'>
      <Image
        className='rounded-xl  opacity-60'
        src={ImageDash}
        alt="logo"
      />
      <BottomRight/>
    </div>
  )
}

export default Right