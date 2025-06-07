import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-black flex flex-col items-center justify-center text-white text-center relative overflow-hidden px-4">
      {/* Stars background */}
      <div className="absolute w-full h-full overflow-hidden z-0">
        <div className="animate-pulse absolute top-10 left-20 w-1 h-1 bg-white rounded-full"></div>
        <div className="animate-pulse absolute top-1/2 left-1/3 w-1 h-1 bg-white rounded-full"></div>
        <div className="animate-pulse absolute bottom-20 right-32 w-1 h-1 bg-white rounded-full"></div>
        <div className="animate-pulse absolute top-1/4 right-10 w-1 h-1 bg-white rounded-full"></div>
        <div className="animate-pulse absolute bottom-10 left-1/4 w-1 h-1 bg-white rounded-full"></div>
      </div>

      {/* Rocket emoji flying */}
      <div className="z-10 text-6xl animate-bounce mb-4">🚀</div>

      <h1 className="z-10 text-5xl md:text-6xl font-bold mb-4">404: Lost in Space</h1>
      <p className="z-10 text-lg md:text-xl text-gray-300 max-w-xl mb-6">
        Oops! The page you're looking for has drifted into the cosmic void.
        Our brave astronaut team is on a mission to bring it back.
      </p>

      <Link to="/" className="z-10 inline-block mt-4 bg-pink-500 hover:bg-pink-600 transition-colors text-white px-6 py-3 rounded-full shadow-lg font-semibold text-lg">
        🏠 Return to Base
      </Link>

      {/* Astronaut Image or Funny GIF */}
      <img
        src="https://media.giphy.com/media/f8vTZweiT1Cec/giphy.gif"
        alt="Funny astronaut gif"
        className="z-10 mt-12 w-60 rounded-xl shadow-lg border-4 border-white"
      />
    </div>
    
    </>
  );
};

export default NotFound;
