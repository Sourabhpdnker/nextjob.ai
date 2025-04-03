// lib/withSession.js
import { withIronSessionApiRoute } from "iron-session/next";

export function withSession(handler) {
    return withIronSessionApiRoute(handler, {
        password: process.env.SESSION_SECRET,
        cookieName: "yourapp_session",
        cookieOptions: {
            secure: process.env.NODE_ENV === "production",
        },
    });
}
