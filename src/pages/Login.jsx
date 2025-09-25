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
      <div className="bg-gray-300 p-8 rounded-md flex gap-4  flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Login</h1>
        <input
          className="p-2 rounded-md border-2 border-red-300"
          type="email"
          placeholder="Email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="p-2 rounded-md border-2 border-red-300"
          type="password"
          placeholder="Password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="text-red-500">{error}</p>}
        <button
          className="bg-blue-500 text-white p-2 rounded-md border-2 border-gray-300"
          type="submit"
          onClick={handleLogin}
        >
          Login
        </button>
        <Link to="/register" className="text-blue-500">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Login;
