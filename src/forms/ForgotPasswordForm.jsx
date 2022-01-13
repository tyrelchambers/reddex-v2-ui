import React, { useState } from "react";
import { Button } from "../components/Button/Button";
import Input from "../components/Input/Input";
import InputWrapper from "../components/InputWrapper/InputWrapper";
import { useAuth } from "../hooks/useAuth";
import Form from "./Form";

const ForgotPasswordForm = () => {
  const { forgotPassword } = useAuth();
  const [email, setEmail] = useState("");

  const submitHandler = () => {
    forgotPassword.mutate(email);
  };

  return (
    <Form className="w-full max-w-md mt-20">
      <InputWrapper label="Email" htmlFor="email">
        <Input
          type="email"
          placeholder="Your email"
          name="email"
          onInput={(e) =>
            setEmail(e.target.value.replace(/\s/g, "").toLowerCase())
          }
          value={email}
        />
      </InputWrapper>
      <Button
        disabled={!email}
        loading={forgotPassword.isLoading}
        onClick={submitHandler}
      >
        Send link
      </Button>
    </Form>
  );
};

export default ForgotPasswordForm;
