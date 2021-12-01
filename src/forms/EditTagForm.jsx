import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Button } from "../components/Button/Button";
import InputWrapper from "../components/InputWrapper/InputWrapper";
import { useTag } from "../hooks/useTag";
import Form from "./Form";
import Input from "../components/Input/Input";

const EditNewTagForm = () => {
  const { third_page } = useParams();
  const [state, setState] = useState("");
  const { updateTagMutation, tagQuery } = useTag(third_page);

  useEffect(() => {
    if (tagQuery.data) {
      setState({ ...tagQuery.data });
    }
  }, [third_page, tagQuery.data]);

  const submitHandler = () => {
    updateTagMutation.mutate(state);
  };

  return (
    <Form>
      <InputWrapper label="Name" htmlFor="name">
        <Input
          placeholder="A name for your tag"
          value={state.tag}
          onInput={(e) => setState({ ...state, tag: e.target.value })}
        />
      </InputWrapper>

      <Button onClick={submitHandler}>Save tag</Button>
    </Form>
  );
};

export default EditNewTagForm;
