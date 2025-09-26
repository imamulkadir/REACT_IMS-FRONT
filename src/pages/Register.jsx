import { useState } from "react";
import { registerUser } from "../api/authAPI";
import { Link } from "react-router-dom";

const Register = () => {
  const [error, setError] = useState("");
  const [userData, setUserData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    setUserData({ ...userData, [e.target.name]: e.target.value });
    // console.log(userData);
  };

  const handleRegister = async () => {
    // console.log(userData);

    if (!userData.userName || !userData.email || !userData.password) {
      alert("Please fill all the fields");
      return;
    }

    const response = await registerUser(userData);
    console.log(response);

    if (response.status != 201) {
      setError(response.data.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-md flex gap-4  flex-col items-center justify-center">
        <div className="flex flex-col gap-2 items-center justify-center">
          <h1 className="text-2xl font-bold bg-[var(--color-accent)] text-white p-4 rounded-md">
            IMS
          </h1>
          <h2 className="text-lg font-semibold text-slate-950">Register</h2>
          <p className="text-sm text-gray-400">
            Create an account to manage your inventory
          </p>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label
            htmlFor="userName"
            className="text-sm font-medium text-gray-950"
          >
            Username
          </label>
          <input
            className="p-2 rounded-md bg-gray-100 text-gray-950"
            type="text"
            placeholder="Enter your username"
            name="userName"
            // value={userData.userName}
            onChange={handleChange}
            required
          />
          <label htmlFor="email" className="text-sm font-medium text-gray-950">
            Email
          </label>
          <input
            className="p-2 rounded-md bg-gray-100 text-gray-950"
            type="email"
            placeholder="Enter your email"
            name="email"
            // value={userData.email}
            onChange={handleChange}
            required
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
            // value={userData.password}
            onChange={handleChange}
            required
          />
          {error && (
            <p className="text-[var(--color-error)] text-sm font-semibold">
              {error}
            </p>
          )}
          <button
            className="bg-[#202020] text-sm py-2 rounded-md text-white"
            type="submit"
            onClick={handleRegister}
          >
            Register
          </button>
        </div>
        <p className="text-sm text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[var(--color-accent)] font-semibold"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
