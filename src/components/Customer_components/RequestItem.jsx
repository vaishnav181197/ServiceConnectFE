import React from 'react'

function RequestItem() {
    return (
    <div className="w-3/4 mx-auto my-3 bg-white rounded-2xl shadow-md overflow-hidden flex flex-row md:flex-col">
      {/* Image */}
      <div className="w-1/3 md:w-full bg-gray-800">
        <img
          src="https://via.placeholder.com/150"
          alt="Service"
          className="w-full h-full object-cover md:h-40"
        />
      </div>

      {/* Content */}
      <div className="w-2/3 md:w-full p-3 flex flex-col justify-between">
        {/* Top Row */}
        <div className="flex justify-between items-start">
          <p className="text-xs text-orange-600 font-medium">3 km away</p>
          <span className="text-xs text-gray-500 flex items-center">
            <i className="fa-solid fa-bookmark text-green-600 mr-1"></i>
            Booked Once
          </span>
        </div>

        {/* Middle Content */}
        <div className="mt-1">
          <h2 className="text-sm md:text-base font-semibold text-gray-900">
            Thomas
          </h2>
          <p className="text-base md:text-lg font-bold text-gray-800">
            ₹280 - 300
          </p>
        </div>

        {/* Bottom Row */}
        <div className="flex items-center text-xs md:text-sm text-gray-600 mt-2">
          <i className="fa-solid fa-star text-yellow-500 mr-1"></i>
          <span className="mr-2">4.2</span>
          <span className="mx-2">|</span>
          <span className="font-medium">78 reviews</span>
        </div>
      </div>
    </div>
  );
}

export default RequestItem