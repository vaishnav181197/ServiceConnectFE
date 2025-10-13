import React from 'react'

function CourseItem() {
  return (
    <div className='w-full rounded-2xl p-5 bg-white h-fit flex justify-start'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Black_colour.jpg/250px-Black_colour.jpg" className='rounded-lg' style={{height:'150px'}}  alt="course" />
        <div className='p-4 flex flex-col justify-center gap-2'>
            <h4 className="font-bold text-orange-500">Graphic Design</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos impedit sequi porro dolores ipsum magni, suscipit repellat, qui quas tempore dolore quam ex delectus eius, eaque at facere molestiae cupiditate?</p>
        </div>
    </div>
  )
}

export default CourseItem