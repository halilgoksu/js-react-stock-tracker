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
        
    }

  return (
    <div>

    </div>
  )
}
