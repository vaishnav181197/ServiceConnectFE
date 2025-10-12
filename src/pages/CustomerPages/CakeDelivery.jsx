// U15
import React from 'react'
import AppHeader from '../../components/Customer_components/AppHeader'
import RequestItem from '../../components/Customer_components/RequestItem'

function CakeDelivery() {
    return (
        <>
            <div className="w-full overflow-x-hidden">
                <AppHeader title={'CAKE DELIVERY'} search={true} settings={true} />

                {/* Location */}
                <div className="px-4 py-5 w-full flex items-center gap-2 text-gray-700">
                    <i className="fa-solid fa-location-dot"></i>
                    <span>[LocationName]</span>
                    <i className="fa-solid fa-pen"></i>
                </div>

                {/* Open Request Banner */}
                <div className="bg-gray-900 text-white py-3 px-5 my-5 rounded-full mx-4">
                    <h2 className="text-white text-sm sm:text-base">
                        Open Request (Request to Random Accounts)
                    </h2>
                </div>

                {/* Filter Buttons */}
                <div className="w-full max-w-md mx-auto grid grid-cols-3 gap-2 border-2 bg-white rounded-full mt-3 p-1">
                    <button className="bg-white rounded-full py-1 hover:bg-black hover:text-white">
                        Near By
                    </button>
                    <button className="bg-white rounded-full py-1 hover:bg-black hover:text-white">
                        10KM
                    </button>
                    <button className="bg-white rounded-full py-1 hover:bg-black hover:text-white">
                        All
                    </button>
                </div>

                {/* Requests List */}
                <div className="w-full h-fit my-5 px-3 space-y-3">
                    <RequestItem />
                    <RequestItem />
                    <RequestItem />
                </div>
            </div>
        </>
    )
}

export default CakeDelivery
