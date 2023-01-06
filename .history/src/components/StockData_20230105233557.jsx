import React, { useState, useEffect } from "react";
import finnHub from "../apis/finnHub";

//detail ile alakali bir durm uzrine tiklayicna 
//gidelicek sayfanin datay kismini gosterir 
//grafigin altinda kalan kutu 
//kk

export const StockData = ({ symbol }) => {

  const [stockData, setStockData] = useState([]); //[] ben ekledim 
  let isMounted = true;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await finnHub.get("/stock/profile2", {
          params: {
            symbol
          },
        });
       // console.log(response);
        if (isMounted) {
          setStockData(response.data);
        }
      } catch (error) {}
    };
    fetchData();
    return () => (isMounted = false);
  }, [symbol]);


  return (
    <div>
      {stockData && (
        <div className="row border bg-white rounded shadow-sm p-4 mt-5 ">
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
              <span className="fw-bold">Exchange: </span>
              {stockData.name}
            </div>
            <div>
              <span className="fw-bold">Industry: </span>
              {stockData.country}
            </div>
            <div>
              <span className="fw-bold">IPO: </span>
              {stockData.ticker}
            </div>
          </div>

          {/* ///Third col  */}
          <div className="col ">
            <div>
              <span className="fw-bold">MarketCap: </span>
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

// "count": 4,
// "result": [
//   {
//     "description": "APPLE INC",
//     "displaySymbol": "AAPL",
//     "symbol": "AAPL",
//     "type": "Common Stock"
//   },