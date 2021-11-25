import { request } from "../config/axios";

export const deleteExistingPosts = () => {
  return request.delete("/posts/v1/delete");
};
