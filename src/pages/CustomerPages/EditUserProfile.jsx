import React from 'react'
import AppHeader from '../../components/Customer_components/AppHeader'
import EditUserProfileForm from '../../components/Customer_components/EditUserProfileForm'

function EditUserProfile() {
  return (
    <>
    <div className="w-full min-h-screen bg-gray-50">
        <AppHeader title={'EDIT PROFILE'}/>
        <EditUserProfileForm/>
    </div>
    </>
  )
}

export default EditUserProfile