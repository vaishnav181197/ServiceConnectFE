import React from 'react'

function MsgForm() {
    return (
        <>
           
            <div className="w-full flex items-center bg-white rounded-full shadow-sm px-4 py-2 sm:px-5 sm:py-3 max-w-2xl mx-auto border border-gray-200">
                {/* Input Field */}
                <input
                    type="text"
                    placeholder="Message"
                    className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-sm sm:text-base"
                />

                {/* Attachment Icon */}
                <button
                    type="button"
                    className="text-gray-400 hover:text-gray-600 transition-colors mx-2"
                >
                   <i className="fa-solid fa-paperclip"></i>
                </button>

                {/* Mic Button */}
                <button
                    type="button"
                    className="bg-gray-900 text-white rounded-full p-2 hover:bg-gray-800 transition-all"
                >
                 <i className="fa-solid fa-microphone"></i>
                </button>
            </div>
    


        </>
    )
}

export default MsgForm