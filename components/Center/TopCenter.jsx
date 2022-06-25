import React from 'react'
import { CalendarIcon, CheckIcon, SearchIcon, UserIcon, ViewBoardsIcon } from '@heroicons/react/outline'

const TopCenter = () => {
  return (
    <div className=''>
        <div className='flex justify-between'>

            <div className='max-w-[50%]'>
                <p
                    className='text-4xl font-semibold'
                    >Monitora La salud de tu negocio</p>
                <p
                    className='text-xs font-thin pt-2 text-gray-400'
                    >Con tu monitor diario de dinero</p>
            </div>

            <div className=''>

                <div className='flex space-x-4'>

                    <div className='flex items-center border-b-2'>
                        <SearchIcon className='h-5 text-gray-400'/>
                        <input type="text" placeholder='Buscar' />
                    </div>

                    <CalendarIcon className='h-7 bg-black text-white p-1 rounded-lg'/>

                </div>
                <div className='mt-9 flex justify-between font-thin text-sm'>
                    <button className='buttonStyle'>Week</button>
                    <button className='buttonStyle'>Month</button>
                    <button className='buttonStyle'>Year</button>
                </div>
            </div>

        </div>

        <div className='grid grid-cols-3 gap-3 mt-4'>
            
            <div className='boxStyle'>
                <div className='boxTopStyle'>
                    <p>Views</p>
                    <ViewBoardsIcon className='h-7'/>
                </div>
                <div className="boxBottomStyle">
                    <p className="text-2xl font-semibold">31</p>
                    <p>+3 last day</p>
                </div>
            </div>

            <div className='boxStyle'>
                <div className='boxTopStyle'>
                    <p>Clients</p>
                    <UserIcon className='h-5'/>
                </div>
                <div className="boxBottomStyle">
                    <p className="text-2xl font-semibold">63</p>
                    <p>+1 last day</p>
                </div>
            </div>

            <div className='boxStyle'>
                <div className='boxTopStyle'>
                    <p>Purchases</p>
                    <CheckIcon className='h-5'/>
                </div>
                <div className="boxBottomStyle">
                    <p className="text-2xl font-semibold">10</p>
                    <p>+1 last day</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default TopCenter