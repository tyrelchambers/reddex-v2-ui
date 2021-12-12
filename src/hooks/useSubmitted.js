import { useQuery, useQueryClient } from "react-query";
import { getSubmittedStories } from "../api/getSubmittedStories";

export const useSubmitted = () => {
  const submittedQuery = useQuery("submittedStories", getSubmittedStories);

  return {
    submittedQuery,
  };
};
