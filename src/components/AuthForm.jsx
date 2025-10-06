import React from 'react'

function AuthForm({ signin }) {
    return (
        <>
            <div className='w-full flex justify-center mt-10'>
                <form action="" className='w-1/3 space-y-5'>
                    {signin ?
                        <>
                            <h3 className='text-start'>Let's Sign in..!</h3>
                            <p className='text-start'>Sign in to your Account to continue your courses</p>
                        </>
                        :
                        <h3 className='text-start'>Getting Started..!</h3>

                    }
                    <div class="relative">
                        <input type="email" id="floating_outlined" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label for="floating_outlined" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"><i className="fa-solid fa-envelope"></i>Email</label>
                    </div>
                    <div class="relative">
                        <input type="password" id="floating_outlined" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label for="floating_outlined" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"><i className="fa-solid fa-lock"></i>Password</label>
                    </div>
                    {
                        !signin &&
                        <div class="relative">
                            <input type="text" id="floating_outlined" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label for="floating_outlined" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"><i className="fa-solid fa-lock"></i>Confirm Password</label>
                        </div>
                    }

                    <div className='w-full'>
                        {
                            !signin &&
                            <div className='w-full py-3'><input type="radio" name="" id="" /> Agree to Terms & Conditions</div>
                        }
                        {
                            signin &&
                            <div className='w-full flex justify-between py-3'>
                                <div><input type="checkbox" name="" id="" /> Remember Me</div>
                                <div className='underline'>Forgot Password?</div>
                            </div>
                        }

                        <button class="w-full bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
                            {
                                signin ? 'Sign In' : 'Sign Up'
                            }
                            <span className='p-1 bg-white rounded-full ml-10'>
                                <i className="fa-solid fa-arrow-right text-black"></i>
                            </span>
                        </button>
                    </div>

                </form>
            </div>
        </>
    )
}

export default AuthForm