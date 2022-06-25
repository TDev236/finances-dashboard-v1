import React from 'react'
import { ChevronDownIcon, ChevronUpIcon, MenuAlt1Icon, MenuAlt3Icon } from '@heroicons/react/outline'
import { ChartComponent } from './ChartComponent'

const BottomCenter = () => {
  return (
    <div className='mt-8'>

      <div className='flex justify-between items-center'>
        <p className='w-[40%] text-3xl font-bold'>Total profit</p>

        <div className='flex justify-between w-[50%]'>

          <div className='flex space-x-4'>
            <div className='flex space-x-2 items-center'>
              <ChevronUpIcon className='h-6 text-green-500'/>
              <p className='text-sm font-light'>iconme</p>
            </div>
            <div className='flex space-x-2 items-center'>
              <ChevronDownIcon className='h-6 text-red-500'/>
              <p className='text-sm font-light'>expense</p>
            </div>
          </div>
          
          <MenuAlt3Icon className='h-6'/>

        </div>

      </div>
      <ChartComponent/>

    </div>
  )
}

export default BottomCenter