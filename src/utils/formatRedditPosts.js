import { formatRedditPost } from "./formatRedditPost";

export const formatRedditPosts = async (posts) => {
  let results = [];

  for (let index = 0; index < posts.length; index++) {
    const element = posts[index];
    results.push(formatRedditPost(element.data));
  }

  return results;
};
