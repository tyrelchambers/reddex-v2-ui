export const extractSubreddit = (data) => {
  // Extract the subreddit from the array of objects
  const subreddit = data.map((item) => item.subreddit);
  // Remove duplicates
  const uniqueSubreddit = [...new Set(subreddit)];
  // Return the unique subreddit
  return uniqueSubreddit;
};
