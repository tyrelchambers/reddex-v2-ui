import { useMutation, useQuery, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { confirmEmail } from "../api/confirmEmail";
import { getUser } from "../api/getUser";
import { updateUser } from "../api/updateUser";

export const useUser = () => {
  const token = localStorage.getItem("token");
  const queryClient = useQueryClient();

  const query = useQuery("currentUser", getUser, {
    enabled: !!token,
  });

  // const confirmEmailQuery = useQuery(() => confirmEmail(emailToken), {
  //   enabled: !!emailToken,
  //   onSuccess: () => {
  //     toast.success("Email confirmed!");
  //   },
  // });

  const update = useMutation((data) => updateUser(data), {
    onSuccess: () => {
      queryClient.invalidateQueries("currentUser");
      toast.success("Profile updated successfully");
    },
  });

  return { query, update };
};
