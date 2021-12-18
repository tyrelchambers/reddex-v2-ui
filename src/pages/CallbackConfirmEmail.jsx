import React, { useEffect } from "react";
import { useNavigate, useSearch } from "react-location";
import { toast } from "react-toastify";
import { confirmEmail } from "../api/confirmEmail";

const CallbackConfirmEmail = () => {
  const navigate = useNavigate();
  const { token } = useSearch();
  useEffect(() => {
    (async () => {
      if (token) {
        confirmEmail({ emailToken: token }).then(() => {
          toast.success("Email confirmed successfully. You can now login!");
          navigate({ to: "/login" });
        });
      }
    })();
  }, [navigate, token]);
  return <div></div>;
};

export default CallbackConfirmEmail;
