import React from 'react'
import BookedItem from './BookedItem'
import JobItem from './JobItem'

function JobList() {
    const bookings = [
        { id: 1, title: "Tap Repair", provider: "Keshavan", date: "March 20,2021", timeslot: "09:00-10:00 AM", amount: 300, additionalreq: [true], status: "Active" },
        { id: 1, title: "Tap Repair", provider: "Keshavan", date: "March 20,2021", timeslot: "09:00-10:00 AM", amount: 300, additionalreq: [true], status: "Active" },
    ]
    return (
        <>
            <div className='w-full min-h-screen'>

                <div className='w-full bg-gray-600 p-1 grid grid-cols-2 rounded-full my-3 md:w-3/4 md:mx-auto'>
                    <div className='text-center py-3 rounded-full text-white hover:bg-white hover:text-black'>
                        Ongoing
                    </div>
                    <div className='text-center py-3 rounded-full text-white hover:bg-white hover:text-black'>
                        Complete
                    </div>
                </div>

                <div className='w-full flex flex-col gap-3 p-4 min-h-3/4'>
                    {bookings.map((item) => (
                        <JobItem job={item} />

                    ))}
                </div>
            </div>
        </>
    )
}

export default JobList