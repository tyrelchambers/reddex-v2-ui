import { useMutation, useQuery, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { getUser } from "../api/getUser";
import { updateUser } from "../api/updateUser";

export const useUser = () => {
  const token = localStorage.getItem("token");
  const queryClient = useQueryClient();

  const query = useQuery("currentUser", getUser, {
    enabled: !!token,
  });

  const update = useMutation((data) => updateUser(data), {
    onSuccess: () => {
      queryClient.invalidateQueries("currentUser");
      toast.success("Profile updated successfully");
    },
  });

  return { query, update };
};
