import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.get("/", (_, res) => {
  res.send("Hello Hi!");
});

app.listen(4000, () => {
  mongoose.connect(process.env.MONGODB_URI);
  console.log(`Server is running on http://localhost:4000`);
});
