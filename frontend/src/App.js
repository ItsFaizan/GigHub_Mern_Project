import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/navbar/Navbar.js';
import Footer from './components/footer/Footer.js';
import Home from './components/home/Home.js';
import Login from './components/login/Login.js';
import Register from './components/register/Register.js';

const App = () => {
  const location = useLocation();
  const shouldRenderNavbarAndFooter = location.pathname !== '/' && location.pathname !== '/register';

  return (
    <>
      {shouldRenderNavbarAndFooter && <Navbar />}
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      </Routes>
      {shouldRenderNavbarAndFooter && <Footer />}
    </>
  );
};

export default App;