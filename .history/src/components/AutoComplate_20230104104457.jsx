import React, { useState, useEffect } from "react";
import finnHub from "../apis/finnHub";

const AutoComplate = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  const renderDropdown=()=>{
    const dropdownClass= search ? "show": null 
    return(
      <ul className={`dropdown-menu ${dropdownClass}`}>
        <li></li>

      </ul>
    )
  }

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
        if(isMounted){
        setResults(response.data);
        }
      } catch (error) {}
    };
    if (search.length > 0) {
      fetchData();
    }else{
      setResults([])
    }
    return () => (isMounted = false);
  }, [search]);

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
        ></input>
        <label htmlFor="search"></label>
        
      </div>
    </div>
  );
};

export default AutoComplate;
