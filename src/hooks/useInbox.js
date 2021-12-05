import { useQuery } from "react-query";
import { checkInboxStoryExists } from "../api/checkInboxStoryExists";

export const useInbox = (data) => {
  const messageQuery = useQuery(
    ["inboxMessage", data.author, data.subject],
    () => checkInboxStoryExists(data),
    {
      enabled: !!data.author || !!data.subject,
    }
  );

  return { messageQuery };
};
