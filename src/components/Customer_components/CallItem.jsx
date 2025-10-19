import React from 'react'

function CallItem() {
    return (
        <>
            <div className='w-full bg-white flex gap-3 p-6 rounded-2xl shadow-2xl'>
                <div className='flex items-center h-full w-1/9 '>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/71/Black.png" className='h-full w-full rounded-full shadow-2xl shadow-black' alt="ll" />
                </div>
                <div className='flex justify-between w-8/9'>
                    <div className='h-full flex flex-col justify-center'>
                        <h2 className='font-bold md:text-2xl'>John Doe</h2>
                        <h6 className=' text-gray-700'>
                            <span className='border-e-2 text-center pe-5'>
                                <i className="fa-solid fa-plus"></i>
                                Incoming
                            </span>
                            <span className='text-center px-5'>
                                Nov 05,202X
                            </span>
                        </h6>
                    </div>
                    <div className='h-full flex flex-col justify-center'>
                       <i className="fa-solid fa-phone-volume md:text-4xl"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CallItem