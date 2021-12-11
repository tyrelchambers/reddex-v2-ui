import axios from "axios";
import config from "../config/config";

export const getYoutubeFeed = (channelId) => {
  return axios.get(
    `https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=${channelId}&key=${config.development.youtubeKey}`
  );
};
