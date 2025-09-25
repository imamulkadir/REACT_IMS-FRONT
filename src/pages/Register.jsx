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
      <div className="bg-gray-300 p-8 rounded-md flex gap-4  flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Register</h1>
        <input
          className="p-2 rounded-md border-2 border-red-300"
          type="text"
          placeholder="Username"
          name="userName"
          // value={userData.userName}
          onChange={handleChange}
          required
        />
        <input
          className="p-2 rounded-md border-2 border-red-300"
          type="email"
          placeholder="Email"
          name="email"
          // value={userData.email}
          onChange={handleChange}
          required
        />
        <input
          className="p-2 rounded-md border-2 border-red-300"
          type="password"
          placeholder="Password"
          name="password"
          // value={userData.password}
          onChange={handleChange}
          required
        />
        {error && <p className="text-red-500">{error}</p>}
        <button
          className="bg-blue-500 text-white p-2 rounded-md border-2 border-gray-300"
          type="submit"
          onClick={handleRegister}
        >
          Register
        </button>
        <Link to="/login" className="text-blue-500">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Register;
