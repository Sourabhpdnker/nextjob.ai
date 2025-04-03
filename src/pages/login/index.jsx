// src/pages/login/index.jsx
import { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/link"; // Import Link correctly

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const { data: session } = useSession();
  const router = useRouter();

  if (session) {
    router.push("/home");
    return null;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await signIn("credentials", { ...form, redirect: false });

    if (res.error) {
      alert(res.error); // Show error if authentication fails
    } else {
      router.push("/home"); // Redirect to home page after successful login
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-500">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link href="/signup">
            <span className="text-blue-500">Sign Up</span>{" "}
            {/* No <a> tag needed */}
          </Link>
        </p>
      </div>
    </div>
  );
}
