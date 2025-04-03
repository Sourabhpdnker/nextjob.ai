// src/pages/index.jsx (or src/pages/index.js)
import { useSession } from "next-auth/react"; // Import next-auth hook for session
import { useRouter } from "next/router"; // Import Next.js router for navigation
import { useEffect } from "react"; // Use effect to perform actions based on session

export default function HomePage() {
  const { data: session, status } = useSession(); // Get session data from next-auth
  const router = useRouter(); // Initialize the router for redirection

  useEffect(() => {
    if (status === "loading") return; // Wait for session to load

    // If the user is not logged in, redirect to login page
    if (!session) {
      router.push("/login");
    } else {
      // If the user is logged in, redirect to home page
      router.push("/home");
    }
  }, [session, status, router]); // Trigger useEffect when session or status changes

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-500">
      <p className="text-white text-xl">Redirecting...</p>
    </div>
  );
}
