import React from 'react'
import Chart from "react-apexcharts"

export const StockChart =({chartData,symbol})=> {
    const {day,week,year}= chartData

    const options={
        text:symbol,
        align:'center',
        style:{
            fontSize:"24px"
        }
    },
    chart:{
        id:"stock data",
        animations:{
            speed:1300
        }
    },
    xaxis:{
        type:"datatime"
    }

    const series=[{
        name:symbol,
        data:day
    }]

  return (
    <div style={{backgroundColor:"rgba(1"}}>

    </div>
  )
}
