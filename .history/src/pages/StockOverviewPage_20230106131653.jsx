import React from 'react'
import  AutoComplate from '../components/AutoComplate';
import {StockList} from '../components/StockList'
import {AiOutlineStock} from 'react-icons/ai'

//kk
// sayfaya girdimizde karismiza cikan ilk alan
//tiklarsan stoc detail e gider 

export const StockOverviewPage = () => {
  return (
    <div>
      <AiOutlineStock className='logo'/>
        <AutoComplate />
        <StockList />
    </div>
  )
}

 