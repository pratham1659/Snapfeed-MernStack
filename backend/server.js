import express from "express";
import authRoutes from "./routes/authRoutes.js";
const app = express();

app.use("/api/auth", authRoutes);

app.listen(8080, () => {
  console.log("Server is running in the port 8080");
});
