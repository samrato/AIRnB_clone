import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 text-white sticky-top">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="font-bold text-lg">Jumbo Business</Link>
        <div className="flex space-x-4">
          <Link to="/sells" className="hover:underline">Sells</Link>
          <Link to="/add-product" className="hover:underline">Add Product</Link>
          <Link to="/inbox" className="hover:underline">Inbox</Link>
          <Link to="/login" className="hover:underline">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
