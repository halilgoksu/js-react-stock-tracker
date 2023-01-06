import React from 'react'
import AutoComplate from '../components/AutoComplate'
import StockList from '../components/StockList'

// sayfaya girdimizde karismiza cikan ilk 

const StockOverviewPage = () => {
  return (
    <div>StockOverviewPage
        <AutoComplate />
        <StockList />
    </div>
  )
}

export default StockOverviewPage