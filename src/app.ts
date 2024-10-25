import express from "express";
import dotenv from "dotenv";
import "reflect-metadata";
import { connectDB } from "./config/database";
import userRoutes from "./userAdmin/userAdmin.routes";
import postRoutes from "./Post/Post.routes";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3003;

app.use(express.json());
connectDB();

app.use("/userAdmin", userRoutes);
app.use("/posts", postRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});