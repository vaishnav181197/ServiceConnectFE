import React from 'react'
import AppHeader from '../components/AppHeader'
import Search from '../components/Search'
import Banner from '../components/Banner'
import CategoryList from '../components/CategoryList' 
import PopularServices from '../components/PopularServices'
import ServiceProviders from '../components/ServiceProviders'
import Toolbar from '../components/Toolbar'
function ClientHome() {
    return (
        <>
            <div className='w-full min-h-screen flex flex-col bg-gray-200'>
                <AppHeader title={'SERVICE CONNECT'} />
                <div className='w-full h-full p-5'>
                    <Search />
                    <Banner/>
                    <CategoryList/>
                    <PopularServices/>
                    <ServiceProviders/>
                </div>
                <Toolbar/>
            </div>
        </>
    )
}

export default ClientHome