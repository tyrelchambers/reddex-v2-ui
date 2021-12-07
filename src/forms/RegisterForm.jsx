import React, { useState } from "react";
import Form from "./Form";
import InputWrapper from "../components/InputWrapper/InputWrapper";
import { faAt, faCheck, faKey } from "@fortawesome/pro-duotone-svg-icons";
import Input from "../components/Input/Input";
import { Button } from "../components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LINK_REDDIT, LOGIN } from "../routes/index.routes";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import FormError from "../components/FormError/FormError";
import { toast } from "react-toastify";
import { useAuth } from "../hooks/useAuth";

const RegisterForm = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const { registerMutation } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const inputHandler = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandler = async () => {
    if (state.password !== state.confirmPassword) {
      return toast.error("Passwords do not match");
    }

    await registerMutation.mutate(state);
  };

  return (
    <Form onSubmit={handleSubmit(submitHandler)}>
      <InputWrapper label="Email" htmlFor="email">
        <Input
          placeholder="me@example.com"
          icon={faAt}
          value={state.email}
          onInput={inputHandler}
          {...register("email", {
            required: {
              value: true,
              message: "Email is required",
            },
          })}
        />
        {errors.email && <FormError message={errors.email.message} />}
      </InputWrapper>

      <InputWrapper label="Password" htmlFor="password">
        <Input
          placeholder="***"
          icon={faKey}
          value={state.password}
          onInput={inputHandler}
          type="password"
          {...register("password", {
            required: {
              value: true,
              message: "Password is required",
            },
          })}
        />
        {errors.password && <FormError message={errors.password.message} />}
      </InputWrapper>
      <InputWrapper label="Confirm Password" htmlFor="confirmPassword">
        <Input
          placeholder="***"
          icon={faKey}
          value={state.confirmPassword}
          onInput={inputHandler}
          type="password"
          {...register("confirmPassword", {
            required: {
              value: true,
              message: "Password confirmation is required",
            },
          })}
        />
        {errors.confirmPassword && (
          <FormError message={errors.confirmPassword.message} />
        )}
      </InputWrapper>

      <Button type="submit">
        <FontAwesomeIcon icon={faCheck} className="mr-2" />
        Sign up
      </Button>
      <Link to={LOGIN} className="underline text-gray-500">
        Already have an account?
      </Link>
    </Form>
  );
};

export default RegisterForm;
