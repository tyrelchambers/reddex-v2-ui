import { request } from "../config/axios";

export const deleteStory = (uuid) => {
  return request.delete("/story/v1/delete", {
    data: {
      uuid,
    },
  });
};
