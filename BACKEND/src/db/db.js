import 'dotenv/config';
import mongoose from "mongoose"
import { DB_NAME } from "../constants.js";

async function connectDB() {
    try {
        const connection_instance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`Database connected successfully. DB Host: ${connection_instance.connection.host}`);
    } catch (error) {
        console.error("MongoDB Connection Error", error);
    }
}

export default connectDB;