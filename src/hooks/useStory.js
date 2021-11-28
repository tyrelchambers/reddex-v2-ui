import { useMutation } from "react-query";
import { saveStoryToUser } from "../api/saveStoryToUser";

export const useStory = () => {
  const storyMutation = useMutation((data) => saveStoryToUser(data));

  return {
    storyMutation,
  };
};
