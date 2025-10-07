import React from 'react'
import AuthHeader from '../components/AuthHeader'
import AuthForm from '../components/AuthForm'
import AuthFooter from '../components/AuthFooter'

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