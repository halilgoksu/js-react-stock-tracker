import React, { useEffect } from 'react'

export  const NoDataApi = () => {
  return (
    <div className='flex-col justify-center items-center text-center p-4 mt-9 '>
        <ul>
        <li>Too Many Requests. This is the most common 
        status code used to indicate that a rate limit has been exceeded.</li>

        </ul>
        <button className='button '>
         Main Page
        </button>
        <p>@Goksu</p>
         
    </div>
  )
}

