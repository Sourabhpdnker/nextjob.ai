const handleSubmit = async (e) => {
  e.preventDefault();

  if (!name || !email || !password) {
    alert("All fields are required!");
    return;
  }

  try {
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || "Signup failed");
    }

    alert("Signup successful! Redirecting to login...");
    router.push("/login"); // Redirect to login after successful signup
  } catch (error) {
    console.error("Signup error:", error);
    alert(error.message || "An error occurred. Please try again.");
  }
};
