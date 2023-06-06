import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/navbar/Navbar.js';
import Footer from './components/footer/Footer.js';
import Home from './components/home/Home.js';
import Login from './components/login/Login.js';
import Profile from './components/position/Profile.js';
import Register from './components/register/Register.js';
import EditProfile from './components/position/EditProfile.js';
import Form from './components/feedback/Form.js';
import Submission from './components/feedback/Submission.js';
import EditReview from './components/feedback/EditReview.js';

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
      <Route path="/profile" element={<Profile />} />
      <Route path="/editprofile" element={<EditProfile />} />
      <Route path="/feedback" element={<Form />} />
      <Route path="/submission" element={<Submission   />} />
      <Route path="/editreview" element={<EditReview />} />
      </Routes>
      {shouldRenderNavbarAndFooter && <Footer />}
    </>
  );
};

export default App;