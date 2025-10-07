import React from 'react'

function Search() {
    return (
        <>
            <div className='w-full h-fit mx-auto'>
                <div className='bg-gray-500 p-3 rounded-lg flex justify-between items-center'>
                    <span>
                        <i className="fa-solid text-white fa-magnifying-glass"></i>
                    </span>
                    <span className='text-white'>
                        Search for...
                    </span>
                    <span>
                        <i className="fas text-white fa-filter"></i>

                    </span>
                </div>
                <div className='w-full grid grid-cols-3 border-3 bg-white rounded-full mt-3'>
                    <button className='bg-white rounded-full hover:bg-black hover:text-white'>
                        Near By
                    </button>
                    <button className='bg-white rounded-full hover:bg-black hover:text-white'>
                        10KM
                    </button>
                    <button className='bg-white rounded-full hover:bg-black hover:text-white'>
                        All
                    </button>
                </div>
                
            </div>
        </>
    )
}

export default Search