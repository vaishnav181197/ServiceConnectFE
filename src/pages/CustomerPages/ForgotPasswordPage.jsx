import React from 'react'
import AppHeader from '../../components/Customer_components/AppHeader'
import ForgotPassword from '../../components/Customer_components/ForgotPassword'

function ForgotPasswordPage() {
    return (
        <>
            <div className='w-full min-h-screen flex flex-col justify-between items-center bg-gray-200'>
                <AppHeader title={'FORGOT PASSWORD'}/>
                <ForgotPassword />
            </div>
        </>
    )
}

export default ForgotPasswordPage