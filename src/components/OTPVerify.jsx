import React from 'react'

function OTPVerify() {
    return (
        <>
            <div className='w-full flex justify-center h-fit mt-10 '>
                <div className='w-2/4 flex flex-col justify-around items-center'>
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
                    <div className="grid grid-cols-3 gap-4 mt-2 max-w-xs">
                        {["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "⌫"].map((key) => (
                            <button
                                key={key}
                                className="w-20 h-14 flex items-center justify-center bg-white rounded-lg shadow text-lg font-semibold hover:bg-gray-200"
                            >
                                {key}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default OTPVerify