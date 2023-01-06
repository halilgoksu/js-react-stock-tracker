import React,{useEffect}from 'react'
import { useParams } from 'react-router-dom'
import finnHub from '../apis/finnHub';

const StockDetailPage = () => {
  const {symbol} =useParams();
  useEffect(()=>{
    const fetchData =async()=>{
      const response=await finnHub.get("/stock/candle",{
        params:{
          symbol,
          from,
          to,
          resolution
        }
      })
      
    }
  })

  return (
    <div>
      
    </div>
  )
}

export default StockDetailPage