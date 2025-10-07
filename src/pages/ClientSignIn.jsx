import React from 'react'
import AuthHeader from '../components/AuthHeader'  
import AuthForm from '../components/AuthForm'
import AuthFooter from '../components/AuthFooter'
function ClientSignIn() {
    
  return (
    <>
    <div className='container bg-gray-200 py-10 min-h-screen' style={{backgroundColor:''}}>
        <AuthHeader/>
        <AuthForm signin={true}/>
        <AuthFooter signin={true}/>  
    </div>
    </>
  )
}

export default ClientSignIn