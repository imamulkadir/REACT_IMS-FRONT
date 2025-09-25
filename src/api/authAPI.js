import axios from "axios";

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(
      "http://localhost:5712/api/users/register",
      userData
    );
    return response.data;
  } catch (error) {
    console.log(error.response.data.message);
    alert(error.response.data.message);
    return error.response;
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await axios.post(
      "http://localhost:5712/api/users/login",
      userData
    );
    console.log(response.data.token);
    return response.data;
  } catch (error) {
    console.log(error.response.data.message);
    alert(error.response.data.message);
    return error.response;
  }
};
