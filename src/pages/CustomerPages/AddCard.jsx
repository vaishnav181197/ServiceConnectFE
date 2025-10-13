import React from 'react'
import AppHeader from '../../components/Customer_components/AppHeader'
import AddCardForm from '../../components/Customer_components/AddCardForm'

function AddCard() {
  return (
    <>
        <div className='w-full min-h-screen bg-gray-200 flex-flex-col'>
            <AppHeader title={'ADD CARD'}/>
            <AddCardForm/>
        </div>
    </>
  )
}

export default AddCard