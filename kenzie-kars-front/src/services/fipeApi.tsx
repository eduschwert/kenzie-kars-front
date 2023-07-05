import axios from "axios";

export const fipeApi = axios.create({
  baseURL: "https://kenzie-kars.herokuapp.com/",
  timeout: 5000,
});
