import React from 'react'

const AutoComplate = () => {
  return (
    <div className='w-50 p-5 rounded mx-auto'>
      <div className='from-floating dropdown'>
        <input style={{backgroundColor:'rgba(145,158,171,0.04'}}
        id="search" type="text" className='form-control' placeholder='Search' autoComplate ="off">
        </input>
        <label></label> 

      </div>
    </div>
  )
}

export default AutoComplate