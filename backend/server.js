import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import dbConnect from "./config/dbConnect.js";
import cookieParser from "cookie-parser";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

//middleware
app.use(express.json()); // to parse the req.body
app.use(express.urlencoded({ extended: true })); // to parse the form data
app.use(cookieParser());

//routes
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running in the port ${PORT}`);
  dbConnect();
});
