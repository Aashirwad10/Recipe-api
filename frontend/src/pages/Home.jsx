import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import pp from '../assets/pp.png';
import "../App.css";
import { Link } from 'react-router-dom';


function Home() {
  return (
    <>
      <Header />

      {/* ───────────────── Hero Section ───────────────── */}
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Discover Delicious Recipes
                <br className="hidden lg:inline-block" />
                For Every Taste
            </h1>

            <p className="mb-8 leading-relaxed">
                From quick weekday dinners to indulgent weekend treats, explore a curated collection
                of recipes for every craving. Fresh ingredients, easy steps, and mouthwatering results—
                all in one place.
            </p>

            <div className="flex justify-center">
              <Link to="/recipes">
                <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
                    Browse Recipes
                </button>
              </Link>
              <Link to="/submit">
                <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                    Submit Your Own
                </button>
              </Link>
            </div>
          </div>

          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={pp}
            />
          </div>
        </div>
      </section>
      {/* ──────────────── End Hero Section ─────────────── */}

      <Footer />
    </>
  );
}

export default Home;
