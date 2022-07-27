import axios from "axios";

const instance = axios.create({
  baseUrl: "https://api.themoviesdb.org/3",
});

export default instance;
