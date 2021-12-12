import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { deleteStory } from "../api/deleteStory";
import { saveStoryToUser } from "../api/saveStoryToUser";
import { saveTagToStory } from "../api/saveTagToStory";
import { setUsedOnStory } from "../api/setUsedOnStory";

export const useStory = () => {
  const queryClient = useQueryClient();

  const storyMutation = useMutation((data) => saveStoryToUser(data), {
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const deleteStoryMutation = useMutation((data) => deleteStory(data), {
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: () => {
      toast.success("Story deleted");
      queryClient.invalidateQueries("completedList");
    },
  });

  const addTagToStory = useMutation((data) => saveTagToStory(data), {
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: () => {
      toast.success("Tag added");
    },
  });

  const addToUsed = useMutation((data) => setUsedOnStory(data));

  return {
    storyMutation,
    deleteStoryMutation,
    addTagToStory,
    addToUsed,
  };
};
