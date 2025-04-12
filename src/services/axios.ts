import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api/v1", // For Testing Locally
  // baseURL: "https://civiclink-backend-g3.onrender.com/api/v1", // For Production
});
