import { request } from "../config/axios";

export const getStory = (data) => {
  return request.get("/story/v1/story", {
    params: data,
  });
};
