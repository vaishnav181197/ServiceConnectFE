import React from 'react'
import AppHeader from '../../components/Customer_components/AppHeader'
import HelpCenterList from '../../components/Customer_components/HelpCenterList'

function HelpCenter() {
  return (
    <>
        <div className='w-full min-h-screen bg-gray-200'>
            <AppHeader title={'HELP CENTER'}/>
            <HelpCenterList/>
        </div>
    </>
  )
}

export default HelpCenter