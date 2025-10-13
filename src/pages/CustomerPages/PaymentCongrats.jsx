import React from 'react'
import AlertModal from '../../components/Customer_components/AlertModal'


function PaymentCongrats() {
  return (
    <>
        <div className='w-full min-h-screen flex justify-center items-center bg-gray-900'>
            <AlertModal content={'Your Payment is Successfully. Purchase a New Course'} pay={true}/>
        </div>
    </>
  )
}

export default PaymentCongrats