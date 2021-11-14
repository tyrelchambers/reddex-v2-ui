import React from "react";
import Form from "./Form";
import InputWrapper from "../components/InputWrapper/InputWrapper";
import { faAt, faCheck, faKey } from "@fortawesome/pro-duotone-svg-icons";
import Input from "../components/Input/Input";
import { Button } from "../components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LOGIN } from "../routes/index.routes";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  return (
    <Form>
      <InputWrapper label="Email" htmlFor="email">
        <Input placeholder="me@example.com" icon={faAt} />
      </InputWrapper>

      <InputWrapper label="Password" htmlFor="password">
        <Input placeholder="***" icon={faKey} />
      </InputWrapper>
      <InputWrapper label="Confirm Password" htmlFor="confirmPassword">
        <Input placeholder="***" icon={faKey} />
      </InputWrapper>

      <Button>
        <FontAwesomeIcon icon={faCheck} className="mr-2" /> Sign up
      </Button>
      <Link to={LOGIN} className="underline text-gray-500">
        Already have an account?
      </Link>
    </Form>
  );
};

export default RegisterForm;
