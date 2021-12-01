import { request } from "../config/axios";

export const deleteTag = (tagId) => {
  return request.delete(`/tags/v1/${tagId}/delete`);
};
