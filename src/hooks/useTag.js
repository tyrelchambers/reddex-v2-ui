import { useMutation, useQueryClient } from "react-query";
import { saveTag } from "../api/saveTag";

export const useTag = () => {
  const queryClient = useQueryClient();
  const saveTagMutation = useMutation((data) => saveTag(data), {
    onSuccess: (data) => {
      queryClient.invalidateQueries("tags");
    },
  });

  return {
    saveTagMutation,
  };
};
