import { request } from "../config/axios";

export const checkInboxStoryExists = (data) => {
  return request.get("/inbox/v1/", {
    params: {
      data,
    },
  });
};
