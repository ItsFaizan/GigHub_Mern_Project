import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './index.css';
import Login from './components/login/Login.js';
import Register from './components/register/Register.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
   <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      </Routes>
  </Router>
);