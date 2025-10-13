import React from 'react'
import AppHeader from '../../components/Customer_components/AppHeader'
import Reciept from '../../components/Customer_components/Reciept'

function Ereciept() {
  return (
    <>
    <div className='w-full min-h-screen bg-gray-200 flex flex-col'>
        <AppHeader title={'ERECIEPT'} option={true}/>
        <Reciept/>
    </div>
    </>
  )
}

export default Ereciept