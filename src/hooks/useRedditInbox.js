import { useQuery } from "react-query";
import { getRedditInbox } from "../api/getRedditInbox";

export const useRedditInbox = ({ access_token }) => {
  const inboxQuery = useQuery("inbox", () => getRedditInbox({ access_token }), {
    enabled: !!access_token,
  });

  return { inboxQuery };
};
