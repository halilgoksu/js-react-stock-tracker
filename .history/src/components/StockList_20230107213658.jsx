import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";
import finnHub from "../apis/finnHub";
import { WatchListContext } from "../context/watchListContext";

export const StockList = () => {
  const [stock, setStock] = useState([]);
  const { watchList, deleteStock } = useContext(WatchListContext);
  const navigate = useNavigate();

  const changeColor = (change) => {
    return change > 0 ? "success" : "danger";
  };

  const renderIcon = (change) => {
    return change > 0 ? <BsFillCaretUpFill /> : <BsFillCaretDownFill />;
  };

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
      } catch (err) {}
    };
    fetchData();

    return () => (isMounted = false);
  }, [watchList]);

  const handleStockSelect = (symbol) => {
    navigate(`detail/${symbol}`);
  };
  console.log(stock)

  return (
    <div
     className="table hover  flex-col justify-center items-center text-center border-2
     bg-black sm:text-xs
     ">
      <table className="border-3 border-white-100  text-white" >
        <thead >
          <tr>
            <th>Name</th>
            <th>Last</th>
            <th>Chg</th>
            <th>Chg%</th>
            <th>High</th>
            <th>Low</th>
            <th>Open</th>
            <th>Pclose</th>
            <th></th>

          </tr>
        </thead>
        <tbody>
          
          {stock.map((stockData) => {
            return (
              <tr
                style={{ cursor: "pointer" }}
                onClick={() => handleStockSelect(stockData.symbol)}
                className=""
                key={stockData.symbol}
              >
                <td className="bg-white text-black border-2 border-black">{stockData.symbol}</td>
                <td>{stockData.data.c}</td>
                <td className={`text-${changeColor(stockData.data.d)} arrow`}>
                    <p className="flex flex-row text-center justify-center items-center">
                     {stockData.data.d} {renderIcon(stockData.data.d)}
                    </p>
                </td>
                <td className={`text-${changeColor(stockData.data.d)} arrow`}>
                  <p className="flex flex-row text-center justify-center items-center">
                  {stockData.data.dp} {renderIcon(stockData.data.dp)}
                  </p>
                </td>
                <td>{stockData.data.h}</td>
                <td>{stockData.data.l}</td>
                <td>{stockData.data.o}</td>
                <td className="button-data">
                  {stockData.data.pc}{" "}
            
                </td>
                <td>
                <button
                    className="btn btn-danger  d-inline-block delete-button"
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteStock(stockData.symbol);
                    }}
                  >
                    X
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
