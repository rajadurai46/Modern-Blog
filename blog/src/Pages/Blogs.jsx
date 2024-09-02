import React, { useEffect, useState } from 'react'
import Blogpage from '../Components/Blogpage'


const Blogs = () => {

  return (
    
    <div>
    <div className='py-20 bg-black text-center text-white px-4'>
      <div>
        <h2 className='text-5xl lg:text-6xl leading-snug font-bold mb-5'>Welcome to Our Blog Page</h2>
      </div>
      </div>

      <div className='max-w-7xl mx-auto'>
        <Blogpage/>
      </div>

    </div>
  )
}

export default Blogs