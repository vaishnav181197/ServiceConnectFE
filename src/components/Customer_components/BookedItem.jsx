import React from 'react'

function BookedItem({ book }) {
    return (
        <div className="relative bg-white rounded-2xl shadow-md p-4 sm:p-5 w-full max-w-sm mx-auto border border-gray-100">
            {/* Close Icon */}
            <button className="absolute top-3 right-3 text-gray-400 hover:text-gray-600">
                <i className="fa-solid fa-xmark"></i>
            </button>

            {/* Title and View Link */}
            <div className="flex justify-start gap-3 items-center mb-2">
                <h2 className="text-lg font-bold text-gray-800">{book.title}</h2>
                <a href="#" className="text-sm text-blue-600 hover:underline">
                    View
                </a>
            </div>

            {/* User Info */}
            <div className="flex items-center mb-3">
                <div className="w-4 h-4 bg-purple-400 rounded-full mr-2"></div>
                <div>
                    <p className="text-gray-700 font-medium text-sm">{book.provider}</p>
                    <p className="text-gray-400 text-xs">{book.status}</p>
                </div>
            </div>

            {/* Date & Time */}
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-3">
                <div className="flex items-center gap-1">
                    <i className="fa-solid fa-calendar-days"></i>
                    <span>{book.date}</span>
                </div>
                <div className="flex items-center gap-1">
                    <i className="fa-solid fa-clock"></i>
                    <span>{book.timeslot}</span>
                </div>
            </div>

            {/* Scheduleddetails */}
            {
                book.status == "Scheduled" &&
                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-3">
                    <div className="flex items-center gap-1">
                        Amount :
                        <span>{book.amount}/-</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <i className="fa-solid text-red-600 fa-circle-info"></i>
                        <span className='text-red-600'>
                            {book.additionalreq &&
                                <>
                                    Additional Requirements
                                </>
                            }
                        </span>
                    </div>
                </div>
            }


            {/* Status Bar */}
            {
                book.status == "Scheduled" ?
                    <button class="w-full bg-green-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
                        Accept & Pay In Advance<i class="fa-solid fa-angle-down"></i>
                        <span className='p-1 bg-white rounded-full ml-10'>
                            <i className="fa-solid fa-arrow-right text-green-500"></i>
                        </span>
                    </button>
                    :
                    <div className="bg-gray-900 text-white text-center text-sm rounded-full py-2 font-medium">
                        Waiting for Response
                    </div>
            }

        </div>
    );
}

export default BookedItem;

