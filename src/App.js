import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Stock from './components/Stock';
import Dashboard from './components/Dashboard';
import Nav from './components/Nav';
import Data from './Data-api'
import { useState } from 'react';

function App() {
let [stocks] = useState(Data)

  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/stock/:symbol' element={<Stock stocks={stocks}/>} />
        <Route path='/stocks' element={<Dashboard stocks={stocks}/>} />
      </Routes>
    </div>
  );
}

export default App;
