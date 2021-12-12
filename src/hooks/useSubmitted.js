import { useMutation, useQuery, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { deleteSubmittedStory } from "../api/deleteSubmittedStory";
import { getSubmittedStories } from "../api/getSubmittedStories";

export const useSubmitted = () => {
  const queryClient = useQueryClient();
  const submittedQuery = useQuery("submittedStories", getSubmittedStories);
  const deleteSubmitted = useMutation((data) => deleteSubmittedStory(data), {
    onSuccess: () => {
      queryClient.invalidateQueries("submittedStories");
      toast.success("Story deleted");
    },
  });

  return {
    submittedQuery,
    deleteSubmitted,
  };
};
