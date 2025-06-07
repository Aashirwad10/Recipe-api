import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Recipe from './pages/Recipe';
import Submit from './pages/Submit';
import ContactUs from './pages/ContactUs';
import RecipeDetail from './pages/RecipeDetail';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipe />} />
        <Route path="/submit" element={<Submit />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/recipes/:id" element={<RecipeDetail />} />
        <Route path="*" element={<NotFound />} />
        {/* Add more routes here */}
      </Routes>
    </Router>
  );
}

export default App;
