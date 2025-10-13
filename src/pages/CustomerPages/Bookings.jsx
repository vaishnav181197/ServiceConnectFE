import React from 'react'
import AppHeader from '../../components/Customer_components/AppHeader'
import Toolbar from '../../components/Customer_components/Toolbar'
import BookedItem from '../../components/Customer_components/BookedItem'

function Bookings() {
  const bookings = [
    { id: 1,title:"Tap Repair", provider: "Keshavan", date: "March 20,2021", timeslot: "09:00-10:00 AM", amount: "pending", additionalreq: "pending", status: "Booked" },
    { id: 1,title:"Tap Repair", provider: "Keshavan", date: "March 20,2021", timeslot: "09:00-10:00 AM", amount: 300, additionalreq: [true], status: "Scheduled" },
  ]
  return (
    <div className='w-full min-h-screen flex flex-col bg-gray-200'>
      <AppHeader title={'BOOKINGS'} settings={true} search={true} />
      <div className='w-full flex flex-col gap-3 p-4 min-h-3/4'>
        {bookings.map((item) => (
          <BookedItem book={item}/>

        ))}
      </div>
      <Toolbar />
    </div>
  )
}

export default Bookings