import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import StockDetailPage from './pages/StockDetailPage';
import StockOverviewPage from './pages/StockOverviewPage';

//if dont wokk check import export componanat



function App() {
  return (
    <main className='container'>
      <BrowserRouter>
      <Routes>
        <Route  path ='/' element={<StockOverviewPage />}/>
        <Route path='/detail/:symbol' element={<StockDetailPage />} />
      </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
