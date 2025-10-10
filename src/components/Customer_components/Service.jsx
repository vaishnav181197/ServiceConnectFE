import React from 'react'

function Service({ image, service, title, rating, price_range, reviews }) {
  return (
    <>
      <div className='w-60 shadow-lg h-60 bg-white rounded-lg p-2 m-2 flex-shrink-0'>
        <img src={image} alt={service} className='w-full h-24 object-contain' />
        <div className='flex justify-between items-center'>
          <h4 className='font-light mt-2'>{service}</h4>
          <i class="fa-regular fa-bookmark"></i>
        </div>
        <p className='text-sm text-gray-600'>{title}</p>
        <div className='grid grid-cols-3 text-sm text-gray-600 mt-2'>
          <span className='border-e-2 border-black'>RS{price_range}</span>
          <span className='border-e-2 border-black'><i class="fa-solid fa-star text-yellow-300 mx-3"></i> {rating}</span>
          <span>{' '}{reviews} reviews</span>
        </div>

      </div>
    </>
  )
}

export default Service