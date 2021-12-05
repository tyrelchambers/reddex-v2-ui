import { useMutation, useQuery, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { deleteSearched } from "../api/deleteSearched";
import { getSearched } from "../api/getSearched";
import { saveSubredditOnSearch } from "../api/saveSubredditOnSearch";

export const useSearched = () => {
  const queryClient = useQueryClient();
  const saveSearched = useMutation((data) => saveSubredditOnSearch(data), {
    onSuccess: (data) => {
      queryClient.invalidateQueries("currentUser");
    },
  });

  const deleteSearch = useMutation((data) => deleteSearched(data), {
    onSuccess: (data) => {
      toast.success("Search deleted");
      queryClient.invalidateQueries("searched");
    },
  });

  const searchedQuery = useQuery("searched", getSearched);

  return { saveSearched, searchedQuery, deleteSearch };
};
