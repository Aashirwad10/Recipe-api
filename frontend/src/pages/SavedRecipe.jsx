import React from 'react'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'

const SavedRecipe = () => {
  return (
    <>
      <Header />
      <main className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-yellow-50 to-orange-100 p-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="bg-white shadow-2xl rounded-2xl p-8 max-w-xl w-full text-center"
        >
          <h1 className="text-3xl font-bold text-orange-600 mb-4">Coming Soon 🍳</h1>
          <p className="text-gray-600 text-lg">
            The <span className="font-semibold text-orange-500">Saved Recipes</span> feature is under construction.
            <br />
            We’ll serve it up fresh shortly — stay tuned!
          </p>
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-4xl mt-6"
          >
            ⏳
          </motion.div>
        </motion.div>
      </main>
      <Footer />
    </>
  )
}

export default SavedRecipe
