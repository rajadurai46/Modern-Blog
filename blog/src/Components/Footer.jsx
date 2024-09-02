import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='bg-gray-900'>
        <div className='px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4'>
            <div className='grid mb-8 lg:grid-cols-6'>
                <div className='grid grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-4'>
                    <div>
                        <p className='font-medium tracking-wider text-gray-500'>Category</p>
                        <ul className='mt-2 space-y-2'>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300
                                 hover:text-orange-600'>News</a>
                            </li>

                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300
                                 hover:text-orange-600'>World</a>
                            </li>

                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300
                                 hover:text-orange-600'>Games</a>
                            </li>

                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300
                                 hover:text-orange-600'>References</a>
                            </li>
                        </ul>
                    </div>

                        <div>
                        <p className='font-medium tracking-wider text-gray-500'>Services</p>
                        <ul className='mt-2 space-y-2'>

                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300
                                 hover:text-orange-600'>Web</a>
                            </li>

                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300
                                 hover:text-orange-600'>E-Commerce</a>
                            </li>

                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300
                                 hover:text-orange-600'>Business</a>
                            </li>

                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300
                                 hover:text-orange-600'>Entertainment</a>
                            </li>

                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300
                                 hover:text-orange-600'>Portfolio</a>
                            </li>

                        </ul>
                        </div>

                        <div>
                        <p className='font-medium tracking-wider text-gray-500'>About US</p>
                        <ul className='mt-2 space-y-2'>

                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300
                                 hover:text-orange-600'>Media</a>
                            </li>

                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300
                                 hover:text-orange-600'>Brochure</a>
                            </li>

                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300
                                 hover:text-orange-600'>Non-Profit</a>
                            </li>

                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300
                                 hover:text-orange-600'>Education</a>
                            </li>

                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300
                                 hover:text-orange-600'>Projects</a>
                            </li>

                        </ul>
                        </div>

                        <div>
                        <p className='font-medium tracking-wider text-gray-500'>Business</p>
                        <ul className='mt-2 space-y-2'>

                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300
                                 hover:text-orange-600'>Infopreneur</a>
                            </li>

                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300
                                 hover:text-orange-600'>Personal</a>
                            </li>

                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300
                                 hover:text-orange-600'>Wikipedia</a>
                            </li>

                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300
                                 hover:text-orange-600'>Forum</a>
                            </li>

                        </ul>
                        </div>

                </div>

                <div className='md:max-w-md lg:col-span-2 lg:mt-0 mt-5'>
                        <p className='font-medium tracking-wider text-gray-500'>Subscribe for Updates</p>
                       <form className='mt-4 flex flex-col md:flex-row'>
                         <input type='email' name='email' id='email' className='flex-grow w-full 
                         h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-400 rounded
                         shadow-sm aspect-auto md:mr-2 md:mb-0 focus:border-green-600
                         focus:outline-none'/>
                        <button type='submit' className='inline-flex items-center justify-center h-12 px-6
                        font-medium tracking-wide text-white transition duration-200 rounded shadow-md
                        hover:bg-orange-600 focus:outline-none border'>
                         Subscribe
                        </button>
                       </form>
                       <p className='mt-4 text-sm text-gray-500'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quo error 
                        magni et temporibus, saepe ab nesciunt? 
                        Facilis eaque in suscipit ad unde praesentium, ab aspernatur possimus veritatis rerum cum?
                        </p>
                        </div>
                        
                        </div>
                        
                        <div className='flex flex-col justify-center gap-8 pt-5 pb-10 border-t
                        border-gray-700 sm:flex-row'>
                            <p className='text-sm text-gray-600 text-center'>©Copyrights @{new Date().getFullYear()} 
                            | All Rights Reserved</p>
                            <div className='flex items-center mt-4 space-x-4 sm:mt-0 justify-center'>
                                <a href="" className='text-gray-500 transition-all duration-300
                                 hover:text-teal-600'>
                                <FaTwitter className='h-6 w-6'/>
                                </a>
                                <a href="" className='text-gray-500 transition-all duration-300
                                 hover:text-teal-600'>
                                <FaInstagram className='h-6 w-6'/>
                                </a>
                                <a href="" className='text-gray-500 transition-all duration-300
                                 hover:text-teal-600'>
                                <FaFacebook className='h-6 w-6'/>
                                </a>
                            </div>
                        </div>

                        </div>
                     </div>
  )
}

export default Footer