import { Link } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../api/authAPI";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleLogin = async () => {
    const userData = { email, password };
    const response = await loginUser(userData);
    console.log(response);
    if (response.status != 200) {
      setError(response.data.message);
    }
    if (response.status == 200) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-md flex gap-4 flex-col items-center justify-center">
        <div className="flex flex-col gap-2 items-center justify-center">
          <h1 className="text-2xl font-bold bg-[var(--color-accent)] text-white p-4 rounded-md">
            IMS
          </h1>
          <h2 className="text-lg font-semibold text-slate-950">Welcome Back</h2>
          <p className="text-sm text-gray-400">
            Sign in to your inventory management system
          </p>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="email" className="text-sm font-medium text-gray-950">
            Email
          </label>
          <input
            className="p-2 rounded-md bg-gray-100 text-gray-950"
            type="email"
            placeholder="Enter your email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label
            htmlFor="password"
            className="text-sm font-medium text-gray-950"
          >
            Password
          </label>
          <input
            className="p-2 rounded-md bg-gray-100 text-gray-950"
            type="password"
            placeholder="Enter your password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && (
            <p className="text-[var(--color-error)] text-sm font-semibold">
              {error}
            </p>
          )}
          <button
            className="bg-[#202020] text-sm py-2 rounded-md text-white"
            type="submit"
            onClick={handleLogin}
          >
            Sign In
          </button>
        </div>
        <p className="text-sm text-gray-400">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-[var(--color-accent)] font-semibold"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
