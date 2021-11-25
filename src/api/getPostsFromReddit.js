import axios from "axios";

export const getPostsFromReddit = async ({ url }) => {
  let posts = [];
  let after = ``;

  for (let i = 0; i < 10 && after !== null; i++) {
    await axios
      .get(`${url}&after=${after}`)
      // eslint-disable-next-line no-loop-func
      .then((res) => {
        after = res.data.data.after;
        posts.push(res.data.data.children);
      })
      .catch((err) => err);
  }

  return posts.flat();
};
