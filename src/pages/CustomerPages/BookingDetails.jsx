import React from 'react'
import RequestServiceForm from '../../components/Customer_components/RequestServiceForm'
import AppHeader from '../../components/Customer_components/AppHeader'
import BookingReceipt from '../../components/Customer_components/BookingReceipt'


function BookingDetails() {
  return (
    <>
        <div className='w-full min-h-screen bg-gray-200 flex flex-col'>
            <AppHeader settings={true} search={true} title={'BOOKING DETAILS'}/>
            <RequestServiceForm bd={true}/>
            <BookingReceipt/>
        </div>
    </>
  )
}

export default BookingDetails