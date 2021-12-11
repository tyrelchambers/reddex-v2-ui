import { useQuery } from "react-query";
import { getCustomWebsite } from "../api/getCustomWebsite";
import { getYoutubeFeed } from "../api/getYoutubeFeed";

export const useCustomWebsite = ({ subdomain }) => {
  const website = useQuery("customWebsite", () => getCustomWebsite(subdomain), {
    enabled: !!subdomain,
  });

  const isYoutubeEnabled = website.data?.timelines.find(
    (item) => item.type === "youtube"
  ).enabled;

  const youtubeUsername = website.data?.timelines.find(
    (item) => item.type === "youtube"
  ).username;

  const youtube = useQuery("youtube", () => getYoutubeFeed(youtubeUsername), {
    enabled: !!isYoutubeEnabled && !!youtubeUsername,
  });

  return {
    website,
    youtube,
  };
};
