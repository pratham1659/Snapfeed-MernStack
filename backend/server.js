import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import dbConnect from "./config/dbConnect.js";
import cookieParser from "cookie-parser";
import { v2 as cloudinary } from "cloudinary";

//environment variable configs
dotenv.config();
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  cloud_url: process.env.CLOUDINARY_URL,
});
const app = express();
const PORT = process.env.PORT || 8000;

//middleware
app.use(express.json()); // to parse the req.body
app.use(express.urlencoded({ extended: true })); // to parse the form data
app.use(cookieParser());

//routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running in the port ${PORT}`);
  dbConnect();
});
