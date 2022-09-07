import React from 'react';
import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import { Switch, Route } from 'react-router-dom';
import Products from './component/Products';
import Product from './component/Product';
import Cart from './component/Cart';
import Register from './component/Register';
import Login from './component/Login';
import Footer from './component/Footer';
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Products" component={Products} />
        <Route exact path="/Products/:id" component={Product} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </Switch>
      <Footer/>

    </>
  );
}

export default App;
