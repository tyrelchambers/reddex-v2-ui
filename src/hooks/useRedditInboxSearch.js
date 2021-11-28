import { useQuery } from "react-query";
import { getAllRedditMessages } from "../api/getAllRedditMessage";

export const useRedditInboxSearch = ({ query, access_token }) => {
  const inboxSearch = useQuery(
    "inboxSearch",
    () => getAllRedditMessages({ query, access_token }),
    {
      enabled: false,
    }
  );

  return inboxSearch;
};
