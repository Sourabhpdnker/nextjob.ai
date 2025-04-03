import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import User from "../../../models/User"; // Ensure the User model is correct
import connectDB from "../../../lib/dbConnect";

export default NextAuth({
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "example@example.com" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                await connectDB(); // Connect to MongoDB

                const user = await User.findOne({ email: credentials.email });

                if (!user) {
                    throw new Error("No user found with this email");
                }

                const isValid = await bcrypt.compare(credentials.password, user.password);
                if (!isValid) {
                    throw new Error("Invalid password");
                }

                return { id: user._id, name: user.name, email: user.email };
            },
        }),
    ],
    pages: {
        signIn: "/login", // Redirect to login page on error
    },
    secret: process.env.NEXTAUTH_SECRET,
});
