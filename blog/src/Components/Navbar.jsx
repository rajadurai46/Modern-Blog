import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaFacebook, FaDribbble, FaTwitter, FaBars, FaXmark } from "react-icons/fa6"
import Modal from './Modal'

const Navbar = () => {

const [ismenuopen, setmenuopen] = useState(false)
const [ismodalopen, setmodalopen] = useState(false)

const togglemenu = () => {
  setmenuopen(!ismenuopen)
}
 
    const Navitems = [
        {path: "/", link: "Home"},
        {path: "/about", link: "About"},
        {path: "/blogs", link: "Blogs"},
        {path: "/services", link: "Services"},
        {path: "/contact", link: "Contact"},
    ]

    const openmodal = () => {
      setmodalopen(true)
    }

    const closemodal = () => {
      setmodalopen(false)
    }

  return (
    <>
    <header className='bg-black text-white sticky top-0 right-0 left-0'>
        <nav className='px-4 py-4 max-w-7xl mx-auto flex justify-between items-center'>
            <a href="/" className='text-xl font-bold text-white'>Design
            <span className='text-orange-600'>{} RD</span></a>
         
         <ul className='md:flex gap-12 text-lg hidden'>
            {
                Navitems.map(({path, link}) => <li className='text-white' key={path}>
                    <NavLink className={({ isactive, ispending}) => 
                    isactive
                  ? "active"
                  : ispending
                  ? "pending"
                  : ""
                }
                    to={path}>{link}</NavLink>
                </li>)
            }
         </ul>
          
          <div className='text-white lg:flex gap-4 items-center hidden'>
            <a href="/" className='hover:text-orange-600'><FaFacebook /></a>
            <a href="/" className='hover:text-orange-600'><FaDribbble /></a>
            <a href="/" className='hover:text-orange-600'><FaTwitter /></a>
            <button onClick={openmodal} className='bg-orange-500 px-4 py-2 font-medium rounded 
            hover:bg-white hover:text-orange-500 transition-all duration-300 ease-in'>
              Log IN</button>
          </div>

          <Modal isopen={ismodalopen} onclose={closemodal}/>

<div className='md:hidden'>
  <button onClick={togglemenu} className='cursor-pointer'>
    {
      ismenuopen ? <FaXmark className='w-5 h-5'/> : <FaBars className='w-5 h-5'/>
    }
    </button>
</div>

        </nav>

<div>
<ul className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white
   ${ismenuopen ?  "fixed top-0 left-0 w-full transition-all ease-out duration-300" : "hidden"}`}>
            {
                Navitems.map(({path, link}) => <li className='text-black' key={path}>
                    <NavLink onClick={togglemenu} to={path}>{link}</NavLink>
                </li>)
            }
         </ul>
</div>


    </header>

    </>
  )
}

export default Navbar