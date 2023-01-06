import React, { useState, useEffect, useContext } from "react";
import finnHub from "../apis/finnHub";
import { WatchListContext } from "../context/watchListContext";

//Sarch barin bulundugu bolumdur 
// Search barina girdigimz text gidip apide alup olmadigina bakar 

const AutoComplate = () => {
  const [search, setSearch] = useState("");
  //search set etmk icin

  const [results, setResults] = useState([]);
  //result arryini degistrimek icin 

  const { addStock } = useContext(WatchListContext);
  //ana contexe data eklemek icin 

  const renderDropdown = () => {
    const dropdownClass = search ? "show" : null;
    return (
      <ul
        style={{
          height: "500px",
          overFlowY: "scroll",
          overFlowX: "hidden",
          cursor: "pointer",
        }}
        className={`dropdown-menu ${dropdownClass}`}
        //bootsrap calssName den bunun bir drop menu oldugunu
        //ilk etapda gizli olmasini bilir 
      >
        {results.map((result) => {
          return (
            <li
              onClick={() => {
                addStock(result.symbol)
                setSearch("")
              }}
              key={result.symbol}
              className="dropdown-item"
            >
              {result.description}({result.symbol})
            </li>
            //dropdown menunun icindeki liste 
            //search a yazdigimiz her kelime burayi update eder
          );
        })}
      </ul>
    );
  };

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const response = finnHub.get("/search", {
          params: {
            q: search,
          },
        });
        //console.log(response);
        if (isMounted) {
          setResults(response.data);
        }
      } catch (error) {}
    };
    if (search.length > 0) {
      fetchData();
    } else {
      setResults([]);
      //eger search in icinde birden fazla kelime varsa dataya ulasir
      //yoksa dataya ulsama
    }
    return () => (isMounted = false);
  }, [search]);
  //search de yapilan her degisklik gelip burayi render yapar 


  return (
    <div className="w-50 p-5 rounded mx-auto">
      <div className="from-floating dropdown">
        <input
          style={{ backgroundColor: "rgba(145,158,171,0.04" }}
          id="search"
          type="text"
          className="form-control"
          placeholder="Search"
          autoComplate="off"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          //defisim oldukca burdaki value yi alip search i bununla set ediyorusn
          //search set oldugundan useEffeck de calisir
        ></input>
        <label htmlFor="search">Search</label>
        {renderDropdown()}
      </div>
    </div>
  );
};

export default AutoComplate;

// "result": [
//   {
//     "description": "APPLE INC",
//     "displaySymbol": "AAPL",
//     "symbol": "AAPL",
//     "type": "Common Stock"
//   }

//apiden geln response