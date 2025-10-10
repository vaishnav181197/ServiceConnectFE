import React from 'react'
import Category from './Category'
import { Link } from 'react-router-dom'
function CategoryList() {
    const list=[
        {image:"https://cdn-icons-png.flaticon.com/512/2965/2965567.png",title:"Plumbing"},
        {image:"https://cdn-icons-png.flaticon.com/512/2965/2965567.png",title:"Electrician"},
        {image:"https://cdn-icons-png.flaticon.com/512/2965/2965567.png",title:"Carpenter"},
        {image:"https://cdn-icons-png.flaticon.com/512/2965/2965567.png",title:"Cleaner"},
    ]
    return (
        <>
            <div className='mt-10 px-3'>
                <div className='flex justify-between items-center mb-3'>
                    <h3 className='font-bold'>Service Category</h3>
                    <Link className='text-sm'>SEE ALL</Link>
                </div>
                <div className='w-full  flex justify-around overflow-hidden'>
                    {list.map((item,index)=>(
                        <Category key={index} image={item.image} title={item.title}/>
                    ))}
                    
                    
                </div>
            </div>
        </>
    )
}

export default CategoryList