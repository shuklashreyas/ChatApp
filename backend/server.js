
import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import { connect } from "mongoose";
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express(); 
const PORT = process.env.PORT || 5001;

dotenv.config();

app.use(express.json()); // to parse json data

app.use("/api/auth",authRoutes);

// app.get("/", (req, res) => {
//     root route http://localhost:5001/
//     res.send("Hello World!!");
// });



app.listen(PORT, () =>  {
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}`);
});

 