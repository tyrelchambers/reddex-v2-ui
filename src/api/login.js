import { request } from "../config/axios";

export const login = (data) => {
  return request.get("/auth/v1/login", { params: data });
};
