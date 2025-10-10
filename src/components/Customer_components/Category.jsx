import React from 'react'

function Category({image,title,allcat}) {
  return (
    <div className='w-fit h-fit p-2'>
        <img src={image} alt="catlogo"  className={allcat?'rounded-lg border-2 p-2':'rounded-full border-2'} style={{height:'100px'}} />
        <p className='text-center mt-2 font-semibold'>{title}</p>
    </div>
  )
}

export default Category