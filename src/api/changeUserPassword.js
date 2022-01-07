import { request } from "../config/axios";

export const changeUserPassword = (data) => {
  return request.post("/user/v1/change-password", data);
};
