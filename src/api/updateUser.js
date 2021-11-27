import { request } from "../config/axios";

export const updateUser = (data) => {
  return request.put("/user/v1/update", data);
};
