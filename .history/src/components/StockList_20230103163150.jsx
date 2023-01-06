import React, { useState, useEffect } from "react";
import finnHub from "../apis/finnHub";

const StockList = () => {
  const [watchList, setWatchList] = useState([]);
  useState(["GOOGL", "MSFT","AMZN"]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await finnHub.get(
          "/quote?symbol=AAPL&token=ceqb67aad3i9f7a4r450ceqb67aad3i9f7a4r45g"
        );
        console.log(response);
        console.log("ggggg")
      } catch (error) {}
    };
    fetchData
  }, []);

  return <div>StockList</div>;
};

export default StockList;
