import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import StockOverviewPage from './pages/StockOverviewPage';



function App() {
  return (
    <main>
      <BrowserRouter>
      <Routes>
        <Route  path ='/' element={<StockOverviewPage />}/>
        <Route path='/detail/:symbol' element={<Stock} />
      </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
