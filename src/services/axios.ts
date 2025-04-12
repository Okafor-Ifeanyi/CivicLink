import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://civiclink-backend-g3.onrender.com/api/v1",
});
