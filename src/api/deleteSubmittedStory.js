import { request } from "../config/axios";

export const deleteSubmittedStory = (uuid) => {
  return request.delete("/submitted/v1/", {
    params: { uuid },
  });
};
