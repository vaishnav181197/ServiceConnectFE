import React from 'react'
import { Link } from 'react-router-dom'

function ServiceProfile() {
  return (
    <>

      {/* provider details */}
      <div className='w-full h-fit relative p-5 bg-gray-500 flex flex-col gap-5 md:p-10'>
        <div className='absolute bg-blue-800 p-3 rounded-full -top-5 right-25 shadow-2xl'>
          <i className="fa-solid fa-message text-white"></i>
        </div>
        <div className='w-full h-fit p-3 border-2 rounded-lg bg-white shadow-lg flex flex-col gap-3'>
          <div className='w-full flex justify-between items-center'>
            <h6 className='text-orange-600'>3 Km Away</h6>
            <h6>
              <i className="fa-solid text-yellow-400 fa-star" ></i>  4.2 | 200 Reviews
            </h6>
          </div>
          <div>
            <h2 className='font-bold'>William C.Cunningham</h2>
            <h4 className='text-gray-700'>Plumber</h4>
          </div>
          <div>
            <h6><i className="fa-solid fa-video"></i> 21 Videos & images| <i className="fa-solid fa-clock"></i> 2 Services listed</h6>
          </div>
        </div>

        {/* about */}
        <div className='w-full h-fit p-3 border-2 rounded-lg bg-white shadow-lg flex flex-col gap-3'>
          <h2 className='font-bold text-lg'>About</h2>
          <p className='text-gray-700 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
            lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
            lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
          </p>
          <p className='text-gray-700 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis minus, maiores eum, itaque animi aut ab nam corporis aliquam officia natus modi. Unde quasi est, repellendus quam neque saepe.
            <a href="" className='text-black underline'>Read More</a>
          </p>
        </div>

        {/* services */}
        <div className='w-full h-fit p-3 border-2 rounded-lg bg-white shadow-lg flex flex-col gap-3'>
          <h2 className='font-bold text-lg'>Services</h2>
          <h6 className=''> <i className="fa-solid fa-water"></i>  Plumbing</h6>
          <h6 className=''> <i className="fa-solid fa-mobile"></i>  Access Mobile,Tv & Desktop</h6>
        </div>


        {/* Reviews */}
        <div className='w-full h-fit p-3 border-2 rounded-lg bg-white shadow-lg flex flex-col gap-3'>
          <div className='w-full flex justify-between'>
            <h2 className='font-bold'>Reviews</h2>
            <Link>SEE ALL<i className="fa-solid fa-angle-right"></i></Link>
          </div>
          {/* ReviewList */}
          <div className='m-3 w-full h-fit p-2'>
            {/* ReviewItem */}
            <div className='w-full flex items-start gap-2 my-4'>
              <img src="https://png.pngtree.com/png-vector/20230831/ourmid/pngtree-man-avatar-image-for-profile-png-image_9197908.png" className='rounded-full' height={'100px'} width={'100px'} alt="" />
              <div>
                <div className='w-full flex justify-between items-center'>
                  <h3 className='font-bold'>John Doe</h3>
                  <span className='px-2 bg-gray-500 rounded-full'><i className="fa-solid text-yellow-400 fa-star" ></i> 4.5</span>
                </div>
                <div className='mt-3'>
                  <p className='text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident hic nobis eos officia, ipsa harum doloremque delectus quaerat omnis dignissimos sunt quibusdam facere quia, ab cumque reiciendis veniam ducimus inventore?</p>
                  <div className='flex gap-10 font-bold'>
                    <span><i className="fa-solid fa-heart text-red-700"></i>578</span>
                    <span>2 weeks ago</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full flex items-start gap-2 my-4'>
              <img src="https://png.pngtree.com/png-vector/20230831/ourmid/pngtree-man-avatar-image-for-profile-png-image_9197908.png" className='rounded-full' height={'100px'} width={'100px'} alt="" />
              <div>
                <div className='w-full flex justify-between items-center'>
                  <h3 className='font-bold'>John Doe</h3>
                  <span className='px-2 bg-gray-500 rounded-full'><i className="fa-solid text-yellow-400 fa-star" ></i> 4.5</span>
                </div>
                <div className='mt-3'>
                  <p className='text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident hic nobis eos officia, ipsa harum doloremque delectus quaerat omnis dignissimos sunt quibusdam facere quia, ab cumque reiciendis veniam ducimus inventore?</p>
                  <div className='flex gap-10 font-bold'>
                    <span><i className="fa-solid fa-heart text-red-700"></i>578</span>
                    <span>2 weeks ago</span>
                  </div>
                </div>
              </div>
            </div>
            {/* ------------------------------------- */}

          </div>
        </div>



        {/* Photos */}

        <div className='w-full h-fit p-3 border-2 rounded-lg bg-white shadow-lg flex flex-col gap-3'>
          <h2 className="font-bold">Images</h2>
          <div className="mt-2 grid grid-cols-4 md:grid-cols-6">
            <img src="data:image/png;base64,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" className='' alt="img" />
            <img src="data:image/png;base64,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" className='' alt="img" />
            <img src="data:image/png;base64,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" className='' alt="img" />
            <img src="data:image/png;base64,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" className='' alt="img" />
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEX///8AAAAwMDDo6Oj09PTR0dHv7+/s7OxSUlLf39/T09Pm5ua2trbY2Nj4+Pjc3NyTk5MWFhbBwcGMjIxCQkJaWlrHx8dhYWGhoaFpaWkPDw8nJydERERNTU2qqqp7e3tycnKGhoYhISGwsLB4eHg5OTkuLi4iIiKioqIZGRkhbe73AAAFyElEQVR4nO2d61biMBCABQSKsoigXFcBdVXe/wXXG0ubJpPJbZLZM9+/Pacp+Sykmcwke3EhCIIgCIIgCIIgCIIgCIIgCIJQNP1p1eVFNe07+I1vOxy5HSP9BlXurnpTDTCCvU3ufgaw6SGeIM9v6Ilb+1Pk+xX9prIJjnP3MBjbcLPN3cFgtrBgP3f/IgC/F+e5uxeBOWh4l7t7EfgNGnJ+F57YgIa5excFMWyyHI96JTMa34cZzsCry2AWYrgg6mQYqiJ4sfIVJepiKA/ehhy+o588ehteEvUwlMV/b9gXwxpiWCZiWEcMy0QM65Rl2Fus9uvlcn0Y/wKvY2p4+V5fUnl6ARaYWBoOdx2VrXGazNFw1fL7pBrpr+ZnOPytFfzgUXv9FTdDpcMNdogG4M1LMFRiIYW1pgUzw1+goPYp8jKcWAR1v0Vehu3FwRY3ahtWhpj85YPaiJPhBJW/VJOgnAyfMYKdrtKKkyEyBa2sVDMytL0pTigvRUaGU6ShIsHI8A/WsBlKKY8e/Ii8hva3/YnmW5+PIfZn2Om8QO3Az8hrCM+569w32vExbOU6jTSnNWJYJ68h/lvarM/7Hw25/g6v0YaHRjs+hvhynmZ0wcgQXb7bDIIZGSolB0Zum80YGQ6QhkqB5Q0fQ8wqzSfK2jcnQ1yNslrJxMkQ9xDVxTZWhkpntRwsjcAPyG6ICPO3E7UNL0O1DK9Na0E4j+FkMd3t58+onVYKlmp6TZ40h+Hq+HOLF8RWK4WBMXv4ybOmBb1hr/4Y3Es4J8DkTVvTS27Ya97Fo0rVNNz8GWovpzacvGL+7jA3use4WZmuJjZctrp25XGXhep4nBqHrRGtoW7r1LXPja5XtSFnt2i9Bc/QGuqzR/rfj53RbPxBH7D7uorS0DB1fvVVREFpODRtDbuzPIYgCA0n5tQKvGcuDELD9jB65t7e3Bc6Q3gH6t5XwAqZoa2OohXXxYLKECpH+2YaogFAZDhEHMagLy0MhsgQlaHGnj7iBo3hGiOYaEcjiSF6I7/LOTlYKAwdjtNoL7MEQ2CIWQM88eQVaICkN7x0EOx0tvDy1Gx3v353m6greUfwWj9DcOmozSswC1/8VLY5zQ6SG+7dBDUFov+YI66hN9TvjQAxzcLrM3frYUFkhvgSkRq6ivuLYbdxDX6vfFpDl2G0hq7iXo2e90UYXvoeu9SahWteqdjhJqmhNY9i5L15I+0iMDIYSWnoPIzWeETc6N30wVSGHsNojfMStjkZo0vEEBp6DaM1dj+v/jFweBMm65HMUJkOejnOrvqPXfASRDCipIKiGXoPo47Ae4BTGvoPo45Yg5FEhu2NuqmwnmeZxjBsGHXjzTIgJDHEF7vGwJL1SGGo3DM5cCyVwHDyRif3DRhoJDBElhDGZE9qeKDSqgMEGsPmleGGuG2Q0TEHGrEN7RmYRBgDjciG+C0D0TEFGnENgUR2egyBRlxDKJGdHn3tUVTDA5WLAW2gEdMw/4HmuiNqIhoWcNz3URNoxDM01gNR8tSehcczhJcbqGgHGtEM8w6jZ1pZj1iG6OMAkqMGGsp2KV/D/MPoGSWxE8cQv1eegmagEcXQLZGdnkagEcWwuP80oR5oxDBE1gNRUiuvimBYzjBa4xxohBuGZmAS8S+jEWwYIQOThlN5Vajh4Ngples4hmQZGHfeejEMQxLZyel+dVF5WTsaUmZgPOgGGxY6jJ55CDT0rAeiZBliOKHPwHiwDzF0LKvMxE7ptoNhgbNRLYfmPx0MmSKG/BFD/oghf8SQP2LIHzHkjxjyRwz5I4b8EUP+iCF/QMMSCtdC2YCGxZVceACfuYU+oqRg5qBhAQWkwVi2ZBLtmkzIFhYsqj7PD+tBTejD+wvFfpzGAHFkV8FY95t+0OP8TtygDmYeZNh7F4kKe7r2mOc39ehyGlx/WnV5UU1TnJMmCIIgCIIgCIIgCIIgCIIgCIIQkb/DOnjjNsAtOwAAAABJRU5ErkJggg==" className='' alt="img" />
            <img src="data:image/png;base64,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" className='' alt="img" />
            <img src="data:image/png;base64,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" className='' alt="img" />
            <img src="data:image/png;base64,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" className='' alt="img" />
          </div>

        </div>



        {/* Videos */}

        <div className='w-full h-fit p-3 border-2 rounded-lg bg-white shadow-lg flex flex-col gap-3'>
          <h2 className="font-bold">Images</h2>
          <div className="mt-2 grid grid-cols-4 gap-2 md:grid-cols-6">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD-3L25fTuU8w80lNoHXRrb8gBnrT8UUzkIg&s" className='' alt="img" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD-3L25fTuU8w80lNoHXRrb8gBnrT8UUzkIg&s" className='' alt="img" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD-3L25fTuU8w80lNoHXRrb8gBnrT8UUzkIg&s" className='' alt="img" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD-3L25fTuU8w80lNoHXRrb8gBnrT8UUzkIg&s" className='' alt="img" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD-3L25fTuU8w80lNoHXRrb8gBnrT8UUzkIg&s" className='' alt="img" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD-3L25fTuU8w80lNoHXRrb8gBnrT8UUzkIg&s" className='' alt="img" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD-3L25fTuU8w80lNoHXRrb8gBnrT8UUzkIg&s" className='' alt="img" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD-3L25fTuU8w80lNoHXRrb8gBnrT8UUzkIg&s" className='' alt="img" />
           
          </div>

        </div>

      </div>
    </>
  )
}

export default ServiceProfile