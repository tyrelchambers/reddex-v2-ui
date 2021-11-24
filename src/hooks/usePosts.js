import { useState } from "react";
import { useQuery } from "react-query";
import { getPostsFromDatabase } from "../api/getPostsFromDatabase";

export const usePosts = ({ page, filterQuery }) => {
  const [posts, setPosts] = useState({
    maxPages: 0,
    posts: [],
  });
  const setPostsHandler = ({ subreddit, posts }) => {
    setPosts({
      subreddit,
      posts: posts.slice(0, 25),
    });
  };

  const clearPosts = () => {
    setPosts({
      subreddit: "",
      posts: [],
    });
  };

  const getPosts = useQuery(
    ["posts", { page, filterQuery }],
    () => getPostsFromDatabase({ page, query: filterQuery }),
    {
      onSuccess: (res) => {
        console.log("res", res);
        setPosts({
          subreddit: res.post.subreddit,
          posts: res.post.posts,
          maxPages: res.maxPages,
        });
      },
      retry: 1,
      staleTime: 1000 * 60 * 60,
      keepPreviousData: true,
    }
  );

  return { posts, setPostsHandler, clearPosts, getPosts };
};
