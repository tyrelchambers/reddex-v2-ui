import { request } from "../config/axios";

export const saveTagToStory = ({ tags, storyId }) => {
  return request.put("/story/v1/tag", {
    data: { tags, storyId },
  });
};
