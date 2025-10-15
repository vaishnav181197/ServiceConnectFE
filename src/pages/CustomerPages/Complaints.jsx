import React from 'react'
import AppHeader from '../../components/Customer_components/AppHeader'
import JobItem from '../../components/Customer_components/JobItem'
import Toolbar from '../../components/Customer_components/Toolbar'

function Complaints() {
    const bookings = [
        { id: 1, title: "Tap Repair", provider: "Keshavan", date: "March 20,2021", timeslot: "09:00-10:00 AM", amount: 300, additionalreq: [true], status: "Pending" },
        { id: 1, title: "Tap Repair", provider: "Keshavan", date: "March 20,2021", timeslot: "09:00-10:00 AM", amount: 300, additionalreq: [true], status: "Resolved" },
    ]
    return (
        <>
            <div className='w-full min-h-screen bg-gray-200'>
                <AppHeader title={'COMPLAINTS'} settings={true} search={true} />
                <div className='w-full my-5 flex flex-col gap-3 items-center'>
                    {
                        bookings.map(item => (
                            <JobItem job={item}  />

                        ))
                    }
                </div>
                <Toolbar/>
            </div>
        </>
    )
}

export default Complaints