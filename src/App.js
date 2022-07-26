
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import Register from './Components/Register/Register';
import AboutUs from './Pages/About-Us/AboutUs';
import AllProduct from './Pages/AllProduct/AllProduct';
import Blog from './Pages/Blogs/Blog';
import Home from './Pages/Home';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/all-product' element={<AllProduct></AllProduct>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/product/:id' element={<ProductDetail></ProductDetail>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/contruct-us' element={<AboutUs></AboutUs>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
