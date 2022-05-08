import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import AddInventoryItems from './Components/AddInventoryItems/AddInventoryItems';
import Blogs from './Components/Blogs/Blogs';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Header/Navbar/Navbar';
import Home from './Components/Home/Home';
import Inventory from './Components/Inventory/Inventory';
import ItemDetails from './Components/ItemDetails/ItemDetails';
import Loading from './Components/Loading/Loading';
import Login from './Components/Login/Login/Login';
import RequireAuth from './Components/Login/RequireAuth/RequireAuth';
import SignUp from './Components/Login/SignUp/SignUp';
import ManageItems from './Components/ManageItems/ManageItems';
import MyItems from './Components/MyItems/MyItems';
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
          <Route path='blogs' element={<Blogs></Blogs>} />
          <Route path='inventory' element={
            <RequireAuth>
              <Inventory></Inventory>
            </RequireAuth>
          } />
          <Route path='inventory/:itemsId' element={
            <RequireAuth>
              <ItemDetails></ItemDetails>
            </RequireAuth>
          } />
          <Route path='addItems' element={
            <RequireAuth>
              <AddInventoryItems></AddInventoryItems>
            </RequireAuth>
          } />
          <Route path='myItems' element={
            <RequireAuth>
              <MyItems></MyItems>
            </RequireAuth>
          } />
          <Route path='myItems/:itemsId' element={
            <RequireAuth>
              <ItemDetails></ItemDetails>
            </RequireAuth>
          } />
          <Route path='manage' element={
            <RequireAuth>
              <ManageItems></ManageItems>
            </RequireAuth>
          } />
          <Route path='*' element={<NotFound></NotFound>} />
        </Routes>
      </div>
      <ToastContainer></ToastContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
