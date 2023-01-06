import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import StockDetailPage from './pages/StockDetailPage';
import StockOverviewPage from './pages/StockOverviewPage';
import { WatchListContextProvider } from './context/watchListContext';


//if dont wokk check import export component



function App() {
  return (
    <WatchListContextProvider>

    </WatchListContextProvider>
    
  );
}

export default App;
