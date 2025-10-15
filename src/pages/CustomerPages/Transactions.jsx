import React from 'react'
import AppHeader from '../../components/Customer_components/AppHeader'
import TransactionItem from '../../components/Customer_components/TransactionItem'
import Toolbar from '../../components/Customer_components/Toolbar'


function Transactions() {
    
  return (
    <>
    <div className='w-full min-h-screen bg-gray-200 '>
       <AppHeader title={'TRANSACTIONS'} settings={true} search={true}/>
       <div className='w-full grid grid-cols-1 p-5 gap-3  md:grid-cols-3'>
            <TransactionItem/>
            <TransactionItem/>
            <TransactionItem/>
            <TransactionItem/>
            <TransactionItem/>
            <TransactionItem/>
       </div>
       <Toolbar/>
    </div>
    </>
  )
}

export default Transactions