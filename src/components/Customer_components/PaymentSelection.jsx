import React from 'react'
import CourseItem from '../Customer_components/CourseItem'

function PaymentSelection() {
    return (
        <>
            <div className='w-full min-h-screen p-5 md:p-20'>
                <CourseItem />
                <p className='my-4 text-center text-gray-700'>Select Payment Methods You Want To Choose</p>
                <div className='mt-10 p-2 bg-white text-xl rounded-lg flex justify-end gap-5 items-center shadow-2xl'>
                    <h2>Paypal</h2>
                    <input type="radio" className='' name="pay" id="" />
                </div>
                <div className='mt-5 p-2 bg-white text-xl rounded-lg flex justify-end gap-5 items-center shadow-2xl'>
                    <h2>Google Pay</h2>
                    <input type="radio" name="pay" id="" />
                </div>
                <button className='bg-black rounded-full text-white text-2xl float-end mt-20 py-5 px-7'>+</button>
                <button class="w-full bg-black mt-5 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
                    Enroll Course - 55$
                    <span className='p-1 bg-white rounded-full ml-10'>
                        <i className="fa-solid fa-arrow-right text-black"></i>
                    </span>
                </button>
            </div>
        </>
    )
}

export default PaymentSelection