import React,{useEffect}from 'react'
import { useParams } from 'react-router-dom'
import finnHub from '../apis/finnHub';

const StockDetailPage = () => {
  const {symbol} =useParams();
  useEffect(()=>{
    const fetchData =async()=>{
      const response=await finnHub
      
    }
  })

  return (
    <div>
      
    </div>
  )
}

export default StockDetailPage