
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import { app, server } from "./socket/socket.js";

import connectToMongoDB from "./db/connectToMongoDB.js";

const __dirname = path.resolve();


const PORT = process.env.PORT || 5001; 

dotenv.config();

app.use(express.json()); // to parse json data
app.use(cookieParser()); // to parse cookies

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

app.options('*', cors());



server.listen(PORT, () =>  {
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}`);
});

 