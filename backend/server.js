
import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import { connect } from "mongoose";
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express(); 

dotenv.config();
const PORT = process.env.PORT || 5001;

app.get("/", (req, res) => {
    // root route http://localhost:5001/
    res.send("Hello World!!");
});


app.use("/api/auth",authRoutes);

app.listen(PORT, () =>  {
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}`);
});

 