import React from 'react'

function AlertModal() {
    return (
        <>
            <div className='container flex flex-col justify-around items-center p-4 w-fit min-h-1/2  border-2 border-black rounded-lg '>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRD9watd98GuxuplYkqW5OizlYfQa_Iy4_3g&s" alt="logo" style={{ height: '100px', width: '100px' }} />
                <h2 className='font-extrabold'>Congratulations!</h2>
                <p className='text-center w-1/2'>
                    Your Account is Ready to Use. You will be redirected to the Home Page in a Few Seconds.</p>
            </div>
        </>
    )
}

export default AlertModal