import { useMutation, useQueryClient } from "react-query";
import { login } from "../api/login";
import { register } from "../api/register";
import { toast } from "react-toastify";
import { useNavigate } from "react-location";

export const useAuth = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const loginMutation = useMutation((data) => login(data), {
    onSuccess: (data) => {
      if (!data.user.email_confirmed) {
        return toast.warning(
          "Please confirm your email. Just in case, we sent you another email"
        );
      }
      toast.success("Logged in");
      localStorage.setItem("token", data.token);

      queryClient.setQueryData("currentUser", data.user);

      if (!data.user.Profile.reddit_profile) {
        return navigate({ to: "/link-reddit" });
      }

      navigate({ to: "/" });
    },
    onError: (err) => {
      toast.error(err.response.data);
    },
  });

  const registerMutation = useMutation((data) => register(data), {
    onSuccess: (data) => {
      toast.success("A confirmation email has been sent to your email");
    },
    onError: (error) => {
      toast.error(error.response.data);
    },
  });

  return { loginMutation, registerMutation };
};
