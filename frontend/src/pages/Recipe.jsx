import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Recipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(""); // For future search functionality

  const fetchRecipes = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/recipes`);
      if (response.data.success) {
        setRecipes(response.data.data);
      } else {
        console.log("No recipes found");
      }
    } catch (error) {
      console.error("Error fetching recipes:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <>
      <Header />

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          {/* Enhanced Search UI */}
          <form className="mb-10 flex justify-center">
            <div className="relative w-full max-w-md">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
                  />
                </svg>
              </span>
              <input
                type="text"
                name="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search recipes..."
                className="pl-10 pr-4 py-2 w-full rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm transition-all duration-200 text-gray-700 placeholder-gray-400"
              />
            </div>
          </form>

          {loading ? (
            <p className="text-center text-xl">Loading...</p>
          ) : (
            <div className="flex flex-wrap -m-4">
              {recipes.map((item, index) => (
                <div className="p-4 md:w-1/3" key={index}>
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src={item.image || 'https://via.placeholder.com/400x300'}
                      alt="recipe"
                    />
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        {item.category}
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        {item.title}
                      </h1>
                      <p className="leading-relaxed mb-3">{item.description}</p>
                      <div className="flex items-center flex-wrap">
                        <Link
                          to={`/recipes/${item._id}`}
                          className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                        >
                          Learn More
                          <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 12h14" />
                            <path d="M12 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {recipes.length === 0 && (
                <p className="text-center w-full text-gray-500">No recipes found.</p>
              )}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Recipe;
