import { useQuery } from "react-query";
import { getPostsFromReddit } from "../api/getPostsFromReddit";
import { structureEndpoint } from "../utils/structureEndpoint";

export const useRedditPosts = ({ subreddit, category }) => {
  const url = structureEndpoint({
    category,
    subreddit,
  });

  const query = useQuery("redditPosts", () => getPostsFromReddit({ url }), {
    enabled: false,
  });

  return query;
};
