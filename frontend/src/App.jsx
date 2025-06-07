import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Recipe from './pages/Recipe';
import Submit from './pages/Submit';
import ContactUs from './pages/ContactUs';
import RecipeDetail from './pages/RecipeDetail';
import NotFound from './pages/NotFound';
import RequireAuth from './auth/RequireAuth';
import SavedRecipe from './pages/SavedRecipe';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<Recipe />} />
      
      {/* Protect these routes */}
      <Route 
        path="/saved" 
        element={
          <RequireAuth>
            <SavedRecipe />
          </RequireAuth>
        } 
      />
      <Route 
        path="/submit" 
        element={
          <RequireAuth>
            <Submit />
          </RequireAuth>
        } 
      />
      <Route 
        path="/contact" 
        element={
          <RequireAuth>
            <ContactUs />
          </RequireAuth>
        } 
      />

      <Route path="/recipes/:id" element={<RecipeDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
