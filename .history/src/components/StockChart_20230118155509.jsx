import Chart from "react-apexcharts";
import { useState } from "react";
import "useHistory" from "react-router-dom"
import {AiOutlineHome} from "react-icons/ai"
export const StockChart = ({ chartData, symbol }) => {
  const [dateFormat, setDateFormat] = useState("24h");
  const { day, week, year } = chartData;

  const determineTimeFormat = () => {
    switch (dateFormat) {
      case "24h":
        return day;
      case "7d":
        return week;
      case "1y":
        return year;
      default:
        return day;
    }
  };

  const color =
    determineTimeFormat()[determineTimeFormat().length - 1].y -
      determineTimeFormat()[0].y >
    0
      ? "#26C281"
      : "#ed3419";

  const options = {
    colors: [color],
    title: {
      text: symbol,
      align: "left",
      style: {
        fontSize: "14px",
        color:"white",

      },
    },
    chart: {
      id: "stock data",
      animations: {
        speed: 1300,
      }
    },
    xaxis: {
      type: "datetime",
      labels: {
        datetimeUTC: false,
      },
    
    },
    dataLabels: {
      enabled: true,
      offsetX: -6,
      style: {
        fontSize: "10px",
        colors:["black"]
      }
    } 
    ,
    stroke: {
      curve: 'smooth',
      
    }
    ,
    tooltip: {
      x: {
        format: "MMM dd HH:MM"
      },style: {
        fontSize: "10px",
      }
    },
  };

  const series = [
    {
      name: symbol,
      data: determineTimeFormat(),
    },
  ];

  const renderButtonSelect = (button) => {
    const classes = "btn m-1 ";
    if (button === dateFormat) {
      return classes + "btn-dark";
    } else {
      return classes + "btn-outline-dark";
    }
  };

  let history = useHistory();
  function handdleClick(){
    history.push('/')
  }
  return (
    <div className="stock-chart p-6 shadow-sm bg-black text-black h-full w-full ">
      <Chart className="chart" options={options} series={series} type="area" width="90%" />
      <div className="text-white">
        <button
          className={renderButtonSelect("24h")}
          onClick={() => setDateFormat("24h")}
        >
          24h
        </button>
        <button
          className={renderButtonSelect("7d")}
          onClick={() => setDateFormat("7d")}
        >
          7d
        </button>
        <button
          className={renderButtonSelect("1y")}
          onClick={() => setDateFormat("1y")}
        >
          1y
        </button>
        <button className="btn btn-dark" onClick={handdleClick}><AiOutlineHome className="text-xl"/></button>

      </div>
    </div>
  );
};
