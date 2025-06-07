import React, { useState } from "react";
import axios from "axios";
import Header from '../components/Header';
import Footer from '../components/Footer';

const Submit = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    ingredients: "",
    category: "",
    steps: "",
    image: ""
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    try {
      // Prepare data - convert comma separated strings to arrays for ingredients & steps
      const payload = {
        title: form.title.trim(),
        description: form.description.trim(),
        ingredients: form.ingredients.split(",").map(s => s.trim()).filter(Boolean),
        category: form.category.trim(),
        steps: form.steps.split(",").map(s => s.trim()).filter(Boolean),
        image: form.image.trim(),
      };

      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/recipes`, payload);

      if (response.data.success) {
        setSuccessMsg("Recipe submitted successfully!");
        setForm({
          title: "",
          description: "",
          ingredients: "",
          category: "",
          steps: "",
          image: ""
        });
      } else {
        setErrorMsg("Failed to submit recipe.");
      }
    } catch (error) {
      setErrorMsg("Error submitting recipe. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />

      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Submit a New Recipe
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Fill out the form below to add your recipe.
            </p>
            {successMsg && <p className="mt-4 text-green-600 font-semibold">{successMsg}</p>}
            {errorMsg && <p className="mt-4 text-red-600 font-semibold">{errorMsg}</p>}
          </div>

          <form
            onSubmit={handleSubmit}
            className="lg:w-1/2 md:w-2/3 mx-auto"
          >
            <div className="flex flex-wrap -m-2">

              <div className="p-2 w-full">
                <label htmlFor="title" className="leading-7 text-sm text-gray-600">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              <div className="p-2 w-full">
                <label htmlFor="description" className="leading-7 text-sm text-gray-600">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-24 text-base outline-none text-gray-700 py-2 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>

              <div className="p-2 w-full">
                <label htmlFor="ingredients" className="leading-7 text-sm text-gray-600">
                  Ingredients (comma separated)
                </label>
                <input
                  type="text"
                  id="ingredients"
                  name="ingredients"
                  value={form.ingredients}
                  onChange={handleChange}
                  placeholder="e.g. sugar, flour, eggs"
                  required
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              <div className="p-2 w-full">
                <label htmlFor="category" className="leading-7 text-sm text-gray-600">
                  Category
                </label>
                <input
                  type="text"
                  id="category"
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  placeholder="e.g. Dessert, Vegan, Quick"
                  required
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              <div className="p-2 w-full">
                <label htmlFor="steps" className="leading-7 text-sm text-gray-600">
                  Steps (comma separated)
                </label>
                <input
                  type="text"
                  id="steps"
                  name="steps"
                  value={form.steps}
                  onChange={handleChange}
                  placeholder="e.g. Preheat oven, Mix ingredients, Bake for 30 minutes"
                  required
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              <div className="p-2 w-full">
                <label htmlFor="image" className="leading-7 text-sm text-gray-600">
                  Image URL
                </label>
                <input
                  type="url"
                  id="image"
                  name="image"
                  value={form.image}
                  onChange={handleChange}
                  placeholder="https://example.com/image.jpg"
                  required
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              <div className="p-2 w-full">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex mx-auto text-white bg-indigo-500 border-0 py-3 px-10 focus:outline-none hover:bg-indigo-600 rounded text-lg transition-colors disabled:opacity-50"
                >
                  {loading ? "Submitting..." : "Submit Recipe"}
                </button>
              </div>

            </div>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Submit;
