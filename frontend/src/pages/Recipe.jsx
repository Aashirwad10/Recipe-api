import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react'; // <--- import Clerk hook

const Recipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Track saved recipes by their IDs
  const [savedRecipes, setSavedRecipes] = useState(new Set());

  const limit = 9;

  // Use Clerk's hook to check login state
  const { isSignedIn } = useUser();

  const fetchRecipes = async (pageNum = 1, category = "", append = false) => {
    setLoading(true);
    try {
      const params = { page: pageNum, limit };
      if (category) params.category = category;

      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/recipes`, { params });

      if (response.data.success) {
        if (append) {
          setRecipes((prev) => [...prev, ...response.data.data]);
        } else {
          setRecipes(response.data.data);
        }
        setTotalPages(response.data.totalPages);
      } else {
        if (!append) setRecipes([]);
      }
    } catch (error) {
      console.error("Error fetching recipes:", error);
      if (!append) setRecipes([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes(page, selectedCategory, page !== 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, selectedCategory]);

  useEffect(() => {
    setPage(1);
  }, [selectedCategory]);

  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleLoadMore = () => {
    if (page < totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  // Toggle save state for a recipe
  const toggleSave = (id) => {
    setSavedRecipes(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <>
      <Header />

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          {/* Search & Filter */}
          <form className="mb-10 flex justify-center">
            <div className="mb-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Search Input */}
              <div className="relative w-full max-w-md">
                <span className="absolute inset-y-0 left-3 flex items-center text-indigo-400 pointer-events-none">
                  <svg
                    className="w-5 h-5 animate-pulse transition-all duration-150"
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
                  className="pl-10 pr-4 py-3 w-full rounded-full border border-indigo-200 bg-white/70 backdrop-blur-sm text-gray-700 placeholder-gray-400 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-300"
                />
              </div>

              {/* Category Filter */}
              <div className="relative w-64 sm:w-72 md:w-80">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="appearance-none w-full rounded-full border border-indigo-200 bg-white/70 backdrop-blur-sm px-4 py-2 pr-10 text-gray-600 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300"
                >
                  <option value="">All Categories</option>
                  <option value="Breakfast">Breakfast</option>
                  <option value="Lunch">Lunch</option>
                  <option value="Dinner">Dinner</option>
                  <option value="Dessert">Dessert</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-indigo-400">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </form>

          {/* Recipes List */}
          {loading && page === 1 ? (
            <p className="text-center text-xl">Loading...</p>
          ) : (
            <>
              <div className="flex flex-wrap -m-4">
                {filteredRecipes.length > 0 ? (
                  filteredRecipes.map((item) => {
                    const isSaved = savedRecipes.has(item._id);
                    return (
                      <div className="p-4 md:w-1/3" key={item._id}>
                        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                          <img
                            className="lg:h-48 md:h-36 w-full object-cover object-center"
                            src={item.image || 'https://via.placeholder.com/400x300'}
                            alt="recipe"
                          />
                          <div className="p-6">
                            <div className="flex items-center justify-between mb-1">
                              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400">
                                {item.category}
                              </h2>

                              {/* Show save icon only if user is signed in */}
                              {isSignedIn && (
                                <button
                                  onClick={() => toggleSave(item._id)}
                                  aria-label={isSaved ? "Unsave Recipe" : "Save Recipe"}
                                  className="focus:outline-none"
                                >
                                  {isSaved ? (
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-6 w-6 text-red-500"
                                      fill="currentColor"
                                      viewBox="0 0 24 24"
                                      stroke="none"
                                    >
                                      <path d="M6 4a2 2 0 0 0-2 2v16l8-5 8 5V6a2 2 0 0 0-2-2H6z" />
                                    </svg>
                                  ) : (
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-6 w-6 text-indigo-400 hover:text-indigo-600 transition-colors"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth={2}
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 4a2 2 0 0 0-2 2v16l8-5 8 5V6a2 2 0 0 0-2-2H6z"
                                      />
                                    </svg>
                                  )}
                                </button>
                              )}
                            </div>

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
                    );
                  })
                ) : (
                  <p className="text-center w-full text-gray-500">No recipes found.</p>
                )}
              </div>

              {!loading && page < totalPages && (
                <div className="flex justify-center mt-8">
                  <button
                    onClick={handleLoadMore}
                    className="bg-indigo-500 text-white px-6 py-3 rounded-full hover:bg-indigo-600 transition"
                  >
                    Load More
                  </button>
                </div>
              )}

              {loading && page > 1 && <p className="text-center mt-6">Loading more...</p>}
            </>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Recipe;