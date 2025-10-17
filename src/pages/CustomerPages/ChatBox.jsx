import React from 'react'
import AppHeader from '../../components/Customer_components/AppHeader'
function ChatBox() {
    return (
        <>
            <div className='w-full min-h-screen'>
                <AppHeader title={'CHAT'} settings={true} search={true}/>
            </div>
        </>
    )
}

export default ChatBox