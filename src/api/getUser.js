import { request } from "../config/axios";

export const getUser = () => {
  return request.get("/v1/user/me");
};
