import React from 'react'
import AppHeader from '../../components/Customer_components/AppHeader'
import InviteItem from '../../components/Customer_components/InviteItem'

function InviteFrnd() {
    return (
        <>
            <div className='w-full min-h-screen bg-gray-200'>
                <AppHeader title={'INVITE FRIEND'} settings={true} search={true} />
                <div className='w-full px-10 py-5 md:px-20'>
                    <div className='flex flex-col gap-1 shadow border-b-2 border-b-white pb-3'>
                        <InviteItem />
                        <InviteItem />
                        <InviteItem />
                    </div>

                </div>
                <div className='w-full px-10 pb-10 md:px-20'>
                    <h2 className="font-bold">Share Invite Via</h2>
                    <div className='flex gap-2'>
                        <span className='bg-white rounded-2xl p-2'>
                            <i className="fa-brands text-blue-600 fa-facebook"></i>
                        </span>
                        <span className='bg-white rounded-2xl p-2'>
                            <i className="fa-brands text-blue-600 fa-twitter"></i>
                        </span>
                        <span className='bg-white rounded-2xl p-2'>
                            <i className="fa-brands text-red-800 fa-google"></i>
                        </span>
                        <span className='bg-white rounded-2xl p-2'>
                            <i className="fa-brands text-green-900 fa-whatsapp"></i>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InviteFrnd