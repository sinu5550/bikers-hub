import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import AddInventoryItems from './Components/AddInventoryItems/AddInventoryItems';
import Navbar from './Components/Header/Navbar/Navbar';
import Home from './Components/Home/Home';
import Inventory from './Components/Inventory/Inventory';
import ItemDetails from './Components/ItemDetails/ItemDetails';
import Loading from './Components/Loading/Loading';
import Login from './Components/Login/Login/Login';
import SignUp from './Components/Login/SignUp/SignUp';
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
          <Route path='login' element={<Login></Login>} />
          <Route path='signup' element={<SignUp></SignUp>} />
          <Route path='inventory' element={<Inventory></Inventory>} />
          <Route path='inventory/:itemsId' element={<ItemDetails></ItemDetails>} />
          <Route path='addItems' element={<AddInventoryItems></AddInventoryItems>} />
          <Route path='manage' element={<ManageItems></ManageItems>} />
          <Route path='loading' element={<Loading></Loading>} />
          <Route path='*' element={<NotFound></NotFound>} />
        </Routes>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
