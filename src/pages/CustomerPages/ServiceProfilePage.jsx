import React from 'react'
import AppHeader from '../../components/Customer_components/AppHeader'
import ServiceProfile from '../../components/Customer_components/ServiceProfile'
function ServiceProfilePage() {
  return (
    <>
    <div className='w-full min-h-screen flex flex-col gap-5 bg-gray-200 '>
        <AppHeader title={'PROFILE'}/>
        <ServiceProfile/>
    </div>
    </>
  )
}

export default ServiceProfilePage