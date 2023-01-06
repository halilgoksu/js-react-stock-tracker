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
                if(isMounted){
                    setStockData(response.data)
                }
            } catch (error) {
                
            }

        }
        fetchData()
        return ()=>(isMounted=false);
    },[symbol])
  return (
    <div>
        {stockData &&(
            <div className='row border bg-white rounded shadow-sm mt-5 '>
                
                <div className='col '>
                    <div>
                    <span className='fw-bold'>name: </span>
                    {stockData.name}
                    </div>
                    <div>
                    <span className='fw-bold'>country: </span>
                    {stockData.country}
                    </div>
                    <div>
                    <span className='fw-bold'>ticker: </span>
                    {stockData.ticker}
                    </div>
                </div>

            </div>
        )}
    </div>
  )
}
