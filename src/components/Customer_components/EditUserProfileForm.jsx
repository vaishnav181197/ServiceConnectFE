import React from 'react'

function EditUserProfileForm() {
    return (
        <>
            <div className='w-full p-5 mt-30'>
                <div className='w-fit h-fit mx-auto my-20 absolute -top-5 left-1/2 -translate-x-1/2'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLHvzyqlpe7Aw_qH5ZR5fvjErwjzNuqIlc6A&s" style={{ height: "100px" }} className='rounded-full border-3 border-green-800' alt="pp" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbIwiKbRMRJkaJBTn7kU1Atnt_Qd6exNbacQ&s" className='rounded-xl border-3 border-green-800 absolute -bottom-2 right-0' style={{ height: '40px' }} alt="llogo" />
                </div>
                <div className='w-full mx-auto p-5 mt-3 md:w-3/4'>
                    <input type="text" className='bg-white shadow-2xl shadow-black w-full rounded-lg h-10 mb-3' placeholder='Full Name' />
                    <input type="text" className='bg-white shadow-2xl shadow-black w-full rounded-lg h-10 mb-3 ' placeholder='Nick Name' />
                    <input type="date" className='bg-white shadow-2xl shadow-black w-full rounded-lg h-10 mb-3 ' placeholder='Date of Birth' />
                    <input type="email" className='bg-white shadow-2xl shadow-black w-full rounded-lg h-10 mb-3 ' placeholder='Email' />
                    <input type="tel" className='bg-white shadow-2xl shadow-black w-full rounded-lg h-10 mb-3 ' placeholder='+(91) 9775653899' />
                    <select name="" className='bg-white shadow-2xl shadow-black w-full rounded-lg h-10 mb-3' id="">
                        <option value="" disabled selected>Gender</option>
                        <option value="">Male</option>
                        <option value="">Female</option>
                        <option value="">Others</option>
                    </select>
                    <input type="text" className='bg-white shadow-2xl shadow-black w-full rounded-lg h-10 mb-3 ' placeholder='Student' />


                </div>
                <div className='w-full mx-auto md:w-3/4'>
                    <button class="w-full bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full relative">
                        Submit
                        <span className='p-1 bg-white rounded-full absolute right-1 top-1'>
                            <i className="fa-solid fa-arrow-right text-black"></i>
                        </span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default EditUserProfileForm