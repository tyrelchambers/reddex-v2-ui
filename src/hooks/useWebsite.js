import { useMutation, useQuery, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { getWebsite } from "../api/getWebsite";
import { updateWebsite } from "../api/updateWebsite";

export const useWebsite = () => {
  const queryClient = useQueryClient();

  const websiteQuery = useQuery("website", getWebsite);

  const updateWebsiteMutation = useMutation((data) => updateWebsite(data), {
    onSuccess: (data) => {
      queryClient.invalidateQueries("website");
      toast.success("Website updated successfully");
    },
  });

  return {
    updateWebsiteMutation,
    websiteQuery,
  };
};
