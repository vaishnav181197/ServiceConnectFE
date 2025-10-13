import React from 'react'

function Reciept() {
    return (
        <>
            <div className='w-full min-h-screen p-10'>
                {/* bill icon */}
                <div className='mx-auto w-1/6 h-1/10'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY9KLYG2MUbqH0-BuZoYiOQLjmjT50Bg32zA&s" className='w-full h-auto' alt="bill" />
                </div>
                {/* bar code */}
                <div className='mx-auto w-1/4 h-1/10'>
                    <img src="https://pngimg.com/d/barcode_PNG26.png" className='w-full h-auto' alt="bill" />
                </div>
                <div className='w-full mt-8'>
                    <table className='w-full mx-auto md:w-1/2'>
                        <tr>
                            <th className='text-start py-2'>Name</th>
                            <td className='text-end'>John Doe</td>
                        </tr>
                        <tr>
                            <th className='text-start py-2'>EmailId</th>
                            <td className='text-end'>johndoe@gmail.com</td>
                        </tr>
                        <tr>
                            <th className='text-start py-2'>Course</th>
                            <td className='text-end'>3d Character Illustration...</td>
                        </tr>
                        <tr>
                            <th className='text-start py-2'>Category</th>
                            <td className='text-end'>Web Development</td>
                        </tr>
                    </table>
                    <table className='w-full my-3 mx-auto md:w-1/2'>
                        <tr>
                            <th className='text-start py-2'>TransactionID</th>
                            <td className='text-end'>1hvd5xgyvh <i className="fa-solid fa-copy"></i></td>
                        </tr>
                        <tr>
                            <th className='text-start py-2'>Price</th>
                            <td className='text-end'>$55</td>
                        </tr>
                        <tr>
                            <th className='text-start py-2'>Date</th>
                            <td className='text-end'>Nov 20,202X / 15:45</td>
                        </tr>
                        <tr>
                            <th className='text-start py-2'>Status</th>
                            <td className='text-end'>
                                <span className='px-2 bg-green-600 text-white'>Paid</span>
                            </td>
                        </tr>
                    </table>
                </div>


            </div>
        </>
    )
}

export default Reciept