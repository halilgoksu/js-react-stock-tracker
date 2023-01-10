import { useState, useEffect, useContext } from "react"
import finnHub from "../apis/finnHub"
import { WatchListContext } from "../context/watchListContext"
import {FaSearch} from "react-icons/fa"


export const AutoComplete = () => {
  const [search, setSearch] = useState("")
  const [results, setResults] = useState([])
  const { addStock } = useContext(WatchListContext)

  const renderDropdown = () => {
    const dropDownClass = search ? "show" : null
    return (
      <ul className={`dropdown-menu ${dropDownClass}`}>
        {results.map((result) => {
          return (
            <li onClick={() => {
              addStock(result.description )
            }} key={result.symbol} className="dropdown-item">{result.description} ({result.symbol})
          
            </li>
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

  return <div className="flex-col justify-center text-center items-center m-2">
    <div className="flex-col w-full text-center  items-center justify-center ">
      <input  id="search" type="text"
       className=" inline text-white text-sm bg-black  w-1/3 form-control " placeholder="Search" autoComplete="off"
        value={search} onChange={(e) => setSearch(e.target.value)}>
      </input>
      <div className="flex justify-center items-center text-center">
      {renderDropdown()}

        </div>   
    </div>
    <FaSearch className="inline text-xl m-3 text-white "/>
    

  </div>
}