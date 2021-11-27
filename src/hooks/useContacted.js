import { useMutation, useQuery, useQueryClient } from "react-query";
import { getContacted } from "../api/getContacted";
import { saveContacted } from "../api/saveContacted";

export const useContacted = () => {
  const queryClient = useQueryClient();

  const contactedQuery = useQuery("contacted", getContacted);
  const contactedMutation = useMutation((data) => saveContacted(data), {
    onSuccess: () => {
      queryClient.invalidateQueries("contacted");
    },
  });
  return {
    contactedQuery,
    contactedMutation,
  };
};
