import React, { useState, useEffect } from "react";
import finnHub from "../apis/finnHub";

//detail ile alakali bir durm uzrine tiklayicna 
//gidelicek sayfanin datay kismini gosterir 

export const StockData = ({ symbol }) => {
  const [stockData, setStockData] = useState();
  let isMounted = true;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await finnHub.get("/stock/profile2", {
          params: {
            symbol
          },
        });
        console.log(response);
        if (isMounted) {
          setStockData(response.data);
        }
        fetchData();
        return () => (isMounted = false);
      } catch (error) {}
    };
   
  }, [symbol]);
  return (
    <div>
      {stockData && (
        <div className="row border bg-white rounded shadow-sm mt-5 ">
          {/* ///First col  */}
          <div className="col ">
            <div>
              <span className="fw-bold">name: </span>
              {stockData.name}
            </div>
            <div>
              <span className="fw-bold">country: </span>
              {stockData.country}
            </div>
            <div>
              <span className="fw-bold">ticker: </span>
              {stockData.ticker}
            </div>
          </div>

          {/* ///Second col  */}
          <div className="col ">
            <div>
              <span className="fw-bold">name: </span>
              {stockData.name}
            </div>
            <div>
              <span className="fw-bold">country: </span>
              {stockData.country}
            </div>
            <div>
              <span className="fw-bold">ticker: </span>
              {stockData.ticker}
            </div>
          </div>

          {/* ///Third col  */}
          <div className="col ">
            <div>
              <span className="fw-bold">name: </span>
              {stockData.name}
            </div>
            <div>
              <span className="fw-bold">country: </span>
              {stockData.country}
            </div>
            <div>
              <span className="fw-bold">url: </span>
              <a href={stockData.weburl}>{stockData.weburl}</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

