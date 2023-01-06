import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import finnHub from "../apis/finnHub";
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";
import { WatchListContext } from "../context/watchListContext";


const StockList = () => {
  const [stock, setStock] = useState();
  //bir objeyi set etmek icin bir kap 


  const { watchList, deleteStock } = useContext(WatchListContext);
  //WatchListContext borusundan Context provodrin icindeki watchlist'i ve deleteStock objelrini 
  //alip burda kullanbilirsin 
  
  const navigate = useNavigate();

  const changeColor = (change) => {
    return change > 0 ? "succes" : "danger";
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
        // Promise.all() bir seferde birden fazla birseyler
        // render etmek icin  kullaniilan bir kalip
        //watchList in icindeki butun elemanlari tek tek stock takma adi altinda getir 
        //bu stock ayni zamnda symbol un ne olduguna da karar versin 
        //params; quote nun gotune eklenen uzantini adidir, artik map den ne gelirse 


        console.log(responses);
        const data = responses.map((response) => {
          //gelen data olan responses i mapla
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
    //kapiyi acip kapatir, surekli render yapyai engellemektir amac 

  }, [watchList]);

  const handleStockSelect = () => {
    // navigate(`detail/${symbol}`);
  };

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
              <tr
                style={{ cursor: "pointer" }}
                onClick={() => {
                  handleStockSelect(stockData.symbol);
                }}
                className="table-row"
                key={stockData.symbol}
              >
                <th scope="row">{stockData.symbol}</th>
                <td className="">{stockData.data.c}</td>
                <td className={`text-${changeColor(stockData.data.d)}`}>
                  {stockData.data.d}
                  {renderIcon(stockData.data.d)}
                </td>
                <td className={`text-${changeColor(stockData.data.d)}`}>
                  {stockData.data.dp}
                  {renderIcon(stockData.data.dp)}
                </td>
                <td className="">{stockData.data.h}</td>
                <td className="">{stockData.data.l}</td>
                <td className="">{stockData.data.o}</td>
                <td className=""> {stockData.data.pc}    
                <button
                    className="btn btn-danger btn-sm ml-3 d-inline-block  delete-button"
                    onClick={(e) => {
                      e.stopPropagation()
                      deleteStock(stockData.symbol);}}>
                    Remove
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

export default StockList;
