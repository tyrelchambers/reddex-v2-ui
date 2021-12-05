import { request } from "../config/axios";

export const saveSubredditOnSearch = (subreddit) => {
  return request.post("/search/v1/save", {
    data: { subreddit },
  });
};
