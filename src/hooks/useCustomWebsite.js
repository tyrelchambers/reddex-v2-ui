import { useMutation, useQuery } from "react-query";
import { toast } from "react-toastify";
import { getCustomWebsite } from "../api/getCustomWebsite";
import { getYoutubeFeed } from "../api/getYoutubeFeed";
import { saveStory } from "../api/saveStory";

export const useCustomWebsite = ({ subdomain }) => {
  const website = useQuery("customWebsite", () => getCustomWebsite(subdomain), {
    enabled: !!subdomain,
  });

  const isYoutubeEnabled = website.data?.config.timelines.find(
    (item) => item.type === "youtube"
  ).enabled;

  const youtubeUsername = website.data?.config.timelines.find(
    (item) => item.type === "youtube"
  ).username;

  const youtube = useQuery("youtube", () => getYoutubeFeed(youtubeUsername), {
    enabled: !!isYoutubeEnabled && !!youtubeUsername,
  });

  const submitStory = useMutation((data) => saveStory(data), {
    onSuccess: (data) => {
      toast.success("Story submitted successfully!");
    },
  });

  return {
    website,
    youtube,
    submitStory,
  };
};
