import React,{useEffect}from 'react'
import { useParams } from 'react-router-dom'
import finnHub from '../apis/finnHub';

const StockDetailPage = () => {
  const {symbol} =useParams();
  useEffect(()=>{
    const fetchData =async()=>{
      const date=new Date();
      const currentTime=Math.floor(date.getTime()/1000);
      let oneDay;
      if(date.getDay()==6){
         oneDay =currentTime-2*24*60*60
      }else if(date.getDay()===0){
         oneDay =currentTime-3*24*60*60
      }else{
        oneDay =c
      }

      const response=await finnHub.get("/stock/candle",{
        params:{
          symbol,
          from:oneDay,
          to:currentTime,
          resolution:30
        }
      })
      console.log(response)
    }
    fetchData();
  },[])

  return (
    <div>
      
    </div>
  )
}

export default StockDetailPage