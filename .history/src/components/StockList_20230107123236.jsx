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
    <div className="bg-black" w-full h-full>
      <Table striped bordered hover variant="dark">
        <thead>
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
                style={{ cursor: "pointer"}}
                onClick={() => handleStockSelect(stockData.symbol)}
                key={stockData.symbol}
                className=""
              >
                <th scope="row">{stockData.symbol}</th>
                <td>{stockData.data.c}</td>
                <td className={`text-${changeColor(stockData.data.d)}`}>
                  {stockData.data.d} {renderIcon(stockData.data.d)}
                </td>
                <td className={`text-${changeColor(stockData.data.d)}`}>
                  {stockData.data.dp} {renderIcon(stockData.data.d)}{" "}
                </td>
                <td>{stockData.data.h}</td>
                <td>{stockData.data.l}</td>
                <td>{stockData.data.o}</td>
                <td>
                  {stockData.data.pc}{" "}
           
                </td>
                <td>
                <Button
                    className=""
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
      </Table>
    </div>
  );
};
