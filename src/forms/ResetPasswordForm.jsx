import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Button } from "../components/Button/Button";
import Input from "../components/Input/Input";
import InputWrapper from "../components/InputWrapper/InputWrapper";
import { useAuth } from "../hooks/useAuth";
import Form from "./Form";

const ResetPasswordForm = ({ token }) => {
  const { resetPassword } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [state, setstate] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const submitHandler = () => {
    if (state.newPassword !== state.confirmPassword) {
      return toast.warn("Passwords do not match");
    }
    resetPassword.mutate({
      newPassword: state.newPassword,
      token,
    });
  };

  return (
    <Form className="w-full max-w-md mt-20">
      <InputWrapper label="Password" htmlFor="password">
        <Input
          placeholder="New password"
          name="password"
          type="password"
          onInput={(e) => setstate({ ...state, newPassword: e.target.value })}
          value={state.newPassword}
          {...register("password", {
            minLength: 8,
          })}
        />
      </InputWrapper>
      <InputWrapper label="Confirm Password" htmlFor="confirmPassword">
        <Input
          placeholder="Confirm new password"
          name="confirmPassword"
          type="password"
          onInput={(e) =>
            setstate({ ...state, confirmPassword: e.target.value })
          }
          value={state.confirmPassword}
        />
      </InputWrapper>
      <Button
        disabled={!state.newPassword || !state.confirmPassword}
        loading={resetPassword.isLoading}
        onClick={handleSubmit(submitHandler)}
      >
        Reset password
      </Button>
    </Form>
  );
};

export default ResetPasswordForm;
