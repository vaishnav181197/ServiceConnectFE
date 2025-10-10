import React from 'react'
import { Link } from 'react-router-dom'
import SProvider from './SProvider'

function ServiceProviders() {
    return (
        <div className='mt-10 px-3'>
            <div className='flex justify-between items-center mb-3'>
                <h3 className='font-bold'>Top Service Providers</h3>
                <Link className='text-sm'>SEE ALL</Link>
            </div>
            <div className='w-full overflow-x-hidden flex flex-row justify-around
                 scrollbar-hide'>
                {/* Example service providers */}  
                <SProvider/> 
                <SProvider/> 
                <SProvider/> 
                <SProvider/> 
            </div>
        </div>
    )
}

export default ServiceProviders