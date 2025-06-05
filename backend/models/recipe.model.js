import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, // title is mandatory
    unique: true
  },
  description: {
    type: String,
  },
  ingredients: {
    type: [String], // an array of ingredient names like ["flour", "eggs"]
    required: true,
  },
  category: {
    type: String, // e.g., "breakfast", "dessert"
  },
  steps: {
    type: [String],
    required: true
  }
},
{
    timestamps: true
}
);

const Recipe = mongoose.model('Recipe', recipeSchema);

export default Recipe;
