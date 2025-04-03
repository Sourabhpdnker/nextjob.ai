import React from "react";



import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") return <div>Loading...</div>; // Wait for session to load
  if (!session) {
    router.push("/login"); // Redirect to login if not logged in
    return null; // Don't render the page while redirecting
  }

  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f5f5f5" }}>
      {/* <Navbar /> */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "50px" }}>
        <div style={{ fontSize: "32px", fontWeight: "bold", maxWidth: "50%" }}>Platform for New Admission for Engineering</div>
        <div>
          <img src="/mnt/data/download.jpg" alt="Happy Students" style={{ width: "300px", borderRadius: "10px" }} />
        </div>
      </div>
      <button
onClick={() => signOut({ callbackUrl: "/login" })} // Redirects to login after logout
className="mt-4 px-6 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-300"
>
Logout
</button>
      <div style={{ display: "flex", alignItems: "center", marginTop: "20px", fontWeight: "bold" }}>😊 Happy Students</div>
    </div>
 
  );
}

