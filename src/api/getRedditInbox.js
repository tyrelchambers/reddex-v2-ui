import axios from "axios";

export const getRedditInbox = ({ access_token }) => {
  return axios.get(`https://oauth.reddit.com/message/messages`, {
    headers: {
      Authorization: `bearer ${access_token}`,
    },
  });
};
