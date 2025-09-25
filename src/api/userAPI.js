import axios from "axios";

const getAllUsers = async (token) => {
  try {
    const response = await axios.get(
      "http://localhost:5712/api/users/allUsers",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
};

export { getAllUsers };
