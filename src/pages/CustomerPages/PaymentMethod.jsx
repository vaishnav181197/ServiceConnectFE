import React from 'react'
import AppHeader from '../../components/Customer_components/AppHeader'
import PaymentSelection from '../../components/Customer_components/PaymentSelection'

function PaymentMethod() {
  return (
    <>
    <div className='w-full min-h-screen bg-gray-200 flex flex-col'>
        <AppHeader title={'PAYMENT METHODS'}/>
        <PaymentSelection/>
    </div>
    </>
  )
}

export default PaymentMethod