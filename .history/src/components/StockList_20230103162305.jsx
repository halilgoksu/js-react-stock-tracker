import React, { useState, useEffect } from "react";
import finnHub from "../apis/finnHub";
import axios from "axios";

const StockList = () => {
  const [watchList, setWatchList] = useState([]);
  useState(["GOOGL", "MSFT"]);

  useEffect(()=>{
    
  },[])

  return <div>StockList</div>;
};

export default StockList;
