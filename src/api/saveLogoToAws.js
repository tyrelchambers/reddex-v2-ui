import { request } from "../config/axios";

export const saveLogoToAws = () => {
  return request.post("/api/upload/v1/logo");
};
