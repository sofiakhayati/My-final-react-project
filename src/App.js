
import './App.css';
import React from "react"
import {
  BrowserRouter as Router, Routes,
  Route,
} from "react-router-dom";
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Regsiter from './pages/login/Regsiter';
import Login from './pages/login/Login';
import Account from './pages/account/Account';
import { useSelector } from 'react-redux';
function App() {
  const isLoggIn = useSelector((state) => state.auth.isLoggIn)
  const cartItems = useSelector((state) => state.cart.itemsList)
  console.log(cartItems)
  return (
    <>
    {isLoggIn && (
      <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/register" element={<Regsiter />}/>
        <Route exact path="/login" element={<Login />}/>
        <Route exact path="/account" element={<Account />}/>
      </Routes>
    </Router>
    )}
    {!isLoggIn && <Login />}
      
    </>
  );
}

export default App;
