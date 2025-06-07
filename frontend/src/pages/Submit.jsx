import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from '../components/Header';
import Footer from '../components/Footer';

const Notification = ({ message, type, onClose }) => {
  // type: "success" | "error"
  const bgColor = type === "success" ? "bg-green-500" : "bg-red-500";
  const icon = type === "success" ? "🎉" : "❌";

  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, 4000);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div
      className={`${bgColor} fixed top-6 right-6 z-50 rounded-lg shadow-lg text-white px-5 py-3 flex items-center space-x-3 max-w-sm`}
      role="alert"
    >
      <span className="text-2xl">{icon}</span>
      <p className="font-semibold">{message}</p>
      <button
        onClick={onClose}
        aria-label="Close notification"
        className="ml-auto text-white hover:text-gray-200 focus:outline-none"
      >
        ✖️
      </button>
    </div>
  );
};

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

      {/* Notification popup */}
      <Notification
        message={successMsg || errorMsg}
        type={successMsg ? "success" : "error"}
        onClose={() => {
          setSuccessMsg("");
          setErrorMsg("");
        }}
      />

      <section className="text-gray-700 body-font relative bg-gradient-to-b from-indigo-50 to-white py-20 min-h-screen flex flex-col justify-center">
        <div className="container mx-auto px-5">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h1 className="text-4xl font-extrabold text-indigo-700 mb-3 tracking-wide drop-shadow-sm">
              🍳 Submit a New Recipe
            </h1>
            <p className="text-lg text-indigo-600/80">
              Share your delicious creations with the community! Fill out the form below.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-lg rounded-lg p-10 max-w-2xl mx-auto"
          >
            <div className="flex flex-col space-y-6">

              <div>
                <label htmlFor="title" className="block mb-2 text-indigo-700 font-semibold text-sm">
                  📝 Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Classic Chocolate Cake"
                  className="w-full border border-indigo-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-600 text-gray-800"
                />
              </div>

              <div>
                <label htmlFor="description" className="block mb-2 text-indigo-700 font-semibold text-sm">
                  📝 Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  required
                  placeholder="Briefly describe your recipe"
                  className="w-full border border-indigo-300 rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-600 text-gray-800 h-28"
                ></textarea>
              </div>

              <div>
                <label htmlFor="ingredients" className="block mb-2 text-indigo-700 font-semibold text-sm">
                  🥄 Ingredients (comma separated)
                </label>
                <input
                  type="text"
                  id="ingredients"
                  name="ingredients"
                  value={form.ingredients}
                  onChange={handleChange}
                  placeholder="e.g. sugar, flour, eggs"
                  required
                  className="w-full border border-indigo-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-600 text-gray-800"
                />
              </div>

              <div>
                <label htmlFor="category" className="block mb-2 text-indigo-700 font-semibold text-sm">
                  🗂 Category
                </label>
                <input
                  type="text"
                  id="category"
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  placeholder="e.g. Dessert, Vegan, Quick"
                  required
                  className="w-full border border-indigo-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-600 text-gray-800"
                />
              </div>

              <div>
                <label htmlFor="steps" className="block mb-2 text-indigo-700 font-semibold text-sm">
                  🔪 Steps (comma separated)
                </label>
                <input
                  type="text"
                  id="steps"
                  name="steps"
                  value={form.steps}
                  onChange={handleChange}
                  placeholder="e.g. Preheat oven, Mix ingredients, Bake for 30 minutes"
                  required
                  className="w-full border border-indigo-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-600 text-gray-800"
                />
              </div>

              <div>
                <label htmlFor="image" className="block mb-2 text-indigo-700 font-semibold text-sm">
                  🖼 Image URL
                </label>
                <input
                  type="url"
                  id="image"
                  name="image"
                  value={form.image}
                  onChange={handleChange}
                  placeholder="https://example.com/image.jpg"
                  required
                  className="w-full border border-indigo-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-600 text-gray-800"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-4 bg-gradient-to-r from-indigo-600 to-indigo-400 hover:from-indigo-700 hover:to-indigo-500 text-white font-bold py-3 rounded-lg shadow-lg transition-all duration-300 disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Submit Recipe"}
              </button>

            </div>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Submit;