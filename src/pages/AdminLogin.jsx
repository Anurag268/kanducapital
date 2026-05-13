import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert("Login failed ❌");
    } else {
      navigate("/admin");
    }
  };

  // 🏠 GO TO HOME
  const goToHome = () => {
    navigate("/");
  };

  return (
    <div className="relative flex items-center justify-center h-screen bg-gradient-to-br from-blue-100 to-white">

      {/* HOME BUTTON */}
      <button
        onClick={goToHome}
        className="absolute top-6 left-6 bg-white shadow-md hover:shadow-lg text-blue-600 font-semibold px-5 py-2 rounded-full transition"
      >
        ← Home
      </button>

      {/* LOGIN CARD */}
      <div className="bg-white p-8 rounded-2xl shadow-xl w-80 text-center">

        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Admin Login
        </h2>

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* PASSWORD */}
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border rounded-lg mb-5 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* LOGIN BUTTON */}
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
        >
          Login
        </button>

      </div>

    </div>
  );
};

export default AdminLogin;
