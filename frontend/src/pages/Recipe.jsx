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
          {/* Search Bar Struct */}
          <form className="mb-10 flex justify-center">
            <input
              type="text"
              name="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search recipes..."
              className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200"
            />
            {/* In future: add search icon or button */}
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
