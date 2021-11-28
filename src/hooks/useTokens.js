import { useQuery } from "react-query";
import { getRedditAccessToken } from "../api/getRedditAccessToken";

export const useTokens = () => {
  const redditAccessToken = useQuery("redditAccessToken", getRedditAccessToken);

  return { redditAccessToken };
};
