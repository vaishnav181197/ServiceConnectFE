import React from 'react'
import AppHeader from '../../components/Customer_components/AppHeader'
import RequestServiceForm from '../../components/Customer_components/RequestServiceForm'

function RequestService() {
  return (
    <>
        <div className='w-full min-h-screen flex flex-col bg-gray-200'>
            <AppHeader title={'REQUEST SERVICE'}/>
            <RequestServiceForm/>
        </div>
    </>
  )
}

export default RequestService