import { request } from "../config/axios";

export const getRedditProfile = (accessToken) => {
  return request.get("/user/v1/reddit-profile", {
    params: {
      accessToken,
    },
  });
};
