import { request } from "../config/axios";

export const checkSubdomain = (subdomain) => {
  return request.get("/website/v1/checkSubdomain", {
    params: {
      subdomain,
    },
  });
};
