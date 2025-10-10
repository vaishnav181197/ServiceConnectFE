import React from 'react'
import Service from './Service'
import { Link } from 'react-router-dom'

function PopularServices() {
    const services = [
        "All", "Plumbing", "Electrician", "Carpenter"
    ]
    const serviceList = [
        { image: "https://cdn-icons-png.flaticon.com/512/2965/2965567.png", service: "Plumbing" ,title:"Fix leaking pipes",rating:4.5,price_range:"50-100",reviews:120},
        { image: "https://cdn-icons-png.flaticon.com/512/2965/2965567.png", service: "Electrician" ,title:"Install new light fixture",rating:4.0,price_range:"70-150",reviews:80},
        { image: "https://cdn-icons-png.flaticon.com/512/2965/2965567.png", service: "Carpenter" ,title:"Build custom shelves",rating:4.8,price_range:"100-200",reviews:60},
        { image: "https://cdn-icons-png.flaticon.com/512/2965/2965567.png", service: "Cleaner" ,title:"Deep cleaning service",rating:4.3,price_range:"80-120",reviews:90},
        
    ]
    return (
        <>
            <div className='mt-10 px-3'>
                <div className='flex justify-between items-center mb-3'>
                    <h3 className='font-bold'>Popular Services</h3>
                    <Link className='text-sm'>SEE ALL</Link>
                </div>
                <div className='w-full  flex gap-3 my-2'>
                    {services.map((item, index) => (
                        <span className='bg-gray-600 rounded-full py-1 px-3 text-white'>{item}</span>))
                    }
                </div>
                <div className='w-full flex flex-row overflow-x-scroll hide-scrollbar justify-around'>
                    {serviceList.map((item, index) => (
                        <Service key={index} image={item.image} service={item.service} title={item.title} rating={item.rating} price_range={item.price_range} reviews={item.reviews} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default PopularServices