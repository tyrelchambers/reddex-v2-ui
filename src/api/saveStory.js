import { request } from "../config/axios";

export const saveStory = (data) => {
  return request.post("/website/v1/submitStory", data);
};
