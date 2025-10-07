import React from 'react'
import AppHeader from '../components/AppHeader'
import ProfileForm from '../components/ProfileForm'

function AddProfile() {
  return (
        <>
    <div className='w-full min-h-screen flex flex-col bg-gray-200'>
        <AppHeader title={'FILL YOUR PROFILE'}/>
        <ProfileForm />
    </div>
    </>
  )
}

export default AddProfile