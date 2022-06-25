import { DotsVerticalIcon } from '@heroicons/react/outline'
import React from 'react'
import ActiveResult from './ActiveResult'
import { realtorData } from '../../data'

const BottomRight = () => {
  return (
    <div className='h-[70%] mt-4 overflow-y-auto'>

        <div className='flex items-center justify-between'>
            <div className='flex w-[40%] justify-between items-center font-thin text-gray-400'>
                <p className='hover:bg-blue-200 p-2 rounded-xl cursor-pointer'>Objetos</p>
                <p className='hover:bg-blue-200 p-2 rounded-xl cursor-pointer'>Realtors</p>
            </div>
            <DotsVerticalIcon className='h-6 text-gray-400'/>
        </div>
        <div>
        {realtorData.map((realtor) => (
            <ActiveResult
                key={realtor.name}
                name={realtor.name}
                imagen={realtor.img}
                porcentaje={realtor.porcentaje}
            />
        ))}
        </div>
    </div>
  ) 
}

export default BottomRight