import React from 'react'
import { Link } from 'react-router-dom'

function AuthFooter({ signin }) {
    return (
        <>
            <div className='w-full text-center  my-10'>
                <p className='text-center'>Or Continue With</p>
                <div className='w-full flex justify-center space-x-5 my-5'>
                    <img src="https://cdn-icons-png.flaticon.com/512/720/720255.png" style={{ height: '20px' }} alt="gicon" />
                    <img src="https://cdn-icons-png.flaticon.com/512/721/721335.png" style={{ height: '20px' }} alt="appleicon" />
                </div>
                {signin ?
                    <p>Don't have an Account? <Link to={'/'} className='underline'>Sign Up</Link></p>
                    :
                    <p>Already have an Account? <Link to={'/signin'} className='underline'>Sign In</Link></p>
                }
            </div>
        </>
    )
}

export default AuthFooter