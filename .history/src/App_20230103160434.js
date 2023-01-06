import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';



function App() {
  return (
    <main>
      <BrowserRouter>
      <Routes>
        <Route  path ='/' element={<St}/>
      </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
