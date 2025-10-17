import React from 'react'
import FAQ from './FAQ'
import ContactUs from './ContactUs'
function HelpCenterList() {
  return (
    <>
        <div className='w-full min-h-3/4'>
            <div className='w-full grid grid-cols-2'>
                <div className='text-center p-4'>
                    FAQ
                </div>
                <div className='text-center p-4'>
                    CONTACT US
                </div>
            </div>
            <FAQ/>
            <ContactUs/>
        </div>
    </>
  )
}

export default HelpCenterList