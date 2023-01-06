import React, { useState, useEffect } from "react";
import finnHub from "../apis/finnHub";
import {BsFillCaretDownFill} from 'react-icons/bs'

const StockList = () => {
  const [stock, setStock] = useState();
  const [watchList, setWatchList] = useState(["GOOGL", "MSFT", "AMZN"]);

  const changeColor = (change) => {
    return change > 0 ? "succes" : "danger";
  };
  const renderIcon =(change)

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const responses = await Promise.all(
          watchList.map((stock) => {
            return finnHub.get("/quote", {
              params: {
                symbol: stock,
              },
            });
          })
        );

        console.log(responses);
        const data = responses.map((response) => {
          return {
            data: response.data,
            symbol: response.config.params.symbol,
          };
        });
        console.log(data);
        if (isMounted) {
          setStock(data);
        }
      } catch (error) {}
    };
    fetchData();

    return () => (isMounted = false);
  }, []);

  return (
    <div>
      <table className="table hover mt-5 ">
        <thead style={{ color: "rgb(79,89,102)" }}>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Last</th>
            <th scope="col">Chg</th>
            <th scope="col">Chg%</th>
            <th scope="col">High</th>
            <th scope="col">Low</th>
            <th scope="col">Open</th>
            <th scope="col">PcClose</th>
          </tr>
        </thead>

        <tbody>
          {stock.map((stockData) => {
            return (
              <tr className="table-row" key={stockData.symbol}>
                <th scope="row">{stockData.symbol}</th>
                <td className="">{stockData.data.c}</td>
                <td className={`text-${changeColor(stockData.data.d)}`}>
                  {stockData.data.d}
                </td>
                <td className={`text-${changeColor(stockData.data.d)}`}>
                  {stockData.data.dp}
                  {renderIcon}
                </td>
                <td className="">{stockData.data.h}</td>
                <td className="">{stockData.data.l}</td>
                <td className="">{stockData.data.o}</td>
                <td className="">{stockData.data.pc}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default StockList;
