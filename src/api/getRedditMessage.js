import axios from "axios";

export const getRedditMessage = ({ id, access_token }) => {
  return axios.get(`https://oauth.reddit.com/message/messages/${id}`, {
    headers: {
      Authorization: `bearer ${access_token}`,
    },
  });
};
