import { request } from "../config/axios";

export const getPasswordResetLink = (email) => {
  return request.post(`/auth/v1/forgot-password`, { email });
};
