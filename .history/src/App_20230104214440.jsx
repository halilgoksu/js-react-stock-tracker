import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import StockDetailPage from "./pages/StockDetailPage";
import StockOverviewPage from "./pages/StockOverviewPage";
import { WatchListContextProvider } from "./context/watchListContext";

//if dont wokk check import export component

function App() {
  return (
    <main className="container">
      <WatchListContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<StockOverviewPage />} />
            <Route path="/detail/:symbol" element={<StockDetailPage />} />
            {/* //<Route path="/detail/:symbol" detailden hemen sonra hangi stock un detayi verileceksek
            //dann
            */}
          </Routes>
        </BrowserRouter>
      </WatchListContextProvider>
    </main>
  );
}



export default App;
