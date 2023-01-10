import { useState, useEffect, useContext } from "react"
import finnHub from "../apis/finnHubNotes"
import { WatchListContext } from "../context/watchListContext"


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

  return <div className="w-50 p-5 rounded mx-auto">
    <div className="form-floating dropdown">
      <input  id="search" type="text"
       className="text-white bg-black          form-control" placeholder="Search" autoComplete="off"
        value={search} onChange={(e) => setSearch(e.target.value)}></input>
      <label htmlFor="search">Search</label>
      {renderDropdown()}
    </div>
  </div>
}