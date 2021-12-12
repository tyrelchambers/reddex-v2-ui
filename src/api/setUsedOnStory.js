import { request } from "../config/axios";

export const setUsedOnStory = ({ post_id }) => {
  return request.put("/posts/v1/used", { post_id });
};
