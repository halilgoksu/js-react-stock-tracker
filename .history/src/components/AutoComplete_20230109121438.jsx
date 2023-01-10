import { useState, useEffect, useContext } from "react"
import finnHub from "../apis/finnHub"
import { WatchListContext } from "../context/watchListContext"
import ReactSearchBox from "react-search-box";


export const AutoComplete = () => {
  const [search, setSearch] = useState("")
  const [results, setResults] = useState([])
  const { addStock } = useContext(WatchListContext)

  const renderDropdown = () => {
    const dropDownClass = search ? "show" : null
    return (
      <ul style={{
        height: "500px",
        overflowY: "scroll",
        overflowX: "hidden",
        cursor: "pointer"
      }} className={`dropdown-menu ${dropDownClass}`}>
        {results.map((result) => {
          return (
            <li onClick={() => {
              addStock(result.symbol)
              setSearch("")
            }} key={result.symbol} className="dropdown-item">{result.description} ({result.symbol})</li>
          )
        })}
      </ul>
    )
  }

  useEffect(() => {
    let isMounted = true
    const fetchData = async () => {
      try {
        const response = await finnHub.get("/search", {
          params: {
            q: search
          }
        })

        if (isMounted) {
          setResults(response.data.result)
        }

      } catch (err) {

      }
    }
    if (search.length > 0) {
      fetchData()
    } else {
      setResults([])
    }
    return () => (isMounted = false)
  }, [search])

  return <div className=" mx-auto flex justify-center text-center items-center">
    <div className="form-floating dropdown">
      <input  id="search" type="text"
       className="text-white bg-black  w-1/2 te " placeholder="Search" autoComplete="off"
        value={search} onChange={(e) => setSearch(e.target.value)}></input>
      <label htmlFor="search">Search</label>
      {renderDropdown()}
    </div>
  </div>
}