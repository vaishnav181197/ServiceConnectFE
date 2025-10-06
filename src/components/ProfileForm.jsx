import React from 'react'

function ProfileForm() {
    return (
        <>
            <div className='w-1/2 flex flex-col justify-around mt-10'>
                <div className='w-fit mx-auto border border-gray-800 p-2 mb-3 rounded-full'>
                    <img src="https://static.thenounproject.com/png/3270782-200.png" style={{ height: '60px' }} alt="profilelogo" />
                </div>
                <input type="text" className='w-full border rounded bg-gray-500 mb-3 placeholder-white' placeholder='Full Name' />
                <input type="text" className='w-full border rounded bg-gray-500 mb-3 placeholder-white' placeholder='Address' />
                <input type="text" className='w-full border rounded bg-gray-500 mb-3 placeholder-white' placeholder='Date Of Birth' />
                <input type="text" className='w-full border rounded bg-gray-500 mb-3 placeholder-white' placeholder='Email' />
                <input type="text" className='w-full border rounded bg-gray-500 mb-3 placeholder-white' placeholder='( +1 )  724-848-1225' />
                <select name="" className='w-full bg-gray-500 rounded placeholder-white mb-3' id="">
                    <option value="" selected>Gender</option>
                    <option value="" >Male</option>
                    <option value="" >Female</option>
                    <option value="" >Others</option>
                </select>
                <input type="text" className='w-full border rounded bg-gray-500 mb-3 placeholder-white' placeholder='House Name' />
                <input type="text" className='w-full border rounded bg-gray-500 mb-3 placeholder-white' placeholder='Land Mark' />
                <input type="text" className='w-full border rounded bg-gray-500 mb-3 placeholder-white' placeholder='Pincode' />
                <input type="text" className='w-full border rounded bg-gray-500 mb-3 placeholder-white' placeholder='District' />
                <input type="text" className='w-full border rounded bg-gray-500 mb-3 placeholder-white' placeholder='State' />
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

export default ProfileForm