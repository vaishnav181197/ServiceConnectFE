import React from 'react'

function ReviewForm() {
  return (
    <>
    <div className='w-full mt-5'>
        <h2 className='font-bold'>Add Photo (Or) Video</h2>
        <label htmlFor="fl" className='my-2'>
            <input type="file" className='hidden' id='fl' />
            <div className='bg-white w-full flex flex-col justify-center items-center p-10 shadow-2xl rounded-2xl'>
                <i className="fa-solid text-5xl fa-cloud-arrow-up"></i>
                <p>Click here to Upload</p>
            </div>
        </label>
        <h2 className='font-bold mt-4'>Write Your Review</h2>
        <textarea name="" className='w-full bg-white rounded-2xl shadow-2xl' placeholder='Would you like to write anything about this product?' rows={'8'} id=""></textarea>
        <button className='w-full bg-black text-white p-4 rounded-full'>Submit Review</button>
    </div>
    </>
  )
}

export default ReviewForm