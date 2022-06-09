import { checkInboxStoryExists } from "../api/checkInboxStoryExists";
import { useQuery } from "react-query";

export const useInbox = (data) => {
  const messageQuery = useQuery(
    ["inboxMessage", data.author, data.subject],
    () => checkInboxStoryExists(data),
    {
      enabled: !!data.author || !!data.subject,
      retry: 1,
      refetchOnWindowFocus: false,
    }
  );

  return { messageQuery };
};
