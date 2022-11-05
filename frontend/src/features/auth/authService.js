import axios from "axios";

const API_URL = "/api/users/";

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Logout
const logout = () => {
  localStorage.removeItem("user");
};

// Update user
const updateUser = async (userId) => {
  const response = await axios.put(API_URL + userId);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

const deleteUser = async (userId) => {
  const response = await axios.delete(API_URL + userId);

  return response.data;
};

const authService = {
  register,
  logout,
  login,
  updateUser,
  deleteUser,
};

export default authService;
