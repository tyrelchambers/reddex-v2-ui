import { useMutation, useQueryClient } from "react-query";
import { login } from "../api/login";
import { register } from "../api/register";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

export const useAuth = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const loginMutation = useMutation((data) => login(data), {
    onSuccess: (data) => {
      toast.success("Logged in");
      localStorage.setItem("token", data.token);

      queryClient.setQueryData("currentUser", data.user);
      navigate("/dashboard/reading_list/approved");
    },
  });

  const registerMutation = useMutation((data) => register(data), {
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      queryClient.setQueryData("currentUser", data.user);
    },
    onError: (error) => {
      toast.error(error.response.data);
    },
  });

  return { loginMutation, registerMutation };
};
