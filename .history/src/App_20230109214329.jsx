import { BrowserRouter, Routes, Route } from "react-router-dom"
import { StockOverviewPage } from "./pages/StockOverviewPage"
import { StockDetailPage } from "./pages/StockDetailPage"
import { WatchListContextProvider } from "./context/watchListContext"
import './App.css'




export default function App() {
  return (
    <main className="container  h-full bg-black  p-2 m-0 items-center justify-center text-center">
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
