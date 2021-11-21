import { useMutation, useQueryClient } from "react-query";
import { login } from "../api/login";
import { register } from "../api/register";
import { toast } from "react-toastify";

export const useAuth = () => {
  const queryClient = useQueryClient();

  const loginMutation = useMutation((data) => login(data));
  const registerMutation = useMutation((data) => register(data), {
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      queryClient.setQueryData("currentUser", data);
    },
    onError: (error) => {
      toast.error(error.response.data);
    },
  });

  return { loginMutation, registerMutation };
};
