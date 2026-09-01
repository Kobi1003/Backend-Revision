import mongoose from "mongoose"
import { DB_NAME } from './constants.js';
import connectDB from './db/db.js';
import express from "express";
import 'dotenv/config';
import app from "./app.js";

// const app = express();
console.log("🔥 INDEX.JS IS RUNNING");

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 3000, () => {
            console.log(`App is running on ${process.env.PORT || 3000}`);
        });
    })
    .catch((error) => {
        console.error("MongoDB Connection Failed", error);
    })



