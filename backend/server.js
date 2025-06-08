import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Recipe from "./models/recipe.model.js";
import Contact from "./models/contact.model.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/recipes", async(req, res) => {// create recipe
    const { title, description, ingredients, category,steps,image } = req.body;
    if(!title || !description || !ingredients || !category || !steps || !image) {
        return res.status(400).json({ 
            success: false,
            message: "All fields are required"
        });
    }
    try{
        const newRecipe = await Recipe.create({title, description, ingredients, category,steps,image});
        res.status(201).json({
            success: true,
            data: newRecipe,
            message: "Recipe created successfully"
        });   
    }catch(error) {
        res.status(500).json({
            success: false,
            message: "Something went wrong"
        });
    }
});

app.get("/api/recipes", async (req, res) => { // get recipes (also by cat) + pagination support
  try {
    const filter = {};

    if (req.query.category) {
      filter.category = { $regex: new RegExp(`^${req.query.category}$`, "i") };
    }

    // Pagination params with defaults
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 9;
    const skip = (page - 1) * limit;

    const total = await Recipe.countDocuments(filter);
    const recipes = await Recipe.find(filter).skip(skip).limit(limit);

    res.status(200).json({
      success: true,
      data: recipes,
      total,
      page,
      totalPages: Math.ceil(total / limit),
      message: "Recipes fetched successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Couldn't get recipes, something went wrong"
    });
  }
});

app.get("/api/recipes/:id", async (req, res) => { // get recipe by id
    const { id } = req.params;
    try {
        const recipe = await Recipe.findById(id);
        if (!recipe) {
            return res.status(404).json({
                success: false,
                message: "Recipe not found"
            });
        }
        res.status(200).json({
            success: true,
            data: recipe,
            message: "Recipe fetched successfully"
        });
    }catch (error) {
        res.status(500).json({
            success: false,
            message: "Couldn't get recipe, something went wrong"
        });
    }
});

app.patch("/api/recipes/:id", async (req, res) => { // (Partially) update recipe
    const { id } = req.params;
    const updates = req.body;
    try {
        const recipe = await Recipe.findById(id);
        if (!recipe) {
            return res.status(404).json({
                success: false,
                message: "Recipe not found"
            });
        }
        // Loop through only the fields provided in the request body
        for (let key in updates) {
            if (recipe[key] !== undefined) {
                recipe[key] = updates[key];
            }
        }
        await recipe.save();
        res.status(200).json({
            success: true,
            data: recipe,
            message: "Recipe updated successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Couldn't update recipe, something went wrong"
        });
    }
});

app.delete("/api/recipes/:id", async (req, res) => { // delete recipe
    const { id } = req.params;
    try {
        const recipe = await Recipe.findByIdAndDelete(id);
        if (!recipe) {
            return res.status(404).json({
                success: false,
                message: "Recipe not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Recipe deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Couldn't delete recipe, something went wrong"
        });
    }
});

app.post("/api/contact", async (req, res) => { // contact us
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ success: false, message: "Email is required" });
  }

  try {
    const newContact = await Contact.create({ email });
    res.status(200).json({ success: true, message: "Thank you for contacting us!" });
  } catch (error) {
    if (error.code === 11000) { // duplicate email
      return res.status(400).json({ success: false, message: "Email already submitted" });
    }
    res.status(500).json({ success: false, message: "Server error" });
  }
});

app.listen(5000, () => {
    connectDB();
    console.log("server online on port 5000");
});





