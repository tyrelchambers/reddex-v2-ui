import { request } from "../config/axios";

export const saveStoryToUser = (data) => {
  return request.post("/story/v1/save", data);
};
