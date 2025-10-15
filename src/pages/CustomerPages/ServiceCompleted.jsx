import React from 'react'
import AlertModal from '../../components/Customer_components/AlertModal'

function ServiceCompleted() {
  return (
    <div className="w-full min-h-screen bg-gray-900 flex flex-col justify-center items-center">
        <AlertModal title={'Service Completed'} content={' Completed Your Course.Write a Review'} service={true}/>
    </div> 
  )
}

export default ServiceCompleted