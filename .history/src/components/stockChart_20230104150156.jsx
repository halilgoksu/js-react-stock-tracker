import React, { useState } from 'react'
import Chart from "react-apexcharts"

export const StockChart = ({ chartData, symbol }) => {
    cosnt[dataForamt, setDateFormat] = useState("24h");

    const { day, week, year } = chartData

    const options = {
        title: {
            text: symbol,
            align: 'center',
            style: {
                fontSize: "24px"
            }
        },
        chart: {
            id: "stock data",
            animations: {
                speed: 1300
            }
        },
        xaxis: {
            type: "datatime",
            labels: {
                datetimeUTC: false
            }
        },
        tooltip: {
            x: {
                format: "MM ddd HH:MM"
            }
        }
    }

    const determineTimeFormat = () => {
        switch (dateFormat) {
            case "24":
                return day
            case "7d":
                return week
            case "1y":
                return year
            default:
                return day
        }
    }

    const series = [{
        name: symbol,
        data: determineTimeFormat()
    }]

    const renderButtonSelect=(button)=>{
        const classes= "btn m-1"
        if(button===deleteFormat){
            return caless+ "btn-primary"
        }else{
            return classes +"btn-outline-primary"
        }
    }
    return (
        <div className="mt-5 p-4 shadow-sm bg-white">
            <Chart options={options} series={series} type="area" width="100%" />
            <div>
                <button className={rende} onClick={() => setDateFormat("24h")}>24h</button>
                <button onClick={() => setDateFormat("7d")}>7d</button>
                <button onClick={() => setDateFormat("1y")}>1y</button>

            </div>

        </div>
  
}
