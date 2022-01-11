import React, { useState } from "react";
import Form from "./Form";
import InputWrapper from "../components/InputWrapper/InputWrapper";
import Input from "../components/Input/Input";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../components/Button/Button";
import { toast } from "react-toastify";
import { useUser } from "../hooks/useUser";

const ChangeEmailForm = ({ user }) => {
  const [state, setState] = useState({
    email: user.email,
  });
  const { changeEmail } = useUser();

  const handleSubmit = () => {
    if (state.email === user.email) {
      return toast.warn("Email is the same");
    }

    if (!state.email) {
      return toast.warn("Email is required");
    }

    changeEmail.mutate(state);
  };
  return (
    <Form>
      <InputWrapper label="Email" htmlFor="email">
        <Input
          placeholder="user@example.com"
          name="email"
          icon={faAt}
          value={state.email}
          onInput={(e) => setState({ ...state, email: e.target.value })}
        />
      </InputWrapper>
      <div className="w-full flex justify-end">
        <Button onClick={handleSubmit} className="w-full sm:w-auto">
          Change Email
        </Button>
      </div>
    </Form>
  );
};

export default ChangeEmailForm;
