import React from 'react'

function ForgotPassword() {
    return (
        <>
            <div className='container py-10 px-5 min-h-1/2 max-w-1/3' style={{ backgroundColor: '' }}>
                <p className='mb-12'>Enter your registered email or phone number to receive a OTP to reset your password</p>
                {/* <div className="relative mb-3">
                    <input type="email" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                    <label for="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"><i className="fa-solid fa-envelope"></i>Email</label>
                </div>
                <div className="relative mb-3">
                    <input type="text" id="floating_outlined" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                    <label for="floating_outlined" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"><i class="fa-solid fa-phone"></i>Phone Number</label>
                </div> */}
                <input type="email" placeholder="Email" className="w-full px-4 py-3 mb-3 rounded-md bg-gray-600 text-white placeholder-white" />
                <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 mb-3 rounded-md bg-gray-600 text-white placeholder-white" />

                <button class="w-full bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
                    Continue
                    <span className='p-1 bg-white rounded-full ml-10'>
                        <i className="fa-solid fa-arrow-right text-black"></i>
                    </span>
                </button>
            </div>
        </>
    )
}

export default ForgotPassword