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
        });

        responses.push(response3)

        Promise.all()


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
