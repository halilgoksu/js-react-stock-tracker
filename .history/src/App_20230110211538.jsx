import { BrowserRouter, Routes, Route } from "react-router-dom"
import { StockOverviewPage } from "./pages/StockOverviewPage"
import { StockDetailPage } from "./pages/StockDetailPage"
import { WatchListContextProvider } from "./context/watchListContext"
import './App.css'
import { NoDataApi } from "./pages/NoDataApi"





export default function App() {
  return (
    <main className="w-screen h-screen items-center justify-center text-center bg-black overflow-auto">
      <WatchListContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<StockOverviewPage />} />
            <Route path="/detail/:symbol" element={<StockDetailPage />} />
            <Route path="/nodata" element={<NoDataApi />}/>
          </Routes>
        </BrowserRouter>
      </WatchListContextProvider>
    </main>
  )
}
