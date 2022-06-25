import React from 'react'
import Image from 'next/image'
import { ChevronUpIcon } from '@heroicons/react/outline'

const ActiveResult = ({name, imagen, porcentaje}) => {
  return (
    <div className='flex justify-between items-center my-4 p-6 bg-gray-800 text-white font-thin rounded-xl shadow-xs'>
        <Image
            src={imagen}
            width={50}
            height={50}
            className='rounded-xl shadow-xl'
            alt={name}
        />
        <p>{name}</p>
        <div className='flex items-center space-x-2'>
            <ChevronUpIcon className='text-green-500 h-7'/>
            <p>{porcentaje}</p>
        </div>
    </div>
  )
}

export default ActiveResult