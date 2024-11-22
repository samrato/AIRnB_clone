import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-6">Welcome to Jumbo Business Platform</h1>
      <div className="space-x-4">
        <Link
          to="/sells"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          View Products
        </Link>
        <Link
          to="/add-product"
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Sell a Product
        </Link>
        <Link
          to="/inbox"
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Inbox
        </Link>
      </div>
    </div>
  );
};

export default Home;
