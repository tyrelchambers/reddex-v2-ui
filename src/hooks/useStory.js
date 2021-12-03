import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { saveStoryToUser } from "../api/saveStoryToUser";

export const useStory = () => {
  const storyMutation = useMutation((data) => saveStoryToUser(data), {
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return {
    storyMutation,
  };
};
