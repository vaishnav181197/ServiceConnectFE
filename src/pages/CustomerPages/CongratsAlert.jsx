import React from 'react'
import AlertModal from '../../components/Customer_components/AlertModal'
function CongratsAlert() {
  return (
    <>
    <div className="w-full min-h-screen bg-gray-900 flex flex-col justify-center items-center">
        <AlertModal content={' Your Account is Ready to Use. You will be redirected to the Home Page in a Few Seconds.'}/>
    </div> 
    </>
  )
}
export default CongratsAlert