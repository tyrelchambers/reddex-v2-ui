import React from "react";
import Form from "./Form";
import InputWrapper from "../components/InputWrapper/InputWrapper";
import Input from "../components/Input/Input";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../components/Button/Button";

const ChangeEmailForm = ({ user }) => {
  return (
    <Form>
      <InputWrapper label="Email" htmlFor="email">
        <Input
          placeholder="user@example.com"
          name="email"
          icon={faAt}
          value={user.email}
        />
      </InputWrapper>
      <div className="w-full flex justify-end">
        <Button>Change Email</Button>
      </div>
    </Form>
  );
};

export default ChangeEmailForm;
