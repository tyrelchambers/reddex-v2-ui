import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { confirmEmail } from "../api/confirmEmail";
import { LOGIN } from "../routes/index.routes";

const CallbackConfirmEmail = () => {
  const navigate = useNavigate();
  const param = new URLSearchParams(window.location.search);
  const token = param.get("token");

  // const { confirmEmailQuery } = useUser({ emailToken: token });

  useEffect(() => {
    (async () => {
      if (token) {
        confirmEmail({ emailToken: token }).then(() => {
          toast.success("Email confirmed successfully. You can now login!");
          navigate(LOGIN);
        });
      }
    })();
  }, [navigate, token]);
  return <div></div>;
};

export default CallbackConfirmEmail;
