🍽️ Recipe API

A simple and beginner-friendly Recipe API built with **Node.js**, **Express**, and **MongoDB** using **Mongoose**.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

## 🚀 Features

- ✅ Create, Read, Update, and Delete Recipe items
- 🧱 RESTful API structure
- 📦 MongoDB integration using Mongoose
- 🧪 Tested with Postman
- 🌱 Beginner-friendly and clean codebase

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv

## 📮 API Endpoints

| Method | Route               | Description                              |
|--------|-------------------  |------------------------------------------|
| POST   | `/api/recipes`      | create recipe                            |
| GET    | `/api/recipes`      | get recipes (also by cat)                |
| GET    | `/api/recipes/:id`  | get recipe by id                         |
| PATCH  | `/api/recipes/:id`  | (Partially) update recipe                |
| DELETE | `/api/recipes/:id`  |  delete recipe                           |


## 🔧 Setup Instructions

1. **Clone the repository**

    ```
    git clone https://github.com/Aashirwad10/Recipe-ap
    cd Recipe-api
    ```
    
2. **Install dependencies**

    ```
    npm install
    ```

3. **Create `.env` file**

    - Create a `.env` file in the root folder
    - Add your MongoDB URI like this:

      ```
      MONGO_URI= mongodb+srv://abcdefghijklmnopqrstuvwxyz
      ```

4. **Run the server**

    ```
    npm run dev
    ```

Server runs on `http://localhost:5000` (or your specified port)

## 📸 API Examples

**UPDATE TOMORROW**
