import React, { useState, useEffect } from 'react'
import Blogcards from '../Components/Blogcards'
import Pagination from './Pagination'
import Category from './Category'
import Sidebar from './Sidebar'


const Blogpage = () => {

  const [blogs, setblogs] = useState([])
  const [currentpage, setcurrentpage] = useState(1)
  const pagesize = 12
  const [selectedcategory, setselectedcategory] = useState(null)
  const [activecategory, setactivecategory] = useState(null)

  useEffect(() => {
    async function fetchblogs(){

      let url = `http://localhost:5000/blogs?page=${currentpage}&limit=${pagesize}`

      if(selectedcategory){
        url += `&category=${selectedcategory}`
      }
       
      const response = await fetch(url)
      const data = await response.json()
      setblogs(data)

    }

    fetchblogs()

  }, [currentpage, pagesize, selectedcategory])

  const handlepagechange = (pagenumber) => {
      setcurrentpage(pagenumber)
  }

  const handlecategorychange = (category) => {
    setselectedcategory(category)
    setcurrentpage(1)
    setactivecategory(category)
  }

  return (
    <div>
      <div>
        <Category onselectcategory={handlecategorychange} selectedcategory={selectedcategory} 
        activecategory={activecategory}/>
      </div>

      <div className='flex flex-col lg:flex-row gap-12'>
        <Blogcards blogs={blogs} currentpage={currentpage} selectedcategory={selectedcategory}
        pagesize={pagesize} />
       
       <div>
        <Sidebar/>
       </div>

      </div>

       <div>
        <Pagination onpagechange={handlepagechange} currentpage={currentpage} blogs={blogs} pagesize={pagesize} />
       </div>
    </div>
  )
}

export default Blogpage