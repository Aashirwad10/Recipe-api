import React from 'react';
import "../App.css";
import Header from '../components/Header';
import Footer from '../components/Footer';
import recipeImage from '../assets/recipe-sample.png';

function Recipe() {
  return (
    <>
      <Header />

      {/* ─────────────── Recipe Section ─────────────── */}
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="Recipe"
            src={recipeImage}
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Creamy Garlic Butter Chicken
            </h1>
            <p className="mb-8 leading-relaxed">
              A rich and comforting dish made with tender chicken breasts simmered in a creamy garlic butter sauce.
              Serve it with rice, pasta, or crusty bread for a hearty meal.
            </p>

            <ul className="mb-8 text-left list-disc list-inside">
              <li>✅ Prep Time: 15 mins</li>
              <li>✅ Cook Time: 20 mins</li>
              <li>✅ Servings: 4</li>
            </ul>

            <div className="flex justify-center">
              <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
                Start Cooking
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Save to Favorites
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* ───────────── End Recipe Section ───────────── */}

      <Footer />
    </>
  );
}

export default Recipe;
