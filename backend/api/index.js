// /backend/api/index.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "../config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL || "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

// Example route
app.get("/", (req, res) => {
  res.send("🚀 Backend is running successfully!");
});

app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
