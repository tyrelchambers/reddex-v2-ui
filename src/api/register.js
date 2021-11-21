import { request } from "../config/axios";

export const register = (data) => {
  return request.post("/auth/v1/register", data);
};
