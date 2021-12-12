import { request } from "../config/axios";

export const getSubmittedStories = () => {
  return request.get("/submitted/v1/");
};
