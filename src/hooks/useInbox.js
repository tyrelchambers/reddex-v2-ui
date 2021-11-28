import { useQuery } from "react-query";
import { getInboxMessage } from "../api/getInboxMessage";

export const useInbox = ({ id }) => {
  const messageQuery = useQuery("inboxMessage", () => getInboxMessage(id), {
    enabled: !!id,
  });

  return { messageQuery };
};
