import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";
import finnHub from "../apis/finnHub";
import { WatchListContext } from "../context/watchListContext";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

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
     className="table hover  flex-col justify-center items-center text-center border-2 border-yellow-900">
      <Table
       className="bg-black border-3 border-white-100  text-white table-auto w-full"  >

        <Thead >
          <tr className="">
            <Th className="px-4 py-2">Name</Th>
            <Th className="px-4 py-2">Name</Th>
            <Th className="px-4 py-2">Name</Th>
            <Th className="px-4 py-2">Name</Th>
            <Th className="px-4 py-2">Name</Th>
            <Th className="px-4 py-2">Name</Th>
            <Th className="px-4 py-2">Name</Th>
            <Th className="px-4 py-2">Name</Th>
            <Th className="px-4 py-2"></Th>


          </tr>
        </Thead>
        <Tbody>
          
          {stock.map((stockData) => {
            return (
              <tr
                style={{ cursor: "pointer" }}
                onClick={() => handleStockSelect(stockData.symbol)}
                className="bg-gray-100"
                key={stockData.symbol}
              >
                <td className="bg-white text-black border-2 border-black">{stockData.symbol}</td>
                <td>{stockData.data.c}</td>
                <td className={`text-${changeColor(stockData.data.d)} arrow`}>
                    <p className="flex flex-row text-center justify-center items-center">
                     {stockData.data.d} {renderIcon(stockData.data.d)}
                    </p>
                </td>
                <td className={`text-${changeColor(stockData.data.dp)} arrow`}>
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
        </Tbody>
      </Table>
    </div>
  );
};