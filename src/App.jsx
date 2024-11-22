import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Sells from './pages/Sells';
import AddProduct from './components/AddProduct';
import Inbox from './pages/Inbox';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/sells" element={<Sells />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/inbox" element={<Inbox />} />
      </Routes>
    </Router>
  );
};

export default App;
