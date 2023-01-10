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
    return change > 0 ? <BsFillCaretUpFill className="d-inline-block" /> :
     <BsFillCaretDownFill className="d-inline-block color"/>;
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
       className=" border-3 border-white-100  table-auto w-full"  >

        <Thead >
          <Tr className="">
            <Th className="">Name</Th>
            <Th className="">Last</Th>
            <Th className="">Chg</Th>
            <Th className="">Chg%</Th>
            <Th className="">High</Th>
            <Th className="">Low</Th>
            <Th className="">Open</Th>
            <Th className="">Pclose</Th>
            <Th className=""></Th>
          </Tr>
        </Thead>
        <Tbody>
          
          {stock.map((stockData) => {
            return (
              <Tr
                style={{ cursor: "pointer" }}
                onClick={() => handleStockSelect(stockData.symbol)}
                className=""
                key={stockData.symbol}
              >
                <Td className="border-2 border-black">{stockData.symbol}</Td>
                <Td>{stockData.data.c}</Td>
                <Td className={`text-${changeColor(stockData.data.d)}`}>
                     {stockData.data.d} {renderIcon(stockData.data.d)}
                </Td>
                <Td className={`text-${changeColor(stockData.data.dp)}`}>
                  {stockData.data.dp} {renderIcon(stockData.data.dp)}
              
                </Td>
                <Td>{stockData.data.h}</Td>
                <Td>{stockData.data.l}</Td>
                <Td>{stockData.data.o}</Td>
                <Td className="button-data">
                  {stockData.data.pc}{" "}
            
                </Td>
                <Td>
                <button
                    className="btn btn-danger  d-inline-block delete-button"
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteStock(stockData.symbol);
                    }}
                  >
                    X
                  </button>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </div>
  );
};
