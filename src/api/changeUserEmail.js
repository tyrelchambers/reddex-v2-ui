import { request } from "../config/axios";

export const changeUserEmail = (data) => {
  return request.post("/user/v1/change-email", data);
};
