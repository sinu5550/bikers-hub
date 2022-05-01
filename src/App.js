import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Header/Navbar/Navbar';
import Home from './Components/Home/Home';
import Inventory from './Components/Inventory/Inventory';

function App() {
  return (
    <div>
      <Navbar></Navbar>

      <div className='bg-indigo-600 w-full h-screen'>
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='inventory' element={<Inventory></Inventory>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
