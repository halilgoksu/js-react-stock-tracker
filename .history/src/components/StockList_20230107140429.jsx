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
    <div className="table hover mt-5 flex-col p-0 m-0 sm:text-xs md:text-sm lg:text-md">
      <table>
        <thead style={{ color: "rgb(79,89,102)" }}>
          <tr>
            <th>Name</th>
            <th>Last</th>
            <th>Chg</th>
            <th>Chg%</th>
            <th>High</th>
            <th>Low</th>
            <th>Open</th>
            <th>Pclose</th>
          </tr>
        </thead>
        <tbody>
          
          {stock.map((stockData) => {
            return (
              <tr
                style={{ cursor: "pointer" }}
                onClick={() => handleStockSelect(stockData.symbol)}
                className="table-row"
                key={stockData.symbol}
              >
                <td scope="row">{stockData.symbol}</td>
                <td>{stockData.data.c}</td>
                <td className={`text-${changeColor(stockData.data.d)} text-xs`}>
                  {stockData.data.d} {renderIcon(stockData.data.d)}
                </td>
                <td className={`text-${changeColor(stockData.data.d)} text-xs`}>
                  {stockData.data.dp} {renderIcon(stockData.data.d)}{" "}
                </td>
                <td>{stockData.data.h}</td>
                <td>{stockData.data.l}</td>
                <td>{stockData.data.o}</td>
                <td>
                  {stockData.data.pc}{" "}
                  <button
                    className="btn btn-danger btn-sm ml-3 d-inline-block delete-button"
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
