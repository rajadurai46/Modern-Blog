import React from 'react'
import { Link } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'

const Blogcards = ({blogs, currentpage, selectedcategory, pagesize}) => {

const filteredblogs = blogs
.filter((blogs) => !selectedcategory || blogs.category === selectedcategory)
.slice((currentpage -1)*pagesize, currentpage * pagesize )

  return (
    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
        {
          filteredblogs.map((blog) => <Link to={`/blogs/${blog.id}`} key={blog.id} className='p-5 shadow-lg rounded cursor-pointer'>
            <div>
                <img src={blog.image} alt='' className='w-full'/>
            </div>
            <h3 className='mt-4 mb-2 font-bold hover:text-blue-600'>{blog.title}</h3>
            <p className='mb-2 text-gray-500'><FaUser className='inline-flex items-center mr-2'/>
            {blog.author}</p>
            <p className='text-sm text-gray-600'>Published: {blog.published_date}</p>
          </Link>)
        }
    </div>
  )
}

export default Blogcards