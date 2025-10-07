import React from 'react'

function AppHeader({title}) {
  return (
    <>
    <div className='w-full flex justify-start items-center bg-black h-12'>
        <span className='p-1 me-3 border-2 border-white rounded-full'>
            <i className="fa-solid fa-arrow-left text-white"></i>
        </span>
        <h1 className=' text-start text-white'>{title}</h1>
    </div>
    </>
  )
}

export default AppHeader