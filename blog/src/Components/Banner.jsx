import React from 'react'
import {Link} from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'

const Banner = () => {
  return (
    <div className='px-4 py-16 bg-black mx-auto'>
        <div className='text-white text-center'>
            <h1 className='text-5xl lg:text-6xl leading-snug font-bold mb-5'>Welcome to Our Blog</h1>
            <p className='text-gray-400 lg:w-3/5 mx-auto mb-5'>Start Your Blog Today and Join to our Community of Writers and Readers who are passionate 
                about sharing their thought and innovative ideas. We Offer everything you need to get 
                start from helpful tips and tutorials.</p>
                <div>
                    <Link to='/' className='font-medium hover:text-red-600 inline-flex items-center py-1'>
                    Learn More <FaArrowRight className='mt-1 ml-2' />
                    </Link>
                </div>
        </div>
    </div>
  )
}

export default Banner