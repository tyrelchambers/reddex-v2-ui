import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Button } from "../components/Button/Button";
import FormError from "../components/FormError/FormError";
import Input from "../components/Input/Input";
import InputWrapper from "../components/InputWrapper/InputWrapper";
import { useUser } from "../hooks/useUser";
import Form from "./Form";

const ChangePasswordForm = () => {
  const { changePassword } = useUser();
  const [state, setstate] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const disabledbtn = !(
    state.newPassword ||
    state.confirmPassword ||
    state.currentPassword
  );

  const submitHandler = () => {
    if (state.newPassword !== state.confirmPassword) {
      return toast.warn("Passwords do not match");
    }

    if (!state.currentPassword) {
      return toast.warn("Please enter your current password");
    }

    changePassword.mutate(state);
  };

  return (
    <Form>
      <InputWrapper label="Current Password">
        <Input
          placeholder="***"
          name="currentPassword"
          type="password"
          value={state.currentPassword}
          onInput={(e) =>
            setstate({ ...state, [e.target.name]: e.target.value })
          }
        />
        {errors.currentPassword && (
          <FormError message={errors.currentPassword.message} />
        )}
      </InputWrapper>

      <InputWrapper label="New Password">
        <Input
          placeholder="***"
          name="newPassword"
          type="password"
          autoFill="new-password"
          value={state.newPassword}
          onInput={(e) =>
            setstate({ ...state, [e.target.name]: e.target.value })
          }
          {...register("newPassword", {
            required: {
              value: true,
              message: "Password is required",
            },
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
            maxLength: {
              value: 255,
              message: "Password must be less than 255 characters",
            },
          })}
        />
        {errors.newPassword && (
          <FormError message={errors.newPassword.message} />
        )}
      </InputWrapper>

      <InputWrapper label="Confirm New Password">
        <Input
          placeholder="***"
          name="confirmPassword"
          type="password"
          autoFill="new-password"
          value={state.confirmPassword}
          onInput={(e) =>
            setstate({ ...state, [e.target.name]: e.target.value })
          }
        />
      </InputWrapper>

      <div className="w-full flex justify-end">
        <Button
          disabled={disabledbtn}
          loading={changePassword.isLoading}
          onClick={handleSubmit(submitHandler)}
          className="w-full sm:w-auto"
        >
          Change Password
        </Button>
      </div>
    </Form>
  );
};

export default ChangePasswordForm;
