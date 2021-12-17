import {
  faAt,
  faKey,
  faRightToBracket,
} from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button } from "../components/Button/Button";
import Input from "../components/Input/Input";
import InputWrapper from "../components/InputWrapper/InputWrapper";
import Form from "./Form";
import { useAuth } from "../hooks/useAuth";
import { useForm } from "react-hook-form";
import FormError from "../components/FormError/FormError";
import { Link } from "react-location";

const LoginForm = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const { loginMutation } = useAuth();

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

  const submitHandler = () => {
    loginMutation.mutate(state);
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

      <Button type="submit">
        <FontAwesomeIcon icon={faRightToBracket} className="mr-2" /> Login
      </Button>

      <div className="flex items-center">
        <input type="checkbox" name="remember_me" className="mr-4" />
        <p className="subtitle">Remember me</p>
      </div>

      <Link to="/register" className="underline text-gray-500 ">
        Don't have an account?
      </Link>
      <Link to="/forgot-password" className="underline text-gray-500">
        Forgot your password?
      </Link>
    </Form>
  );
};

export default LoginForm;
