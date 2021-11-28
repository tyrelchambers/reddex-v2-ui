import { useQuery } from "react-query";
import { getRedditMessage } from "../api/getRedditMessage";

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
    }
  );
  return {
    redditMessage,
  };
};
