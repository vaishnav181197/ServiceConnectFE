import React from 'react'

function AppHeader() {
  return (
    <>
    <div className='w-full flex justify-start bg-blac h-3'>
        <span className='p-2 border-2 border-white rounded-full'>
            <i className="fa-solid fa-arrow-left text-white"></i>
        </span>
        <h1 className='text-2xl text-start text-white'>OTP Verification</h1>
    </div>
    </>
  )
}

export default AppHeader