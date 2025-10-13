import React from 'react'
import AppHeader from '../../components/Customer_components/AppHeader'
import CourseItem from '../../components/Customer_components/CourseItem'
import ReviewForm from '../../components/Customer_components/ReviewForm'

function Review() {
  return (
    <>
    <div className="w-full min-h-screen bg-gray-200 flex flex-col">
        <AppHeader title={'REVIEW'}/>
        <div className='w-full h-fit p-10 md:p-20'>
            <CourseItem/>
            <ReviewForm/>
        </div>
    </div>
    </>
  )
}

export default Review