export const formatRedditPost = (post) => {
  return {
    author: post.author,
    title: post.title,
    self_text: post.selftext.split(" ").length,
    ups: post.ups,
    url: post.url,
    num_comments: post.num_comments,
    created: post.created_utc,
    flair: post.link_flair_text,
    post_id: post.id,
    subreddit: post.subreddit,
    upvote_ratio: post.upvote_ratio,
  };
};
