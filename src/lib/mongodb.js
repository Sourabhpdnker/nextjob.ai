// lib/mongodb.js
import mongoose from "mongoose";

const connectDB = async () => {
    if (mongoose.connections[0].readyState) {
        // If already connected, return the connection
        return;
    }

    await mongoose.connect(process.env.MONGODB_URI);
};

export default connectDB;
