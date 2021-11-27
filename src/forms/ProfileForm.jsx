import React, { useState } from "react";
import { Button } from "../components/Button/Button";
import Input from "../components/Input/Input";
import InputWrapper from "../components/InputWrapper/InputWrapper";
import Form from "./Form";
import { useUser } from "../hooks/useUser";

const ProfileForm = ({ user }) => {
  const [state, setState] = useState({ ...user.Profile });
  const { update } = useUser();

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    update.mutate(state);
  };

  return (
    <Form className="mt-10">
      <InputWrapper
        label="Words per minute"
        htmlFor="wordsPerMinute"
        subLabel="This will help better calculate the time it takes to read a story."
      >
        <Input
          placeholder="200 wpm"
          type="number"
          name="words_per_minute"
          value={state.words_per_minute}
          onInput={(e) => handleChange(e)}
        />
      </InputWrapper>
      <Button onClick={handleSubmit}>Update</Button>
    </Form>
  );
};

export default ProfileForm;
