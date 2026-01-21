const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const todoRoutes = require("./routes/todoRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", todoRoutes);

const PORT = process.env.PORT || 3000;
const MONGO_URI = "mongodb://localhost:27017/coursesample";

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Error connecting to MongoDB:", err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
