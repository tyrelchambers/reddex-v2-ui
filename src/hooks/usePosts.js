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
    ["posts", page],
    () => getPostsFromDatabase({ page, query: filterQuery }),
    {
      onSuccess: (res) => {
        setPosts({
          subreddit: res.post.subreddit,
          posts: res.post.posts,
          maxPages: res.maxPages,
        });
      },
      keepPreviousData: true,
    }
  );

  return { posts, setPostsHandler, clearPosts, getPosts };
};
