import React,{useState,useEffect} from 'react'
import finnHub from '../apis/finnHub'

export  const StockData=({symbol})=> {
    let isMounted=true
    useEffect(()=>{
        const fetchData=async()=>{
            try {
                const response= await finnHub.get("/stock/profile2")
            } catch (error) {
                
            }

        }
    },[symbol])
  return (
    <div>StockData</div>
  )
}
