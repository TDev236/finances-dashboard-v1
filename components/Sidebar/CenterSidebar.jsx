import { BriefcaseIcon, ChartPieIcon, LocationMarkerIcon } from '@heroicons/react/outline'
import React from 'react'

const CenterSidebar = () => {
  return (
    <div className='space-y-6'>
      <BriefcaseIcon className='iconStyle'/>
      <ChartPieIcon className='iconStyle'/>
      <LocationMarkerIcon className='iconStyle'/>
    </div>
  )
}

export default CenterSidebar