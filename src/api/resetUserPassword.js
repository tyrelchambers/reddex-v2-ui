import { request } from "../config/axios";

export const resetUserPassword = (data) => {
  return request.post("/auth/v1/reset-password", data);
};
