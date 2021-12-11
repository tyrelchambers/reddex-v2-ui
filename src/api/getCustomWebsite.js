import { request } from "../config/axios";

export const getCustomWebsite = (subdomain) => {
  return request.get(`/website/v1/${subdomain}`);
};
