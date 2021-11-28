import axios from "axios";

export const getStoryFromReddit = (url) => {
  return axios.get(url).then((res) => res.data[0].data.children[0].data);
};
