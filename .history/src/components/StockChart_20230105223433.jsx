import React, { useState } from 'react'
import Chart from "react-apexcharts"

//cahrt bize grafigi cizmemize yarar 
//anacak bunun icin datayi biz provide ederiz 
//apiden geln digitiler ile greafik ciziliz 
//https://apexcharts.com/docs/react-charts


export const StockChart = ({ chartData, symbol }) => {
    const [dateFormat, setDateFormat] = useState("24h");
    //defaulte olacak grafik secenegi 24 

    const { day, week, year } = chartData
    //propdan gelen elemenalr 
    //hos geldiniz 


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
    //grafigin hangi araliklarla gormek istersek

    const color = determineTimeFormat()
    [determineTimeFormat().length - 1].y - determineTimeFormat()[0].y > 0 ? "#26C281" : "ed3419"
    //grafign rengine ayar ceker 

    const options = {
        colors: [color],
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
                format: "MMM dd HH:MM"
            }
        }
    }
    //tamamen cahrt web sitesnin bizden istegi bir kalip 
    // bosluklari doldurursan okey 
    // datetimeUTC: false local time a yarlar grifgi 


    const series = [{
        name: symbol,
        data: determineTimeFormat()
    }]

    const renderButtonSelect = (button) => {
        const classes = "btn m-1"
        if (button === dateFormat) {
            return classes + "btn-primary"
        } else {
            return classes + "btn-outline-primary"
        }
    }
    return (
        <div className="mt-5 p-4 shadow-sm bg-white">
            <Chart options={options} series={series} type="area" width="100%" />
            <div>
                <button className={renderButtonSelect("24")} onClick={() => setDateFormat("24h")}>24h</button>
                <button className={renderButtonSelect("7d")} onClick={() => setDateFormat("7d")}>7d</button>
                <button className={renderButtonSelect("1y")} onClick={() => setDateFormat("1y")}>1y</button>
            </div>
            //buton degistikce setf

        </div>
    )
}

// "count": 4,
// "result": [
//   {
//     "description": "APPLE INC",
//     "displaySymbol": "AAPL",
//     "symbol": "AAPL",
//     "type": "Common Stock"
//   },