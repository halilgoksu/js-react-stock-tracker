import React, { useState, useEffect } from "react";
import finnHub from "../apis/finnHub";

const StockList = () => {
  const [stock, setStock] = useState();
  const [watchList, setWatchList] = useState(["GOOGL", "MSFT", "AMZN"]);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
       const responses=await Promise.all(watchList.map((stock)=>{
        return finnHub.get("/quote", {
            params: {
              symbol: 
            }
       }))
       return finnHub.get("/quote", {
            params: {
              symbol: "GOOGL"
            },
          }),finnHub.get("/quote", {
            params: {
              symbol: "MSFT"
            },
          }),finnHub.get("/quote", {
            params: {
              symbol: "AMZN"
            },
          }))

        console.log(responses);

        if (isMounted) {
          setStock(responses);
        }
      } catch (error) {}
    };
    fetchData();
    return () => (isMounted = false);
  }, []);

  return <div>StockList</div>;
};

export default StockList;
