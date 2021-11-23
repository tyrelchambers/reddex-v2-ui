import { request } from "../config/axios";

export const savePostsToDatabase = async ({ posts, subreddit }) => {
  return request.post("/posts/v1/save", {
    posts,
    subreddit,
  });
};
