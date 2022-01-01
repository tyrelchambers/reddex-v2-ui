import { useMutation, useQuery, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { deleteStory } from "../api/deleteStory";
import { getStory } from "../api/getStory";
import { saveStoryToUser } from "../api/saveStoryToUser";
import { saveTagToStory } from "../api/saveTagToStory";
import { setUsedOnStory } from "../api/setUsedOnStory";

export const useStory = (data) => {
  const queryClient = useQueryClient();

  const storyQuery = useQuery(["story", data], () => getStory(data), {
    enabled: !!data,
  });

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
    storyQuery,
  };
};
