import React from 'react'

function AddCardForm() {
    return (
        <>
            <div className='w-full min-h-screen p-5'>
                <div className='w-1/2 mx-auto h-1/6 md:w-1/4'>
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/008/490/562/small_2x/credit-card-transparent-background-png.png" className='w-full h-fit' alt="" />
                </div>
                <div className='px-10'>
                    <h2 className='font-bold mt-3'>Card Name*</h2>
                    <input type="text" className='w-full bg-white p-2 rounded-lg' />
                    <h2 className='font-bold mt-3'>Card Number*</h2>
                    <input type="password" className='w-full bg-white p-2 rounded-lg' />
                    <div className='w-full grid grid-cols-2 gap-2'>
                        <div>
                            <h2 className='font-bold'>Expiry Date*</h2>
                            <input type="date" className='w-full bg-white p-2 rounded-lg' />
                        </div>
                        <div>
                            <h2 className='font-bold'>CVV</h2>
                            <input type="text" className='w-full bg-white p-2 rounded-lg' />
                        </div>
                    </div>
                    <button className='w-full bg-black text-white mt-10 py-4 relative rounded-full shadow-2xl'>
                        Add New Card
                        <span className='p-3 bg-white rounded-full absolute right-1 top-1'>
                            <i className="fa-solid fa-arrow-right text-black"></i>
                        </span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default AddCardForm