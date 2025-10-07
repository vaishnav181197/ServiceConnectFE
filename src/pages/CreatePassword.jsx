import React from 'react'
import AppHeader from '../components/AppHeader'
import CreatePassForm from '../components/CreatePassForm'
function CreatePassword() {
    return (
        <div className='w-full min-h-screen flex flex-col justify-between items-center bg-gray-200'>
            <AppHeader title={'FORGOT PASSWORD'} />
            <CreatePassForm />
        </div>
    )
}

export default CreatePassword