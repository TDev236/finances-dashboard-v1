import React from 'react'
import BottomCenter from './BottomCenter'
import TopCenter from './TopCenter'

const Center = () => {
  return (
    <div className='min-w-[60%] h-screen m-10 '>
      <TopCenter/>
      <BottomCenter/>
    </div>
  )
}

export default Center