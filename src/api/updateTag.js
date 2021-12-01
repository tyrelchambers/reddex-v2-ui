import { request } from "../config/axios";

export const updateTag = (data) => {
  return request.put("/tags/v1/edit", data);
};
