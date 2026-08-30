import mongoose from "mongoose"
import { DB_NAME } from './constants.js';
import connectDB from './db/db.js';
import express from "express";
import 'dotenv/config';

const app = express();

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`App is running on ${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.error("MongoDB Connection Failed", error);
    })



