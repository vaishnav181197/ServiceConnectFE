import React from 'react'
import AppHeader from '../../components/Customer_components/AppHeader'
import Toolbar from '../../components/Customer_components/Toolbar'
import JobList from '../../components/Customer_components/JobList'

function ActiveServices() {
  return (
    <>
        <div className='w-full min-h-screen bg-gray-200 flex flex-col'>
            <AppHeader title={'JOBS'} settings={true} search={true}/>
            <JobList/>
            <Toolbar/>
        </div>
    </>
  )
}

export default ActiveServices