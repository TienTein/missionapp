import axios from "axios";
export const api_host = process.env.apiHost;
const axiosInstance = axios.create({
  baseURL: api_host,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
