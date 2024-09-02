import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { FaClock, FaUser } from 'react-icons/fa6'
import Sidebar from '../Components/Sidebar'

const Singleblog = () => {

    const data = useLoaderData()
    const {title, image, category, author, published_date, reading_time, content} = data[0]


  return (
    <div>
    <div className='py-20 bg-black text-center text-white px-4'>
        <h2 className='text-5xl lg:text-6xl leading-snug font-bold mb-5'>Single Blog Page</h2>
    </div>

    <div className='max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12'>
     <div className='lg:w-3/4 mx-auto'>
    <div>
        <img src={image} alt="" className='w-full mx-auto rounded'/>
    </div>
    <h2 className='text-3xl mt-8 font-bold mb-4 text-blue-600 cursor-pointer'>{title}</h2>
    <p className='mb-3 ext-gray-600'><FaUser className='inline-flex items-center mr-2'/>{author} | {published_date}</p>
    <p className='mb-3 ext-gray-600'><FaClock className='inline-flex items-center mr-2'/>{reading_time}</p>
    <p className='text-base text-gray-600 mb-6'>{content}</p>
    <div className='text-base text-gray-600'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, non laudantium et ut sunt magnam voluptates, 
    excepturi esse laborum error ex aliquid ea dolor reprehenderit repudiandae distinctio tempora eum velit?</p> <br/>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, non laudantium et ut sunt magnam voluptates, 
    excepturi esse laborum error ex aliquid ea dolor reprehenderit repudiandae distinctio tempora eum velit?</p> <br/>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, non laudantium et ut sunt magnam voluptates, 
    excepturi esse laborum error ex aliquid ea dolor reprehenderit repudiandae distinctio tempora eum velit?</p> <br/>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, non laudantium et ut sunt magnam voluptates, 
    excepturi esse laborum error ex aliquid ea dolor reprehenderit repudiandae distinctio tempora eum velit?</p> <br/>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, non laudantium et ut sunt magnam voluptates, 
    excepturi esse laborum error ex aliquid ea dolor reprehenderit repudiandae distinctio tempora eum velit?</p> <br/>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, non laudantium et ut sunt magnam voluptates, 
    excepturi esse laborum error ex aliquid ea dolor reprehenderit repudiandae distinctio tempora eum velit?</p> <br/>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, non laudantium et ut sunt magnam voluptates, 
    excepturi esse laborum error ex aliquid ea dolor reprehenderit repudiandae distinctio tempora eum velit?</p> 
    
    </div>
     </div>

     <div className='lg:w-1/2'>
        <Sidebar/>
     </div>
    </div>
    </div>
  
  )
}

export default Singleblog