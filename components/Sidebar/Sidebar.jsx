import React from 'react'
import BottomSidebar from './BottomSidebar'
import CenterSidebar from './CenterSidebar'
import TopSidebar from './TopSidebar'

const Sidebar = () => {
  return (
    <div className='bg-gray-900 p-2 flex flex-col justify-evenly relative'>
        <TopSidebar/>
        <CenterSidebar/>
        <BottomSidebar/>
    </div>
  )
}

export default Sidebar