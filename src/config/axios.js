import axios from "axios";
import config from "./config";

const instance = axios.create({
  baseURL: `${config[process.env.NODE_ENV].backend}/api`,
});

instance.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token");
    const postToken = localStorage.getItem("postToken");
    if (token) {
      config.headers["token"] = token;
    }

    if (postToken) {
      config.headers["postToken"] = postToken;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (config) => {
    return config.data;
  },
  (error) => Promise.reject(error)
);

export const request = instance;
