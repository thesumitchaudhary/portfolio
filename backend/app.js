import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const app = express();
const mongoUri = process.env.MONGO_URI;

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({
  origin: process.env.CORS_ORIGIN || "http://localhost:5173",
  credentials: true
}));

// Connect to MongoDB
if (!mongoUri || !/^mongodb(\+srv)?:\/\//.test(mongoUri)) {
  console.error('❌ Invalid MONGO_URI. Use "mongodb://" or "mongodb+srv://" in backend/.env');
  process.exit(1);
}

mongoose.connect(mongoUri)
.then(() => console.log("✅ MongoDB connected"))
.catch((err) => console.error("❌ MongoDB error:", err));

// Routes
app.use("/api", contactRoutes);
app.get("/",(req,res) =>{
  res.send("hey it's working")
})

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
