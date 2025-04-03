// lib/auth.js
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import connectDB from "./mongodb";
import User from "../models/User"; // Make sure you have a User model

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                await connectDB(); // Ensure DB is connected

                const user = await User.findOne({ email: credentials.email });

                if (user && user.password === credentials.password) {
                    return { id: user._id, name: user.name, email: user.email };
                }
                return null;
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: "/login", // Custom login page
        signOut: "/login", // After sign-out, redirect to login page
        error: "/auth/error", // Error page route
        verifyRequest: "/auth/verify-request", // Email verification page
        newAccount: "/home", // After new account creation, redirect to home
    },
};

export default NextAuth(authOptions);
