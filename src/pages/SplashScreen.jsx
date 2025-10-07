import React from 'react'
import { Link } from 'react-router-dom'


function SplashScreen() {
    return (
        <>
            <div className='w-full min-h-screen bg-gray-900 flex flex-col justify-center items-center'>
                <img src="https://res.cloudinary.com/hy4kyit2a/f_auto,fl_lossy,q_70/learn/modules/connected-app-basics/217e4d6412574a70dd8d873f89cc9a42_badge.png" alt="l" />
                <h2 className='text-white'>Service Connect</h2>
                <div className='w-1/2 h-fit flex flex-col justify-center items-center mt-10 gap-5'>
                    <Link className='w-1/2 p-3 bg-white rounded-full' to={'/signin'}>
                        <span className='p-2 bg-gray-900 rounded-full me-3'>
                            <i className="fa-solid text-white fa-phone"></i>
                        </span>
                        Login with Email/Phone
                    </Link>
                    <Link className='w-1/2 flex p-3 text-white bg-gray-500 rounded-full items-center'>
                        <span className='p-2 bg-white rounded-full me-3'>
                            <img src="https://cdn-icons-png.flaticon.com/512/720/720255.png" style={{ height: '20px' }} alt="gicon" />
                        </span>
                        Login With Google
                    </Link>
                </div>
            </div>
        </>
    )
}

export default SplashScreen