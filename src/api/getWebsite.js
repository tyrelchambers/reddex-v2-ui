import { request } from "../config/axios";

export const getWebsite = () => {
  return request.get("/website/v1/");
};
