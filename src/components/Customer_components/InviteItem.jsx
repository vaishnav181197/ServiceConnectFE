import React from 'react'

function InviteItem() {
    return (
        <div className='w-full bg-white flex gap-3 p-6 rounded-2xl shadow-2xl'>
            <div className='flex items-center h-full w-1/12 '>
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/71/Black.png" className='h-full w-full rounded-full shadow-2xl shadow-black' alt="ll" />
            </div>
            <div className='flex justify-between w-8/9'>
                <div className='h-full flex flex-col justify-center'>
                    <h2 className='font-bold md:text-2xl'>John Doe</h2>
                    <h6 className='text-gray-700'>+(011) 09143568789980</h6>
                </div>
                <div className='h-full flex flex-col justify-center'>
                    <span className='p-3 bg-black text-white rounded-full'>Invite</span>
                    
                </div>
            </div>
        </div>
    )
}

export default InviteItem