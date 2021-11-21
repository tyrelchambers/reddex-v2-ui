import { request } from "../config/axios";

export const getRedditTokens = (code) => {
  return request.get("/user/v1/link-reddit", {
    params: {
      code,
    },
  });
};
