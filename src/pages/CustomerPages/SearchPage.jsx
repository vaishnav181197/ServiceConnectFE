import React from 'react'
import AppHeader from '../../components/Customer_components/AppHeader'
import { Link } from 'react-router-dom'

function SearchPage() {
    const recentSearch = [
        "3D Designing",
        "Animation",
        "App Development",
    ]
    return (
        <>
            <div className='w-full min-h-screen flex flex-col bg-gray-200'>
                <AppHeader whiteheader={true} title={'SEARCH'} />
                <div className='w-full h-fit'>
                    <div className='w-3/4 mx-auto bg-gray-500 p-3 rounded-lg flex justify-between items-center'>
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
                </div>
                <div className='mt-10 w-full'>
                    <div className='w-full px-10 flex justify-between'>
                        <h3 className='font-semibold'>Recent Search</h3>
                        <Link>SEE ALL{'  '}<i className="fa-solid fa-chevron-right"></i> </Link>
                    </div>
                    <div className="w-full flex flex-col p-10">
                        {recentSearch.map((item, index) => (
                            <div className='flex justify-between text-gray-700 mb-3'>
                                <span>{item}</span>
                                <span><i className="fa-solid fa-xmark"></i></span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchPage