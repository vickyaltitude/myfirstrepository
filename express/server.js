const express = require("express");
const cors = require("cors");
const app = express();
const { MongoClient } = require("mongodb");
require("dotenv").config();

app.use(cors());
app.use(express.json());

const dbUrl = process.env.DATABASEURL || "mongodb://localhost:27017";
const client = new MongoClient(dbUrl);

let db;

async function connectDB() {
  try {
    await client.connect();
    db = client.db("coursesample");
    console.log("Connected to database");
  } catch (err) {
    console.error("Database connection failed", err);
  }
}

app.get("/home", (req, res) => {
  res.json({ message: "Hello, World!" });
});

app.get("/users", async (req, res) => {
  try {
    const usersData = await db.collection("users").find().toArray();
    console.log(usersData);
    res.status(200).json(usersData);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

app.listen(3000, () => {
  connectDB();
  console.log("Server is running on port 3000");
});
