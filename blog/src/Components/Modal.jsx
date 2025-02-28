import React from 'react'

const Modal = ({isopen, onclose}) => {
  return (
    <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${isopen ? "" : "hidden"}`}>
     <div className='modal-container'>
        <div className='bg-indigo-700 text-center p-5 h-96 lg:w-[500px] rounded shadow-md'>
         <h2 className='text-xl font-semibold mt-6 mb-5 uppercase'>
            Please Log IN Here!
         </h2>
         <form className='px-4'>
         <div className='mb-5'>
            <input type='email' name='email' id='email' placeholder='example@gmail.com'
            className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base 
            font-medium text-[#6b7280] outline-none focus:border-[#6a64f1] focus:shadow-md'/>
         </div>

         <div className='mb-5'>
            <input type='password' name='password' id='password' placeholder='Enter Your Password'
            className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base 
            font-medium text-[#6b7280] outline-none focus:border-[#6a64f1] focus:shadow-md'/>
         </div>

         <div>
            <button className='hover:shadow-md rounded-md bg-[#6a64f1] hover:bg-orange-600 py-3
            px-8 text-base font-semibold text-white outline-none'>
                Log IN
                </button>
         </div>
         </form>
         <button onClick={onclose} className='bg-gray-300 hover:bg-red-600 hover:text-white  text-gray-800 
         font-semibold py-2 px-4 rounded inline-flex items-center mt-5'>
            Close
         </button>
        </div>

     </div>
    </div>
  )
}

export default Modal