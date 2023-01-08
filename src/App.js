import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';
import Contact from './Pages/Contact/Contact';
import Error from './Pages/Error/Error';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
import ManageInventory from './Pages/Inventory/ManageInventory';
import UpdateProduct from './Pages/Inventory/updateProduct';
import AddItem from './Pages/Item/AddItem';
import MyItems from './Pages/Item/MyItems';
import Login from './Pages/Login/Login';
import Navbar from './Pages/Navbar/Navbar';
import Register from './Pages/Register/Register';
import RequireAuth from './Pages/RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Header></Header>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/manageItem' element={<RequireAuth><ManageInventory></ManageInventory></RequireAuth>}></Route>
        <Route path='/addItem' element={<RequireAuth><AddItem></AddItem></RequireAuth>}></Route>
        <Route path='/myItem' element={<RequireAuth><MyItems></MyItems></RequireAuth>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/update/:id' element={<UpdateProduct></UpdateProduct>}></Route>
        <Route path='*' element={<Error></Error>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;