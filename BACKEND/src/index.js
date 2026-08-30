import mongoose from "mongoose"
import { DB_NAME } from './constants.js';
import connectDB from './db/db.js';
import express from "express";
import 'dotenv/config';

const app = express()

connectDB()



// async function connectDB() {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         console.log("Database connected")
//         app.on("error", (error) => {
//             console.log("Error: ", error);
//             throw error;
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`Process is listening on port ${process.env.PORT}`)
//         })
//     }
//     catch (error) {
//         console.error("Error: ", error);
//         throw error;
//     }
// }

// connectDB();
