import React from 'react'
import AppHeader from '../../components/Customer_components/AppHeader'
import Toolbar from '../../components/Customer_components/Toolbar'
import BookedItem from '../../components/Customer_components/BookedItem'

function Bookings() {
  return (
    <div className='w-full min-h-screen flex flex-col bg-gray-200'>
        <AppHeader title={'BOOKINGS'} settings={true} search={true}/>
        <div className='w-full p-4 min-h-3/4'>
            <BookedItem/>
        </div>
        <Toolbar/>
    </div>
  )
}

export default Bookings