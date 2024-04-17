import axios from "axios";

// const baseUrl = process.env.NEXT_PUBLIC_API_URL;
const baseUrl = "http://localhost:5000";

const instance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Allow-Access-Control-Origin": "*",
    "include-credentials": "true",
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
