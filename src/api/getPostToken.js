import { request } from "../config/axios";

export const getPostToken = () => {
  return request.get("/tokens/v1/postToken");
};
