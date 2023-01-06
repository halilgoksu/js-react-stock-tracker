import React,{useState} from 'react'

const AutoComplate = () => {
  const [search,setSearch]= useState("");


  return (
    <div className='w-50 p-5 rounded mx-auto'>
      <div className='from-floating dropdown'>
        <input style={{backgroundColor:'rgba(145,158,171,0.04'}}
        id="search" type="text" className='form-control' placeholder='Search' autoComplate ="off"
        ></input>
        <label htmlFor='search'></label> 
        <ul className='dropdown-menu'>
          <li>stock1</li>
          <li>stock2</li>
          <li>stock3</li>

        </ul>

      </div>
    </div>
  )
}

export default AutoComplate