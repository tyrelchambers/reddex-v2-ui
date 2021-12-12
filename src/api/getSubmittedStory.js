import { request } from "../config/axios";

export const getSubmittedStory = (uuid) => {
  return request.get(`/submitted/v1/${uuid}`);
};
