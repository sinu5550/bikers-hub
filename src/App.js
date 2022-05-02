import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import AddInventoryItems from './Components/AddInventoryItems/AddInventoryItems';
import Navbar from './Components/Header/Navbar/Navbar';
import Home from './Components/Home/Home';
import Inventory from './Components/Inventory/Inventory';
import ManageItems from './Components/ManageItems/ManageItems';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div>
      <Navbar></Navbar>

      <div>
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='home' element={<Home></Home>} />
          <Route path='inventory' element={<Inventory></Inventory>} />
          <Route path='add-items' element={<AddInventoryItems></AddInventoryItems>} />
          <Route path='manage-items' element={<ManageItems></ManageItems>} />
          <Route path='*' element={<NotFound></NotFound>} />
        </Routes>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
