import React,{useState,useEffect} from 'react'

export  const StockData=({symbol})=> {
    let isMounted=true
    useEffect(()=>{
        const fetchData=async()=>{
            try {
                const response= await
            } catch (error) {
                
            }

        }
    },[symbol])
  return (
    <div>StockData</div>
  )
}
