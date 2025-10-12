import React from 'react'
import AppHeader from '../../components/Customer_components/AppHeader'
import FilterCategory from '../../components/Customer_components/FilterCategory'


function FilterPage() {
    return (
        <>
            <div className='w-full min-h-screen flex flex-col bg-gray-200'>
                <div className='w-full flex justify-between items-center px-3 m-0'>
                    <AppHeader title={'FILTERS'} whiteheader={true} />
                    <span className=''>Clear</span>
                </div>
                <div className='w-full max-w-md'>
                    <FilterCategory filtername={'SubCategory'} />
                    <FilterCategory filtername={'Price'} />
                    <FilterCategory filtername={'Rating'} />
                </div>

                <button class="w-3/4 mt-10 mx-auto bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
                    Apply
                </button>

            </div>
        </>
    )
}

export default FilterPage