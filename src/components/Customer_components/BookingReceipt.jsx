import React from 'react'

function BookingReceipt() {
    return (
        <>
            <div className='w-full min-h-full p-5 mb-3 md:p-20'>
                <div className="w-full h-fit px-5 bg-white rounded-2xl">
                    <h4 className='font-bold'>Appoinment</h4>
                    <div className='w-full flex items-center justify-center gap-2'>
                        <span className='bg-gray-300 p-3 rounded-lg shadow-2xl'>June 25,2024</span>
                        <span className='bg-gray-300 p-3 rounded-lg shadow-2xl'>09:40 AM</span>
                    </div>
                    <h5 className='font-bold'>Invoice</h5>
                    <table className='w-full mt-2'>
                        <thead className='border-b-2'>
                            <tr>
                                <td>Sl.No</td>
                                <td>Description</td>
                                <td>Qty</td>
                                <td>Price</td>
                                <td>Total</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Bulb Change</td>
                                <td>1</td>
                                <td>300</td>
                                <td>300</td>
                            </tr>
                            {/* grant total row */}
                            <tr className='border-t-2'>
                                <td colSpan={'4'} className='text-end'>Grand Total : </td>
                                <td className='text-start'>300/-</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='w-full mt-4 grid grid-cols-2'>
                        <div>
                            <p>Terms and Conditions Valid Upto one month</p>
                            <p className='text-red-500'>Additional Requirements</p>
                            <div className='font-light'>
                                <p>Provide Ladder</p>
                                <p>Bulb Should be provided</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="w-full mt-3 bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
                    Accept & Pay Full<i class="fa-solid fa-angle-down"></i>
                    <span className='p-1 bg-white rounded-full ml-10'>
                        <i className="fa-solid fa-arrow-right text-black"></i>
                    </span>
                </button>
            </div>
        </>
    )
}

export default BookingReceipt