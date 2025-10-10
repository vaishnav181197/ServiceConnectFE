import React from 'react'
import AppHeader from '../../components/Customer_components/AppHeader'
import Toolbar from '../../components/Customer_components/Toolbar'
import Category from '../../components/Customer_components/Category'

function DeliveryServices() {
    const list = [
        { image: "https://cdn-icons-png.flaticon.com/512/2965/2965567.png", title: "Bouquet Delivery" },
        { image: "https://cdn-icons-png.flaticon.com/512/2965/2965567.png", title: "Food Delivery" },
        {image:'https://cdn-icons-png.flaticon.com/512/2965/2965567.png',title:"Cake Delivery"},
        {image:'https://cdn-icons-png.flaticon.com/512/2965/2965567.png',title:"Driver"},
        {image:'https://cdn-icons-png.flaticon.com/512/2965/2965567.png',title:"Packers & Movers"},
        {image:'https://cdn-icons-png.flaticon.com/512/2965/2965567.png',title:"Pickup & Delivery"},
    ]
    return (
        <>
            <div className='w-full min-h-screen flex flex-col bg-gray-200'>
                <AppHeader title={'DELIVERY SERVICES'} settings={true} search={true} />
                <div className='w-full h-fit p-5 grid grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-5'>
                    {list.map((item, index) => (
                        <Category key={index} allcat={true} image={item.image} title={item.title} />
                    ))}
                </div>

                <Toolbar />

            </div>
        </>
    )
}

export default DeliveryServices