import { request } from "../config/axios";

export const getRedditAccessToken = () => {
  return request.get("/user/v1/reddit-access-token");
};
