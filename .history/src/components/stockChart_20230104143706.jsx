import React from 'react'
import Chart from "react-apexcharts"

export const StockChart =({chartData,symbol})=> {
    const {day,week,year}= chartData


    const series=[{
        name:symbol,
        data
    }]

  return (
    <div>

    </div>
  )
}
