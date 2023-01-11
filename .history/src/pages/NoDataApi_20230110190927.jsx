import React, { useEffect } from 'react'

export  const NoDataApi = () => {
  return (
    <div className='flex w-full h-full item-center justify-center text-center p-4 '>

    <div className='flex-col justify-center  items-center text-center p-4 mt-9 w-2/3 shadow-2 shadow-transparent shadow-black '>
      <ul className='felx text-center items-center justify-center gap-3 '>
        <li className=''>Too Many Requests...</li>
         <li>API is temporarily unavailable due to the rate limit being exceeded.</li>
        <li></li>
        </ul>
        <hr />
        <br />
        <div className='h-7'></div>
        <button className='btn btn-dark  text-sm'>
         Main Page
        </button>
        <hr />
        <p className='text-3 text-gray-900 '>@Goksu</p>
        </div>

    </div>
  )
}

