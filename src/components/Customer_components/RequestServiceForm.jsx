import React from 'react'

function RequestServiceForm({ bd, asd }) {
  return (
    <>
      <div className='w-full min-h-full p-5 md:p-20'>

        <div className='w-full flex items-start gap-3'>
          <img src="https://cdn-icons-png.freepik.com/512/6997/6997484.png" className='rounded-full' alt="prfl" height={'70px'} width={'70px'} />
          <div className='flex flex-col'>
            <h2>ServiceProviderName</h2>
            <h6 className='text-gray-700'>Plumber</h6>
          </div>
        </div>

        <div className='w-full flex flex-col gap-2 p-5'>
          <input type="text" className='w-full h-10 rounded-lg shadow bg-white' placeholder='Title' />

          <textarea name="" className='rounded-lg shadow bg-white' rows={'5'} placeholder='Description' id=""></textarea>
          <input type="file" name="" className='w-full h-10 rounded-lg shadow bg-white' id="" />

          <div className='w-full flex items-start gap-5'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbIwiKbRMRJkaJBTn7kU1Atnt_Qd6exNbacQ&s" className='h-20' alt="uuu" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbIwiKbRMRJkaJBTn7kU1Atnt_Qd6exNbacQ&s" className='h-20' alt="uuu" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbIwiKbRMRJkaJBTn7kU1Atnt_Qd6exNbacQ&s" className='h-20' alt="uuu" />
            <span className='p-4 text-5xl'>
              +
            </span>
          </div>
          <div className='w-full h-fit flex flex-col gap-5'>
            <h3 className='font-bold'>Availability{' '}<i className="fa-solid fa-pen-to-square"></i></h3>
            <div className='w-full'>
              <h6>From</h6>
              <div className='w-full grid grid-cols-2 gap-2'>
                <input type="date" name="" className='bg-white rounded-lg shadow p-5' id="" />
                <input type="time" name="" className='bg-white rounded-lg shadow p-5' id="" />
              </div>
            </div>
            <div className='w-full'>
              <h6>To</h6>
              <div className='w-full grid grid-cols-2 gap-2'>
                <input type="date" name="" className='bg-white rounded-lg shadow p-5' id="" />
                <input type="time" name="" className='bg-white rounded-lg shadow p-5' id="" />
              </div>
            </div>
          </div>
        </div>
        {
          bd ?
            <button class="w-full bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
              Reschedule Appoinment
              <span className='p-1 bg-white rounded-full ml-10'>
                <i className="fa-solid fa-arrow-right text-black"></i>
              </span>
            </button>
            :
            <button class="w-full bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
              {
                asd ?
                  <>Completed</>
                  :
                  <>
                    Confirm
                    <span className='p-1 bg-white rounded-full ml-10'>
                      <i className="fa-solid fa-arrow-right text-black"></i>
                    </span>€
                  </>
              }

            </button>

        }



      </div>
    </>
  )
}

export default RequestServiceForm