import React, { useEffect } from 'react'

export  const NoDataApi = () => {
  return (
    <div className='flex-col justify-between gap-3 items-center text-center p-4 mt-9 w- border-2 h-full '>
      <ul>
        <li className=''>Too Many Requests...</li>
         <li>API is temporarily unavailable due to the rate limit being exceeded.</li>
        <li></li>
        </ul>
        <button className='btn btn-dark '>
         Main Page
        </button>
        <hr />
        <p className='text-3 text-gray-900 '>@Goksu</p>
         
    </div>
  )
}

