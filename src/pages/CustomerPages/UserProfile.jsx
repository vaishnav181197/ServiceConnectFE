import React from 'react'
import AppHeader from '../../components/Customer_components/AppHeader'
import Toolbar from '../../components/Customer_components/Toolbar'
import UserProfileItem from '../../components/Customer_components/UserProfileItem'

function UserProfile() {
  return (
    <>
        <div className='w-full min-h-screen bg-gray-200 '>
            <AppHeader title={'PROFILE'}/>
            <UserProfileItem/>
            <Toolbar/>
        </div>
    </>
  )
}

export default UserProfile