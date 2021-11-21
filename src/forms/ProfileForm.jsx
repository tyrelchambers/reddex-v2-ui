import React from "react";
import { Button } from "../components/Button/Button";
import Input from "../components/Input/Input";
import InputWrapper from "../components/InputWrapper/InputWrapper";
import Form from "./Form";

const ProfileForm = () => {
  return (
    <Form className="mt-10">
      <InputWrapper
        label="Words per minute"
        htmlFor="wordsPerMinute"
        subLabel="This will help better calculate the time it takes to read a story."
      >
        <Input placeholder="200 wpm" />
      </InputWrapper>
      <Button>Update</Button>
    </Form>
  );
};

export default ProfileForm;
