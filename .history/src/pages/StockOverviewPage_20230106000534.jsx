import React from 'react'
import AutoComplate from '../components/AutoComplate'
import {StockList} from '../components/StockList'
import {AiOutlineStock} from 'react'

//kk
// sayfaya girdimizde karismiza cikan ilk alan
//tiklarsan stoc detail e gider 

export const StockOverviewPage = () => {
  return (
    <div>StockOverviewPage
        <AutoComplate />
        <StockList />
    </div>
  )
}

 