import React from 'react'

function ProfileForm() {
    return (
        <>
            <div className='w-full flex flex-col items-center'>
                <div className='w-1/2 flex flex-col justify-around mt-10'>
                    {/* Avatar */}
                    <div className="flex flex-col items-center mb-6">
                        <div className="w-20 h-20 bg-gray-400 rounded-full flex items-center justify-center text-white text-2xl">
                            👤
                        </div>
                    </div>


                    {/* Input Fields */}
                    <input type="text" placeholder="Full Name" className="w-full px-4 py-3 mb-3 rounded-md bg-gray-600 text-white placeholder-white" />
                    <input type="text" placeholder="Address" className="w-full px-4 py-3 mb-3 rounded-md bg-gray-600 text-white placeholder-white" />
                    <input type="date" placeholder="Date of Birth" className="w-full px-4 py-3 mb-3 rounded-md bg-gray-600 text-white" />
                    <input type="email" placeholder="Email" className="w-full px-4 py-3 mb-3 rounded-md bg-gray-600 text-white placeholder-white" />
                    <input type="tel" placeholder="(+1) 724-848-1225" className="w-full px-4 py-3 mb-3 rounded-md bg-gray-600 text-white placeholder-white" />


                    <select className="w-full px-4 mb-3 py-3 rounded-md bg-gray-600 text-white">
                        <option>Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                    </select>
                    <input type="text" placeholder="House Name" className="w-full px-4 py-3 mb-3 rounded-md bg-gray-600 text-white placeholder-white" />
                    <input type="text" placeholder="LandMark" className="w-full px-4 py-3 mb-3 rounded-md bg-gray-600 text-white placeholder-white" />
                    <input type="number" placeholder="Pincode" className="w-full px-4 py-3 mb-3 rounded-md bg-gray-600 text-white placeholder-white" />
                    <input type="text" placeholder="District" className="w-full px-4 py-3 mb-3 rounded-md bg-gray-600 text-white placeholder-white" />
                    <input type="text" placeholder="State" className="w-full px-4 py-3 mb-3 rounded-md bg-gray-600 text-white placeholder-white" />
            
                    <button class="w-full bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
                        Continue
                        <span className='p-1 bg-white rounded-full ml-10'>
                            <i className="fa-solid fa-arrow-right text-black"></i>
                        </span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default ProfileForm