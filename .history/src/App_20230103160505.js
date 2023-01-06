import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import StockDetailPage from './pages/StockDetailPage';



function App() {
  return (
    <main>
      <BrowserRouter>
      <Routes>
        <Route  path ='/' element={<Stock />}/>
      </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
