import connectDB from "../../../lib/dbConnect";
import User from "../../../models/User";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
    if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

    try {
        await connectDB(); // Connect to MongoDB

        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({ name, email, password: hashedPassword });

        return res.status(201).json({ message: "User created successfully", user: newUser });
    } catch (error) {
        console.error("Signup API error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
