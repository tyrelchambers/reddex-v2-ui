import { request } from "../config/axios";

export const confirmEmail = (data) => {
  return request.get("/user/v1/confirm_email", {
    params: data,
  });
};
