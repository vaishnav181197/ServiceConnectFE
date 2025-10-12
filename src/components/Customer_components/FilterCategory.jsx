import React from 'react'

function FilterCategory({filtername}) {
  return (
    <>
    <div className='w-full h-fit'>
        <h3 className="font-bold">{filtername} :</h3>
        <div className='w-full px-10 mx-auto flex flex-col justify-between'>
            <p>
              <input type="checkbox" name="" id="" />
              {' '}
              xxxx-xxxx-xxxx
            </p>
            <p>
              <input type="checkbox" name="" id="" />
              {' '}
              xxxx-xxxx-xxxx
            </p>
            <p>
              <input type="checkbox" name="" id="" />
              {' '}
              xxxx-xxxx-xxxx
            </p>
        </div>
    </div>
    </>
  )
}

export default FilterCategory