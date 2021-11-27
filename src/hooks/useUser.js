import { useMutation, useQuery, useQueryClient } from "react-query";
import { getUser } from "../api/getUser";
import { updateUser } from "../api/updateUser";

export const useUser = () => {
  const token = localStorage.getItem("token");
  const queryClient = useQueryClient();

  const query = useQuery("currentUser", getUser, {
    enabled: !!token,
  });

  const update = useMutation((data) => updateUser(data), {
    onSuccess: () => queryClient.invalidateQueries("currentUser"),
  });

  return { query, update };
};
