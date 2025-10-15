import React from 'react'

function TransactionItem() {
  return (
    <>
    <div className='w-full h-fit flex bg-white p-1 rounded-lg border-0 shadow-2xl'>
        <div className='w-1/4 py-4'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNa1JGLFIadWHMQ0KvIuKWYGl-cxLwGlI2WA&s" className='rounded-lg' alt="transact" />
        </div>
        <div className='w-3/4 p-4'>
            <h1>Build Personal Branding</h1>
            <h4 className='text-gray-600'>Web Designer</h4>
            <span className='px-3 text-white bg-green-800'>Paid</span>
        </div>
    </div>
    </>
  )
}

export default TransactionItem