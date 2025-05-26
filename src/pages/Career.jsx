import React from 'react'
import { Link } from 'react-router'

const data = [
	{
		jobName: ' Frontend Developer',
		jobDescription: 'Responsible for creating the visual layout, user interface, and interactive elements of a website or web application using HTML, CSS, JavaScript, and frameworks like React or Vue.js.',
		jobDate:'JUN 08, 2025',
	},
		{
		jobName: 'UX Designer',
		jobDescription: 'Focuses on enhancing user satisfaction by improving the usability, accessibility, and overall experience of a product through research, wireframing, and user testing.',
		jobDate:'JUN 09, 2025',
		},
			{
		jobName: 'Digital Marketing Specialist',
		jobDescription: 'Manages online marketing strategies including SEO, social media campaigns, email marketing, and paid advertisements to increase brand awareness and drive traffic.',
		jobDate:'JUN 10, 2025',
	}
]

function  Career () {
  return (

 <div  className='flex flex-col justify-center items-center'>
	{data.map((item) => (
<div className="max-w-4xl px-10 my-4 py-6 bg-white rounded-lg shadow-md">
  <div className="flex justify-between items-center">
				<span className="font-light text-gray-600">{item.jobDate}</span>
    <Link className="px-2 py-1 bg-blue-900 text-gray-100 font-bold rounded hover:bg-gray-500" to="/formcareer">
      تقديم  
    </Link>
  </div>

  <div className="mt-2">
    <Link className="text-2xl text-gray-700 font-bold hover:text-gray-600" to="/formcareer">
     {item.jobName}
    </Link>
    <p className="mt-2 text-gray-600">
		{item.jobDescription}
    </p>
  </div>

  <div className="flex justify-between items-center mt-4">
    <Link className="text-blue-600 hover:underline" to="/formcareer">
      Read more
    </Link>
    <div>
      <Link className="flex items-center" to="/formcareer">
			<img
			className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
			src="/favicon.png"
			alt="avatar"
			/>
       	 <h1 className="text-gray-700 font-bold">Academic Course</h1>
      </Link>
  </div>
  </div>
 </div>
		  
))}

</div>


  )
}

export default Career