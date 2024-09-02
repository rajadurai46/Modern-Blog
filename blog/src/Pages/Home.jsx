import React from 'react'
import Banner from '../Components/Banner'
import Blogpage from '../Components/Blogpage'

const Home = () => {
  return (
    <div>
      <Banner/>
      
      <div className='max-w-7xl mx-auto'>
        <Blogpage/>
      </div>

      </div>
  )
}

export default Home