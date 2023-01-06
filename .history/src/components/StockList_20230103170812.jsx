import React, { useState, useEffect } from "react";
import finnHub from "../apis/finnHub";

const StockList = () => {
  const [watchList, setWatchList] = useState([]);
  useState(["GOOGL", "MSFT","AMZN"]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await finnHub.get(
          "/quote",{}
        );
        console.log(response);
      } catch (error) {}
    };
    fetchData()
  }, []);

  return <div>StockList</div>;
};

export default StockList;
