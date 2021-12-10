import { request } from "../config/axios";

export const updateWebsite = (data) => {
  return request.put("/website/v1/update", data);
};
