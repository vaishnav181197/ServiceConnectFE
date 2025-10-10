import React from 'react'
import AuthHeader from '../../components/Customer_components/AuthHeader'
import AuthForm from '../../components/Customer_components/AuthForm'
import AuthFooter from '../../components/Customer_components/AuthFooter'

function ClientAuth() {
  return (
    <>
        <div className='container bg-gray-200 py-10 min-h-screen' style={{backgroundColor:''}}>
            <AuthHeader />
            <AuthForm />
            <AuthFooter />
        </div>
    </>
  )
}

export default ClientAuth