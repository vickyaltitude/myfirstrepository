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

app.get("/expense", async (req, res) => {
  try {
    const expenseData = await db.collection("expensetracker").find().toArray();
    console.log(expenseData);
    res.status(200).json(expenseData);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

app.post("/addexpense", async (req, res) => {
  try {
    const requestData = req.body;
    let storeData = await db
      .collection("expensetracker")
      .insertOne(requestData);
    console.log(storeData);
    res.status(201).json({ message: "Expense added successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to add expense" });
  }
});

app.put("/editexpense/:targetid", async (req, res) => {
  try {
    const targetId = parseInt(req.params.targetid);
    const { expenseTitle, expenseAmount } = req.body;
    let editData = await db
      .collection("expensetracker")
      .updateOne(
        { id: targetId },
        { $set: { expenseTitle: expenseTitle, expenseAmount: expenseAmount } },
      );
    console.log(editData);
    res.status(200).json({ message: "Expense edited successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to edit expense" });
  }
});

app.delete("/deleteexpense/:targetid", async (req, res) => {
  try {
    const targetId = parseInt(req.params.targetid);
    let deleteData = await db
      .collection("expensetracker")
      .deleteOne({ id: targetId });
    res.status(200).json({ message: "Expense deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to delete expense" });
  }
});
app.listen(3000, () => {
  connectDB();
  console.log("Server is running on port 3000");
});
