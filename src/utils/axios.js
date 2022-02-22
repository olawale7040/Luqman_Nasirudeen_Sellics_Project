import axios from "axios";
const myKey = "1QmRkbFCLwa1ZVncNxiyD9XdMk1cAHdnnawmsnk6Dx8";

const apiKey = process.env.REACT_APP_API_KEY
  ? process.env.REACT_APP_API_KEY
  : myKey;

const axiosInstance = axios.create({
  baseURL: `https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0/?token=6sQgBPf4EnBJ`,
  headers: { "Content-Type": "application/json" },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    )
);

export default axiosInstance;
