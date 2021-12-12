import { useMutation, useQuery, useQueryClient } from "react-query";
import { getSubmittedStory } from "../api/getSubmittedStory";
import { deleteSubmittedStory } from "../api/deleteSubmittedStory";
import { toast } from "react-toastify";

export const useSubmittedStory = (uuid) => {
  const queryClient = useQueryClient();
  const submittedStory = useQuery(
    "submittedStory",
    () => getSubmittedStory(uuid),
    {
      enabled: !!uuid,
    }
  );

  const deleteSubmitted = useMutation((data) => deleteSubmittedStory(data), {
    onSuccess: () => {
      queryClient.invalidateQueries("submittedStories");
      toast.success("Story deleted");
    },
  });

  return {
    submittedStory,
    deleteSubmitted,
  };
};
