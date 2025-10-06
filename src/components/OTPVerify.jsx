import React from 'react'

function OTPVerify() {
    return (
        <>
            <div className='w-full flex flex-col justify-around items-center h-min-2/4 '>
                <p className='text-center my-4'>Code has been Send to ( +1 ) ***-***-*529</p>
                <div className='flex space-x-3'>
                    <input type="text" maxLength={1} className='w-12 h-12 border-2 border-gray-300 text-center text-2xl rounded-lg' />
                    <input type="text" maxLength={1} className='w-12 h-12 border-2 border-gray-300 text-center text-2xl rounded-lg' />
                    <input type="text" maxLength={1} className='w-12 h-12 border-2 border-gray-300 text-center text-2xl rounded-lg' />
                    <input type="text" maxLength={1} className='w-12 h-12 border-2 border-gray-300 text-center text-2xl rounded-lg' />

                </div>
                <p>Resend Code in <span className='font-bold'>59s</span></p>
                <div className='w-1/3 flex justify-center'>
                    <button class="w-full bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
                        Verify
                        <span className='p-1 bg-white rounded-full ml-10'>
                            <i className="fa-solid fa-arrow-right text-black"></i>
                        </span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default OTPVerify