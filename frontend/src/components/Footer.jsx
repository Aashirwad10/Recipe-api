import React from 'react';
import "../App.css";

function Footer() {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <svg
            viewBox="0 0 64 64"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            fill="currentColor"
          >
            <path d="M48 24c0-6.6-5.4-12-12-12-2.2 0-4.3.6-6 1.6C27.3 11.6 25.2 11 23 11c-6.6 0-12 5.4-12 12 0 2.7 1 5.2 2.6 7.2C10.2 31.2 8 34.4 8 38c0 5 4 9 9 9h30c5 0 9-4 9-9 0-3.6-2.2-6.8-5.6-6.8 1.6-2 2.6-4.5 2.6-7.2zM16 47h32v5H16z" />
          </svg>
          <span className="ml-3 text-xl">Recipe</span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2025 — Made with Tailblocks and ❤️
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a className="text-gray-500" href="https://www.facebook.com/vigor.spiritless"> {/* Facebook link*/} 
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500" href="https://www.instagram.com/black_eyelol/"> {/* Instagram link*/} 
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500" href="https://www.linkedin.com/in/aashirwad-budhathoki-969832347/"> {/* linkedin link*/} 
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
