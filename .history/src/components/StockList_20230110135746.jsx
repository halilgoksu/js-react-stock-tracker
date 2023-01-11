import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";
import finnHub from "../apis/finnHub";
import { WatchListContext } from "../context/watchListContext";
import Button from 'react-bootstrap/Button';
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
    return change > 0 ? <BsFillCaretUpFill className="d-inline-block bg-green-300" /> :
     <BsFillCaretDownFill className="d-inline-block bg-red-300"/>;
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
        console.log(responses);
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
    if(true){
      console.log()
      navigate(`detail/${symbol}`);

    }
  };
 

  return (
    <div
     className="table justify-center items-center text-center border-2
     text-white bg-black ">
      <Table className="table-auto">
        <Thead >
          <Tr className="font-sans">
            <Th className="">Name</Th>
            <Th className="">Last</Th>
            <Th className="">Chg</Th>
            <Th className="">Chg%</Th>
            <Th className="">High</Th>
            <Th className="">Low</Th>
            <Th className="">Open</Th>
            <Th className="">Pclose</Th>
          </Tr>
        </Thead>
        <Tbody>
          
          {stock.map((stockData) => {
            return (
              <Tr
                style={{ cursor: "pointer" }}
                onClick={() => handleStockSelect(stockData)}
                className=" "
                key={stockData.symbol}
              >
                <Td className="border-2 border-white">{stockData.symbol}</Td>
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
                <Td className="p-1">
                  <Button variant="outline-danger" className="text-sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteStock(stockData.symbol);
                    }}>X</Button>

                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </div>
  );
};
