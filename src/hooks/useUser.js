import { useMutation, useQuery, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { changeUserEmail } from "../api/changeUserEmail";
import { changeUserPassword } from "../api/changeUserPassword";
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

  const changePassword = useMutation((data) => changeUserPassword(data), {
    onSuccess: () => {
      queryClient.invalidateQueries("currentUser");
      toast.success("Password changed successfully");
    },
  });

  const changeEmail = useMutation((data) => changeUserEmail(data), {
    onSuccess: () => {
      queryClient.invalidateQueries("currentUser");
      toast.success("Email changed successfully");
    },
    onError: (err) => {
      toast.error(err.response.data);
    },
  });

  return { query, update, changePassword, changeEmail };
};
