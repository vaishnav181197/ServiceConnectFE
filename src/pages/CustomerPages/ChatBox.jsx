import React from 'react'
import AppHeader from '../../components/Customer_components/AppHeader'
import Toolbar from '../../components/Customer_components/Toolbar'
import ChatList from '../../components/Customer_components/ChatList'
function ChatBox() {
    return (
        <>
            <div className='w-full min-h-screen bg-gray-200'>
                <AppHeader title={'CHAT'} settings={true} search={true}/>
                <ChatList/>
                <Toolbar/>
            </div>
        </>
    )
}

export default ChatBox