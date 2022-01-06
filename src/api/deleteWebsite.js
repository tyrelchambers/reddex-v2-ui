import { request } from "../config/axios";

export const deleteWebsite = (uuid) => {
  return request.delete("/website/v1/delete", {
    params: {
      uuid,
    },
  });
};
