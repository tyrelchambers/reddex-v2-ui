import { request } from "../config/axios";

export const getInboxMessage = (id) => {
  return request.get("/inbox/v1/", {
    params: {
      id,
    },
  });
};
