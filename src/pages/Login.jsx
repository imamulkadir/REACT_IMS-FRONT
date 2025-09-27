import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { loginUser } from "../api/authAPI";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

const Login = () => {
  const { setUserData, userData } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (userData) {
      navigate("/dashboard");
    }
  }, [userData]);

  const handleLogin = async () => {
    const userData = { email, password };
    const response = await loginUser(userData);
    console.log(response);
    if (response.status != 200) {
      setError(response.message);
    }
    if (response.status == 200) {
      setUserData(response.user);
      navigate("/dashboard");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-[var(--color-card)] p-8 rounded-md flex gap-4 flex-col items-center justify-center border border-[var(--color-border)] ">
        <div className="flex flex-col gap-2 items-center justify-center">
          <h1 className="text-2xl font-bold bg-[var(--color-accent)] text-white p-4 rounded-md">
            IMS
          </h1>
          <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">
            Inventory Management System
          </h2>
          <p className="text-sm text-[var(--color-text-secondary)]">
            Sign in to access your inventory
          </p>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label
            htmlFor="email"
            className="text-sm font-medium text-[var(--color-text-primary)]"
          >
            Email
          </label>
          <input
            className="p-2 rounded-md bg-[var(--color-bg)] text-[var(--color-text-primary)]"
            type="email"
            placeholder="Enter your email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label
            htmlFor="password"
            className="text-sm font-medium text-[var(--color-text-primary)]"
          >
            Password
          </label>
          <input
            className="p-2 rounded-md bg-[var(--color-bg)] text-[var(--color-text-primary)]"
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
            className="bg-[var(--color-btn-bg)] text-sm py-2 rounded-md text-[var(--color-btn-text)]"
            type="submit"
            onClick={handleLogin}
          >
            Sign In
          </button>
        </div>
        <p className="text-sm text-[var(--color-text-secondary)]">
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
