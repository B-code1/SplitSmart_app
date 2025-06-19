// import axios from 'axios';

// const API = axios.create({
//   baseURL: 'http:// /api', // change to your server IP if needed
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// // Attach token (if any) to every request
// API.interceptors.request.use(async (config) => {
//   const token = await AsyncStorage.getItem('token');
//   if (token) config.headers.Authorization = `Bearer ${token}`;
//   return config;
// });

// export default API;


// utils/api.ts
import axios from "axios";

const API = axios.create({
  baseURL: "http://192.168.1.158:4000/api", // your LAN IP with backend port
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
