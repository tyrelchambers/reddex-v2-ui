import axios from "axios";

export const getAllRedditMessages = async ({ query, access_token }) => {
  let posts = [];
  let after = ``;

  const newQuery = {
    ...query,
    dest: query.author,
  };

  for (let i = 0; i < 10 && after !== null; i++) {
    await axios
      .get(`https://oauth.reddit.com/message/messages?after=${after}`, {
        headers: {
          Authorization: `bearer ${access_token}`,
        },
      })
      // eslint-disable-next-line no-loop-func
      .then((res) => {
        after = res.data.data.after;
        posts.push(res.data.data.children);
      })
      .catch((err) => err);

    const found = posts
      .flat()
      .filter((post) =>
        post.data[newQuery.category]
          .toLowerCase()
          .includes(newQuery.value.toLowerCase())
      );

    if (found.length > 0) {
      return found;
    }
  }

  return posts.flat();
};
