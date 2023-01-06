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
              symbol: stock
            }
       })
    }))
       
        console.log(res);

        if (isMounted) {
          setStock(data);
        }
      } catch (error) {}
    };
    fetchData();
    return () => (isMounted = false);
  }, []);

  return <div>StockList</div>;
};

export default StockList;
