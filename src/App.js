import React from 'react';
import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './component/Products';
import Product from './component/Product';
import Cart from './component/Cart';
import Footer from './component/Footer';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="/Products" element={<Products />} />
        <Route  path="/Products/:id" element={ <Product />} />
        <Route  path="/cart" element={ <Cart />} />
        {/* <Route  path="/register" element={ <Register />} />
        <Route  path="/login" element={ <Login />} /> */}
      </Routes>
      <Footer/>

    </BrowserRouter>
  );
}

export default App;
