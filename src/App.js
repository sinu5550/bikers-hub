import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddInventoryItems from './Components/AddInventoryItems/AddInventoryItems';
import Navbar from './Components/Header/Navbar/Navbar';
import Home from './Components/Home/Home';
import Inventory from './Components/Inventory/Inventory';

function App() {
  return (
    <div>
      <Navbar></Navbar>

      <div>
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='inventory' element={<Inventory></Inventory>} />
          <Route path='addItems' element={<AddInventoryItems></AddInventoryItems>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
