import React from 'react'

const Pagination = ({onpagechange, currentpage, blogs, pagesize}) => {

    const totalpages = Math.ceil(blogs.length / pagesize)
    const renderpaginationlinks = () => {
      return Array.from({length: totalpages}, (_, i) => i + 1).map((pagenumber) => (
        <li className={pagenumber === currentpage ? "activerpagination" : ""} key={pagenumber}>
          <a href="#" onClick={() => onpagechange(pagenumber)}>{pagenumber}</a>
        </li>
      ))
    }
  return (
    
     <ul className='pagination my-8 flex-wrap gap-4'>
      <li>
        <button onClick={() => onpagechange(currentpage - 1)} disabled={currentpage === 1}>Previous</button>
      </li>
      <div className='flex gap-1'>{renderpaginationlinks()}</div>
      <li>
        <button onClick={() => onpagechange(currentpage + 1)} disabled={currentpage === totalpages}>Next</button>
      </li>
     </ul>
    
  )
}

export default Pagination