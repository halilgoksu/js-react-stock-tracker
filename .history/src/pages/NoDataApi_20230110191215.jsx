import React, { useEffect } from 'react'

export  const NoDataApi = () => {
  return (
    <div className='flex w-full h-full item-center justify-center text-center p-4 '>

    <div className='flex-col  justify-center  items-center text-center p-4 mt-9 w-2/3  bg-red-100 '>
      <ul className='felx text-center items-center justify-center gap-3 '>
        <li className='border-2 border-blue-400'>Too Many Requests...</li>
        <li className='border-2 border-blue-400'>API is temporarily unavailable due to the rate limit being exceeded.</li>
        </ul>
     
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

