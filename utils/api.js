import axios from "axios";
export const api_host = "https://api-demowebsite.cdktcnqn.edu.vn/api/";

const axiosInstance = axios.create({
  baseURL: "https://api-demowebsite.cdktcnqn.edu.vn/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
