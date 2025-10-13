import React from 'react'
import { Link } from 'react-router-dom'

function AlertModal({ content, pay }) {
    return (
        <>
            <div className='container bg-gray-100 shadow flex flex-col justify-around items-center p-4 w-fit min-h-1/2  border-3 border-black rounded-xl '>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRD9watd98GuxuplYkqW5OizlYfQa_Iy4_3g&s" alt="logo" style={{ height: '100px', width: '100px' }} />
                <h2 className='font-extrabold'>Congratulations!</h2>
                <p className='text-center w-1/2'>{content}
                </p>
                {
                    pay &&
                    <>
                        <Link className='underline text-green-600 font-bold mt-2'>Watch the Course</Link>
                        <button class="w-1/2 mx-auto shadow-2xl bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
                            E-Receipt
                            <span className='p-1 bg-white rounded-full ml-10'>
                                <i className="fa-solid fa-arrow-right text-black"></i>
                            </span>
                        </button>
                    </>
                }
            </div>
        </>
    )
}

export default AlertModal