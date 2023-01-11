import React, { useEffect } from 'react'

export  const NoDataApi = () => {
  return (
    <div className='flex w-full h-full item-center justify-center text-center p-4 '>

    <div className='flex-col  justify-center  items-center text-center p-4 mt-9 g w-2/3  bg-red-100 '>
      <ul className='inline text-center items-center justify-center gap-3 '>
        <li className='border-2 border-blue-400'>Too Many Requests...</li>
        <li className='border-2 border-blue-400'>API is temporarily unavailable due to the rate limit being exceeded.</li>
        </ul>
    
   <button className='btn btn-dark  text-sm border-2 border-orange-700'>
         Main Page
        </button>
        <hr />
        <p className='text-3 text-gray-900 '>@Goksu</p>
        </div>

    </div>
  )
}

