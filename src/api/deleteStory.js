import { request } from "../config/axios";

export const deleteStory = (uuid) => {
  return request.post("/story/v1/delete", {
    uuid,
  });
};
