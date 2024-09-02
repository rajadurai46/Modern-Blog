import React from 'react'

const Category = ({onselectcategory, activecategory}) => {

    const categories = ["Startups", "Security", "AI", "Apps", "Tech"]

  return (
    <div className='px-4 mb-8 space-x-9 lg:space-x-16 flex-wrap items-center border-b-2 py-5 text-gray-600 font-semibold'>
        <button className={`lg:ml-12 ${activecategory ? "" : "active-button"}`} 
        onClick={() => onselectcategory(null)}>All</button>
        {
            categories.map((category) => (
                <button className={`mr-2 space-x-16 ${activecategory === category ? "active-button" : ""}`}
                onClick={() => onselectcategory(category)} key={category}>{category}</button>
            ))
        }
    </div>
  )
}

export default Category