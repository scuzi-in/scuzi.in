import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();

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
  res.send("🚀 Backend is running successfully on Vercel!");
});

// ❗ Do NOT call app.listen()
// Vercel will handle serverless routing automatically

export default app;
