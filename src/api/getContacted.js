import { request } from "../config/axios";

export const getContacted = () => {
  return request.get("/contacted/v1/");
};
