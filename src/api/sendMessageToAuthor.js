import axios from "axios";

export const sendMessageToAuthor = ({ link, body, access_token }) => {
  return axios.post(link, body, {
    headers: {
      Authorization: `bearer ${access_token}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
};
