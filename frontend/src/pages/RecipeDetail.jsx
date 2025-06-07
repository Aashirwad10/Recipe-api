import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CheckCircle, ListOrdered, Utensils } from 'lucide-react';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchRecipe = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/recipes/${id}`);
      if (response.data.success) {
        setRecipe(response.data.data);
      } else {
        console.error("Recipe not found");
      }
    } catch (error) {
      console.error("Error fetching recipe:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipe();
  }, [id]);

  if (loading) {
    return <p className="text-center text-xl mt-10">Loading...</p>;
  }

  if (!recipe) {
    return <p className="text-center text-xl mt-10">Recipe not found</p>;
  }

  return (
    <>
      <Header />
      <section className="bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 text-gray-700 py-16">
        <div className="container mx-auto px-5 flex flex-col items-center">
          <img
            className="lg:w-2/4 md:w-3/4 w-full mb-10 object-cover object-center rounded-2xl shadow-xl"
            alt={recipe.title}
            src={recipe.image || 'https://via.placeholder.com/720x600'}
          />
          <div className="text-center max-w-2xl">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-2">{recipe.title}</h1>
            <p className="text-sm text-indigo-600 font-semibold uppercase mb-6 tracking-wider">
              {recipe.category}
            </p>
            <p className="text-lg leading-relaxed text-gray-700">{recipe.description}</p>
          </div>

          <div className="w-full max-w-3xl mt-12 grid gap-10">
            <div className="bg-white p-8 rounded-2xl shadow-md border-l-4 border-indigo-500">
              <h2 className="text-2xl font-bold text-indigo-700 flex items-center mb-4">
                <Utensils className="w-6 h-6 mr-2" /> Ingredients
              </h2>
              <ul className="list-disc list-inside text-gray-800 space-y-1">
                {recipe.ingredients.map((item, idx) => (
                  <li key={idx} className="pl-1">{item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md border-l-4 border-pink-500">
              <h2 className="text-2xl font-bold text-pink-700 flex items-center mb-4">
                <ListOrdered className="w-6 h-6 mr-2" /> Steps
              </h2>
              <ol className="list-decimal list-inside text-gray-800 space-y-2">
                {recipe.steps.map((step, idx) => (
                  <li key={idx} className="pl-1">{step}</li>
                ))}
              </ol>
            </div>
          </div>

          {/* Back to Recipes Button */}
          <div className="text-center mt-12">
            <Link
              to="/recipes"
              className="inline-flex items-center px-6 py-3 bg-indigo-500 text-white font-semibold rounded-full shadow hover:bg-indigo-600 transition duration-200"
            >
              ← Back to Recipes
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default RecipeDetail;