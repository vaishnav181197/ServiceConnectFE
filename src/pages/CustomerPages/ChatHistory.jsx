import React from 'react'
import AppHeader from '../../components/Customer_components/AppHeader'
import ReceivedMsg from '../../components/Customer_components/ReceivedMsg'
import SendMsg from '../../components/Customer_components/SendMsg'
import MsgForm from '../../components/Customer_components/MsgForm'

function ChatHistory() {
    return (
        <>
            <AppHeader title={'John Doe'} call={true} whiteheader={true} search={true} />
            <div className='w-full text-center mt-5'>
                <span className='font-bold px-3 py-1 bg-blue-200 rounded-xs shadow-2xl shadow-black'>Today</span>
                <div className='px-10 py-10 mb-20 md:px-20'>
                    <ReceivedMsg />
                    <SendMsg />
                    <ReceivedMsg />
                </div>
                <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] sm:w-[80%] md:w-[60%]">
                    <MsgForm />
                </div>
            </div>
        </>
    )
}

export default ChatHistory