import React from 'react'
import { useParams } from 'react-router-dom'

const StockDetailPage = () => {
  const {sy} =useParams();

  return (
    <div>StockDetailPage</div>
  )
}

export default StockDetailPage