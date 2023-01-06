import React,{useState,useEffect} from 'react'
import finnHub from '../apis/finnHub'

export  const StockData=({symbol})=> {
    const [stockData,setStockData]=useState()
    let isMounted=true
    useEffect(()=>{
        const fetchData=async()=>{
            try {
                const response= await finnHub.get("/stock/profile2",{
                    params:{
                        symbol
                    }
                })
                console.log(response)
                if(isMounted)
            } catch (error) {
                
            }

        }
        fetchData()
    },[symbol])
  return (
    <div>StockData</div>
  )
}
