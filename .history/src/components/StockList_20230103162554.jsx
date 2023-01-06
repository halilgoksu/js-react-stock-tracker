import React, { useState, useEffect } from "react";
import finnHub from "../apis/finnHub";
import axios from "axios";

const StockList = () => {
  const [watchList, setWatchList] = useState([]);
  useState(["GOOGL", "MSFT"]);

  useEffect(()=>{
    const fetchData= async()=>{
        try {
          const response=await finnHub.get("/qu")
        } catch (error) {
            
        }
    }
  },[])

  return <div>StockList</div>;
};

export default StockList;
