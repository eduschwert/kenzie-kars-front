import axios from "axios";

export const api = axios.create({
  baseURL: "https://kenzie-kars-api-7s9s.onrender.com/",
  timeout: 5000,
});
