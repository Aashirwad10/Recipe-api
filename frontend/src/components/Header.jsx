import React from 'react';

function Header() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href="#">
          <svg
            viewBox="0 0 64 64"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            fill="currentColor"
          >
            <path d="M48 24c0-6.6-5.4-12-12-12-2.2 0-4.3.6-6 1.6C27.3 11.6 25.2 11 23 11c-6.6 0-12 5.4-12 12 0 2.7 1 5.2 2.6 7.2C10.2 31.2 8 34.4 8 38c0 5 4 9 9 9h30c5 0 9-4 9-9 0-3.6-2.2-6.8-5.6-6.8 1.6-2 2.6-4.5 2.6-7.2zM16 47h32v5H16z" />
          </svg>
          <span className="ml-3 text-xl">Recipes</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900" href="#">Home</a>
          <a className="mr-5 hover:text-gray-900" href="#">Second Link</a>
          <a className="mr-5 hover:text-gray-900" href="#">Third Link</a>
          <a className="mr-5 hover:text-gray-900" href="#">Fourth Link</a>
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
