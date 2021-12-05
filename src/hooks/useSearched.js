import { useMutation, useQuery, useQueryClient } from "react-query";
import { getSearched } from "../api/getSearched";
import { saveSubredditOnSearch } from "../api/saveSubredditOnSearch";

export const useSearched = () => {
  const queryClient = useQueryClient();
  const saveSearched = useMutation((data) => saveSubredditOnSearch(data), {
    onSuccess: (data) => {
      queryClient.invalidateQueries("currentUser");
    },
  });

  const searchedQuery = useQuery("searched", getSearched);

  return { saveSearched, searchedQuery };
};
