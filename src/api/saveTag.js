import { request } from "../config/axios";

export const saveTag = (data) => {
  return request.post("/tags/v1/save", data);
};
