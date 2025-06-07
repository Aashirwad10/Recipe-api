import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            viewBox="0 0 64 64"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            fill="currentColor"
          >
            <path d="M48 24c0-6.6-5.4-12-12-12-2.2 0-4.3.6-6 1.6C27.3 11.6 25.2 11 23 11c-6.6 0-12 5.4-12 12 0 2.7 1 5.2 2.6 7.2C10.2 31.2 8 34.4 8 38c0 5 4 9 9 9h30c5 0 9-4 9-9 0-3.6-2.2-6.8-5.6-6.8 1.6-2 2.6-4.5 2.6-7.2zM16 47h32v5H16z" />
          </svg>
          <span className="ml-3 text-xl">Recipes</span>
        </Link>

        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link
            to="/"
            className={`mr-5 ${isActive('/') ? 'text-red-500 font-semibold' : 'hover:text-gray-900'}`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`mr-5 ${isActive('/recipes') ? 'text-red-500 font-semibold' : 'hover:text-gray-900'}`}
          >
            Recipes
          </Link>
          <Link
            to="/recipes"
            className={`mr-5 ${isActive('/submit') ? 'text-red-500 font-semibold' : 'hover:text-gray-900'}`}
          >
            Submit
          </Link>
          <Link
            to="/contact"
            className={`mr-5 ${isActive('/contact') ? 'text-red-500 font-semibold' : 'hover:text-gray-900'}`}
          >
            Contact Us
          </Link>
        </nav>

        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          L/O
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;
