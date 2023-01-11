import React, { useEffect } from 'react'

export  const NoDataApi = () => {
  return (
    <div className='flex-col justify-center items-center text-center p-4 mt-9 w-40%'>
      <ul>
        <li className=''>Too Many Requests...</li>
        <li>API is temporarily unavailable due to the rate limit being exceeded.</li>
        <li></li>
        </ul>
        <button className='button '>
         Main Page
        </button>
        <p>@Goksu</p>
         
    </div>
  )
}

