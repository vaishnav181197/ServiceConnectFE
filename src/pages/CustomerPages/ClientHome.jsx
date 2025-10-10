import React from 'react'
import AppHeader from '../../components/Customer_components/AppHeader'
import Search from '../../components/Customer_components/Search'
import Banner from '../../components/Customer_components/Banner'
import CategoryList from '../../components/Customer_components/CategoryList' 
import PopularServices from '../../components/Customer_components/PopularServices'
import ServiceProviders from '../../components/Customer_components/ServiceProviders'
import Toolbar from '../../components/Customer_components/Toolbar'
function ClientHome() {
    return (
        <>
            <div className='w-full min-h-screen flex flex-col bg-gray-200'>
                <AppHeader profile={true} notific={true} menu={true} title={'SERVICE CONNECT'} />
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