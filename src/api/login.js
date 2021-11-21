import { request } from "../config/axios";

export const login = (data) => {
  return request.get("/v1/auth/login", { params: data });
};
