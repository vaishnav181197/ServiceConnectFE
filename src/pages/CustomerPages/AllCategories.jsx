import React from 'react'

import Category from '../../components/Customer_components/Category'
import Toolbar from '../../components/Customer_components/Toolbar'
import AppHeader from '../../components/Customer_components/AppHeader'

function AllCategories() {
     const list=[
        {image:"https://cdn-icons-png.flaticon.com/512/2965/2965567.png",title:"Plumbing"},
        {image:"https://cdn-icons-png.flaticon.com/512/2965/2965567.png",title:"Electrician"},
        {image:"https://cdn-icons-png.flaticon.com/512/2965/2965567.png",title:"Carpenter"},
        {image:"https://cdn-icons-png.flaticon.com/512/2965/2965567.png",title:"Cleaner"},
        {image:"https://cdn-icons-png.flaticon.com/512/2965/2965567.png",title:"Painter"},
        {image:"https://cdn-icons-png.flaticon.com/512/2965/2965567.png",title:"Gardener"},
        {image:"https://cdn-icons-png.flaticon.com/512/2965/2965567.png",title:"Mover"},
        {image:"https://cdn-icons-png.flaticon.com/512/2965/2965567.png",title:"Roofer"},
        {image:"https://cdn-icons-png.flaticon.com/512/2965/2965567.png",title:"Welder"},
        {image:"https://cdn-icons-png.flaticon.com/512/2965/2965567.png",title:"Mechanic"},
    ]
  return (
    <div className='w-full min-h-screen flex flex-col bg-gray-200'>
        <AppHeader title={'ALL CATEGORIES'} settings={true} search={true}/>
        <div className='w-full h-fit p-5 grid grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-5'>
            {list.map((item,index)=>(
                <Category key={index} allcat={true} image={item.image} title={item.title}/>
            ))}
        </div>

        <Toolbar/>

    </div>
  )
}

export default AllCategories