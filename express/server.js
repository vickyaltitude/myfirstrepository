const express = require("express");
const app = express();
const { MongloClient } = require("mongodb");
require("dotenv").config();

const dbUrl = process.env.DATABASEURL || "mongodb://localhost:27017";
const client = new MongloClient(dbUrl);

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

app.get("/", (req, res) => {
  res.json({ message: "Hello, World!" });
});

app.listen(3000, () => {
  connectDB();
  console.log("Server is running on port 3000");
});
