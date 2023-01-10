import { BrowserRouter, Routes, Route } from "react-router-dom"
import { StockOverviewPage } from "./pages/StockOverviewPage"
import { StockDetailPage } from "./pages/StockDetailPage"
import './App.css'
import { WatchListContextProvider } from "./context/watchListContext"
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';




export default function App() {
  return (
    <main className="container bg-black-600 ">
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
