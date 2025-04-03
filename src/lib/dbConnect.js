import mongoose from "mongoose";

const connectDB = async () => {
    if (mongoose.connection.readyState >= 1) {
        return;
    }

    try {
        if (!process.env.MONGODB_URI) {
            throw new Error("MONGODB_URI is missing in .env.local file");
        }

        await mongoose.connect(process.env.MONGODB_URI);
        console.log("✅ Connected to MongoDB");
    } catch (error) {
        console.error("❌ Error connecting to MongoDB:", error.message);
        process.exit(1); // Stop server if connection fails
    }
};

export default connectDB;
