import { useMutation, useQuery, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { deleteTag } from "../api/deleteTag";
import { saveTag } from "../api/saveTag";
import { updateTag } from "../api/updateTag";
import { getTag } from "../api/getTag";

export const useTag = (uuid) => {
  const queryClient = useQueryClient();

  const tagQuery = useQuery("tag", () => getTag(uuid), {
    enabled: !!uuid,
  });

  const saveTagMutation = useMutation((data) => saveTag(data), {
    onSuccess: (data) => {
      queryClient.invalidateQueries("tags");
      toast.success("Tag saved");
    },
  });

  const deleteTagMutation = useMutation((data) => deleteTag(data), {
    onSuccess: (data) => {
      queryClient.invalidateQueries("tags");
      toast.success("Tag deleted");
    },
  });

  const updateTagMutation = useMutation((data) => updateTag(data), {
    onSuccess: (data) => {
      queryClient.invalidateQueries("tags");
      toast.success("Tag updated");
    },
  });

  return {
    tagQuery,
    saveTagMutation,
    deleteTagMutation,
    updateTagMutation,
  };
};
