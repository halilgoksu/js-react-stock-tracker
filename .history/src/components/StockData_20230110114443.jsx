import { useState, useEffect } from "react";
import finnHub from "../apis/finnHub";
export const StockData = ({ symbol }) => {
  const [stockData, setStockData] = useState();

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const response = await finnHub.get("/stock/profile2", {
          params: {
            symbol,
          },
        });
        if (isMounted) {
          setStockData(response.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
    return () => (isMounted = false);
  }, [symbol]);
  return (
    <div className="stock-data bg-black text-white flex items-center text-left justify-center w-full text-xs 
    ">
      {stockData && (
        <div className="row  shadow-sm  ">
          <div className="col border-2 border-white gap-1">
            <div className="flex">
              <span className="fw-bold">name: </span>
              {stockData.name}
            </div>
            <hr />

            <div>
              <span className="fw-bold">country: </span>
              {stockData.country}
            </div>
            <hr />

            <div className="">
              <span className="fw-bold">ticker: </span>
              {stockData.ticker}
            </div>
          </div>
          <div className="col  border-2 border-white w-full">
            <div className="bg- flex w-full">
              <span className="fw-bold">Exchange: </span>
              {stockData.exchange}
            </div>
            <hr />

            <div className="">
              <span className="fw-bold">Industry: </span>
              {stockData.finnhubIndustry}
            </div>
            <hr />
            <div className=" ">
              <span className="fw-bold">IPO: </span>
              {stockData.ipo}
            </div>
          </div>
          <div className="col border-2 border-white">
            <div>
              <span className="fw-bold">MarketCap: </span>
              {stockData.marketCapitalization}
            </div>
            <hr />

            <div>
              <span className="fw-bold">Shares Outstanding: </span>
              {stockData.shareOutstanding}
            </div>
            <hr />

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
