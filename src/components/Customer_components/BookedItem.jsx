import React from 'react'

function BookedItem() {
    return (
        <div className="relative bg-white rounded-2xl shadow-md p-4 sm:p-5 w-full max-w-sm mx-auto border border-gray-100">
            {/* Close Icon */}
            <button className="absolute top-3 right-3 text-gray-400 hover:text-gray-600">
                <i className="fa-solid fa-xmark"></i>
            </button>

            {/* Title and View Link */}
            <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-bold text-gray-800">Tap Repair</h2>
                <a href="#" className="text-sm text-blue-600 hover:underline">
                    View
                </a>
            </div>

            {/* User Info */}
            <div className="flex items-center mb-3">
                <div className="w-4 h-4 bg-purple-400 rounded-full mr-2"></div>
                <div>
                    <p className="text-gray-700 font-medium text-sm">Keshavan</p>
                    <p className="text-gray-400 text-xs">Booked</p>
                </div>
            </div>

            {/* Date & Time */}
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-3">
                <div className="flex items-center gap-1">
                    <i className="fa-solid fa-calendar-days"></i>
                    <span>March 20, 2021</span>
                </div>
                <div className="flex items-center gap-1">
                    <i className="fa-solid fa-clock"></i>
                    <span>09.00 – 10.00 AM</span>
                </div>
            </div>

            {/* Status Bar */}
            <div className="bg-gray-900 text-white text-center text-sm rounded-full py-2 font-medium">
                Waiting for Response
            </div>
        </div>
    );
}

export default BookedItem;

