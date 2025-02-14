import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import notificationRoutes from "./routes/notificationRoutes.js";
import dbConnect from "./config/dbConnect.js";
import cors from "cors";
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
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

//middleware
app.use(express.json()); // to parse the req.body
app.use(express.urlencoded({ extended: true })); // to parse the form data
app.use(cookieParser());
app.use(cors(corsOptions));

//routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/notifications", notificationRoutes);

app.listen(PORT, () => {
  dbConnect();
  console.log(`Server is running in the port ${PORT}`);
});
