import React, { useState } from 'react'
import ChatItem from './ChatItem'
import CallItem from './CallItem'

function ChatList() {
    const [chat, setChat] = useState(false)

    return (
        <>
            <div className='w-full'>
                <div className='w-full bg-gray-600 p-1 grid grid-cols-2 rounded-full my-3 md:w-3/4 md:mx-auto'>
                    <div className={chat ? 'text-center py-3 rounded-full text-white' : 'text-center py-3 rounded-full text-black bg-white'} onClick={() => setChat(false)}>
                        Chat
                    </div>
                    <div className={chat ? 'text-center py-3 rounded-full text-black bg-white' : 'text-center py-3 rounded-full text-white'} onClick={() => setChat(true)}>
                        Call
                    </div>
                </div>
                {
                    chat ?
                        <div className='w-full flex flex-col px-10 gap-1 md:px-20'>
                            <CallItem/>
                            <CallItem/>
                            <CallItem/>
                        </div>
                        :
                        <div className='w-full flex flex-col px-10 gap-1 md:px-20'>
                            <ChatItem />
                            <ChatItem />
                            <ChatItem />
                            <ChatItem />
                            <ChatItem />
                        </div>

                }

            </div>
        </>
    )
}

export default ChatList