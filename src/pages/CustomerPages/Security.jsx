import React, { useState } from 'react'
import AppHeader from '../../components/Customer_components/AppHeader'

function Security() {
    const [settings, setSettings] = useState({
        RememberMe: false,
        BiometricID: false,
        FaceID: false,
    });
    const handleToggle = (key) => {
        setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
    };
    return (
        <div className='w-full h-screen'>
            <AppHeader title={'SECURITY'} />
            <div className='w-full h-full flex flex-col justify-between'>
                <div className="space-y-4 mt-4">
                    {[
                        { key: "RememberMe", label: "Remember Me" },
                        { key: "BiometricID", label: "Biometric ID" },
                        { key: "FaceID", label: "Face ID" },

                    ].map((item) => (
                        <div
                            key={item.key}
                            className="flex justify-between items-center px-4 pb-3 last:border-none md:px-10"
                        >
                            <span className="text-gray-700 text-sm sm:text-base">
                                {item.label}
                            </span>
                            <button
                                onClick={() => handleToggle(item.key)}
                                className={`relative w-10 h-5 rounded-full transition-colors duration-300 ${settings[item.key] ? "bg-gray-900" : "bg-gray-200"
                                    }`}
                            >
                                <span
                                    className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${settings[item.key] ? "translate-x-5" : ""
                                        }`}
                                ></span>
                            </button>
                        </div>
                    ))}
                    <div className="flex justify-between items-center px-4 pb-3 last:border-none md:px-10">
                        <span className="text-gray-700 text-sm sm:text-base">
                            Google Authenticator
                        </span>
                        <i className="fa-solid fa-angle-right"></i>
                    </div>
                </div>
                <div className='w-full px-10 py-3'>
                    <button className='w-full text-center bg-gray-300 shadow p-3 rounded-full shadow-black'>Change Pin</button>
                    <button className='w-full text-center bg-black text-white mt-5 shadow p-3 rounded-full shadow-black'>Change Password</button>
                </div>
            </div>
        </div>
    )
}

export default Security