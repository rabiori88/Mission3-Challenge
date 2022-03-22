import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "7de4075244a997ec8942542f50bc274d",
    language: "ko-KR",
  },
});

export default instance;
