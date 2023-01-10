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
        console.log(response);
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
    <div className="bg-black text-white flex items-center justify-center w-full h-full text-sm ">
      {stockData && (
        <div className="row  shadow-sm w-full text-left">
          <div className="col border-2 border-white gap-1">
            <div>
              <span className="fw-bold">name: </span>
              {stockData.name}
            </div>
            <div>
              <span className="fw-bold">country: </span>
              {stockData.country}
            </div>
            <div className="bg-gray-900">
              <span className="fw-bold">ticker: </span>
              {stockData.ticker}
            </div>
          </div>
          <div className="col i border-2 border-white gap-2">
            <div className="bg-gray-900">
              <span className="fw-bold">Exchange: </span>
              {stockData.exchange}
            </div>
            <div className="bg-gray-900">
              <span className="fw-bold">Industry: </span>
              {stockData.finnhubIndustry}
            </div>
            <div className="bg-gray-900">
              <span className="fw-bold">IPO: </span>
              {stockData.ipo}
            </div>
          </div>
          <div className="col border-2 border-white">
            <div>
              <span className="fw-bold">MarketCap: </span>
              {stockData.marketCapitalization}
            </div>
            <div>
              <span className="fw-bold">Shares Outstanding: </span>
              {stockData.shareOutstanding}
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
