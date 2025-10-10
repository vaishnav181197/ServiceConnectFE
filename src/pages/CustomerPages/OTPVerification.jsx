import React from 'react'
import AppHeader from '../../components/Customer_components/AppHeader'
import OTPVerify from '../../components/Customer_components/OTPVerify'
function OTPVerification() {
  return (
    <>
    <div className='w-full h-screen flex flex-col bg-gray-200'>
        <AppHeader title={'OTP VERIFICATION'}/>
        <OTPVerify />
    </div>
    </>
  )
}

export default OTPVerification