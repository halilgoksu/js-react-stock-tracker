import React, { useState, useEffect } from "react";
import finnHub from "../apis/finnHub";

const StockList = () => {
  const [stock, setStock] = useState();
  const [watchList, setWatchList] = useState([]);
  useState(["GOOGL", "MSFT", "AMZN"]);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
        const responses=[];

      try {
        const response1 = await finnHub.get("/quote", {
          params: {
            sybmbol: "GOOGL",
          },
        });
        res
        const response2 = await finnHub.get("/quote", {
          params: {
            sybmbol: "MSFT",
          },
        });

        const response3 = await finnHub.get("/quote", {
          params: {
            sybmbol: "AMZN",
          },
        });
        console.log(response);
        if (isMounted) {
          setStock(response.data);
        }
      } catch (error) {}
    };
    fetchData();
    return () => (isMounted = false);
  }, []);

  return <div>StockList</div>;
};

export default StockList;
