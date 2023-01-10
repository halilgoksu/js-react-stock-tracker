import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";
import finnHub from "../apis/finnHub";
import { WatchListContext } from "../context/watchListContext";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

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

  return (
    <div className="bg-black sm:text-sm" >
      <table striped bordered hover variant="dark"
       className="flex-col p-0 m-0 sm:text-xs md:text-sm lg:text-md">
        <thead className=" text-red-900">
          <tr className="">
            <th className="border-2">Name</th>
             <th className="border-2">Last</th>
             <th className="border-2">Chg</th>
             <th className="border-2">Chg%</th>
             <th className="border-2">High</th>
             <th className="border-2">Low</th>
             <th className="border-2">Open</th>
             <th className="border-2">Pclose</th>
             <th className="border-2"></th>

          </tr>
        </thead>
        <tbody className="flex-col text-sm text-blue-800">
          {stock.map((stockData) => {
            return (
              <tr
                style={{ cursor: "pointer"}}
                onClick={() => handleStockSelect(stockData.symbol)}
                key={stockData.symbol}
                className="text-xs border-2 "
              >
                <th className="text-xs">{stockData.symbol}</th>
                {/* //Marka ismi  */}

                <td className="border-2 ">{stockData.data.c}</td>
                <td className={`text-${changeColor(stockData.data.d)} border-2`}>
                  {stockData.data.d} {renderIcon(stockData.data.d)}
                </td>
                <td className={`text-${changeColor(stockData.data.d)}border-2`}>
                  {stockData.data.dp} {renderIcon(stockData.data.d)}{" "}
                </td>
                <td className="border-2 ">{stockData.data.h}</td>
                <td className="border-2 ">{stockData.data.l}</td>
                <td className="border-2 ">{stockData.data.o}</td>
                <td className="border-2 ">{stockData.data.pc}{" "}
           
                </td>
                <td>
                <Button
                    className="text-xs"
                    variant="danger"
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteStock(stockData.symbol);
                    }}
                  >
                    Remove
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
