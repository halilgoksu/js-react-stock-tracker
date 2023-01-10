import { BrowserRouter, Routes, Route } from "react-router-dom"
import { StockOverviewPage } from "./pages/StockOverviewPage"
import { StockDetailPage } from "./pages/StockDetailPage"
import { WatchListContextProvider } from "./context/watchListContext"
import './App.css'




export default function App() {
  return (
    <main className="container  h-screen w-screen bg-black m-0 p-0 items-center justify-center text-center
    border-3 border-red
    ">
      <WatchListContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<StockOverviewPage />} />
            <Route path="/detail/:symbol" element={<StockDetailPage />} />
          </Routes>
        </BrowserRouter>
      </WatchListContextProvider>
    </main>
  )
}
