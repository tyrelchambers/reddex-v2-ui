import React, { useState } from "react";
import Form from "../forms/Form";
import InputWrapper from "../components/InputWrapper/InputWrapper";
import Input from "../components/Input/Input";
import { Button } from "../components/Button/Button";
import { useTag } from "../hooks/useTag";

const TagForm = () => {
  const { saveTagMutation } = useTag();
  const [state, setState] = useState("");

  const submitHandler = () => {
    saveTagMutation.mutate(state);
  };

  return (
    <Form>
      <InputWrapper label="Name" htmlFor="name">
        <Input
          placeholder="A name for your tag"
          value={state.value}
          onInput={(e) => setState(e.target.value)}
        />
      </InputWrapper>

      <Button onClick={submitHandler}>Save tag</Button>
    </Form>
  );
};

export default TagForm;
