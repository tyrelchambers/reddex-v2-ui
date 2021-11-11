import {
  faAt,
  faKey,
  faRightToBracket,
} from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { FORGOT_PASSWORD, REGISTER } from "../../routes/index.routes";
import { Button } from "../Button/Button";
import Input from "../Input/Input";
import InputWrapper from "../InputWrapper/InputWrapper";
import Form from "./Form";

const LoginForm = () => {
  return (
    <Form>
      <InputWrapper label="Email" htmlFor="email">
        <Input placeholder="me@example.com" icon={faAt} />
      </InputWrapper>

      <InputWrapper label="Password" htmlFor="password">
        <Input placeholder="***" icon={faKey} />
      </InputWrapper>

      <Button>
        <FontAwesomeIcon icon={faRightToBracket} className="mr-2" /> Login
      </Button>

      <Link to={REGISTER} className="underline text-gray-500">
        Don't have an account?
      </Link>
      <Link to={FORGOT_PASSWORD} className="underline text-gray-500">
        Forgot your password?
      </Link>
    </Form>
  );
};

export default LoginForm;
