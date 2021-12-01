import { request } from "../config/axios";

export const getTag = (uuid) => {
  return request.get(`/tags/v1/${uuid}`);
};
