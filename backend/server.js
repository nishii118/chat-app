// import express from 'express';
import express from "express";
import dotenv from 'dotenv'
import authRoute from './routes/authRoutes.js';
import messageRoute from './routes/messageRoutes.js';
import connectToMongoDB from "./db/connectToMongoDB.js";
import cookieParser from "cookie-parser";
import userRoute from './routes/userRoutes.js'
import cors from 'cors'
dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cookieParser()); 
app.use(cors( {
  origin: "http://localhost:3001",
  credentials: true
}));

app.get("/", (req,res) => {
  res.send("Hello Dat!!");
})

app.use("/api/auth", authRoute);
app.use("/api/auth", messageRoute);
app.use("/api/users", userRoute);

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server running on port ${PORT}`)
});