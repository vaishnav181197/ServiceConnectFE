import React from 'react'
import AppHeader from '../../components/Customer_components/AppHeader'
import RequestServiceForm from '../../components/Customer_components/RequestServiceForm'
import BookingReceipt from '../../components/Customer_components/BookingReceipt'

function ActiveServiceDetails() {
  return (
    <>
      <div className='w-full min-h-screen bg-gray-200'>
        <AppHeader title={'SERVICE DETAILS'}/>
        <RequestServiceForm asd={true}/>
        <BookingReceipt asd={true}/>
      </div>
    </>
  )
}

export default ActiveServiceDetails