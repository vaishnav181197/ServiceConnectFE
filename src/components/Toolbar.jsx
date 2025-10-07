import React from 'react'

function Toolbar() {
  return (
    <>
        <div className='w-3/4 sticky bottom-4 left-1/2 transform -translate-x-1/2 mx-auto my-5 rounded-lg h-fit bg-gray-600 text-white p-3 flex justify-around items-center'>
            <i class="fa-solid fa-house"></i>
            <i class="fa-solid fa-book-bookmark"></i>
            <i class="fa-solid fa-clock"></i>
            <i class="fa-solid fa-newspaper"></i>
            <i class="fa-solid fa-question"></i>
        </div>
    </>
  )
}

export default Toolbar