import { getRedditMessage } from "../api/getRedditMessage";
import { useQuery } from "react-query";

export const useRedditMessage = ({ id, access_token }) => {
  const redditMessage = useQuery(
    ["redditMessage", access_token],
    () => getRedditMessage({ id, access_token }),
    {
      enabled: !!access_token,
      select: (res) => {
        return res.data.data.children[0].data;
      },
      staleTime: 1000 * 60 * 60,
      keepPreviousData: true,
      retry: 2,
    }
  );
  return {
    redditMessage,
  };
};
