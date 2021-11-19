import React from "react";
import { Button } from "../components/Button/Button";
import Input from "../components/Input/Input";
import InputWrapper from "../components/InputWrapper/InputWrapper";
import Form from "./Form";

const ChangePasswordForm = () => {
  return (
    <Form>
      <InputWrapper label="Current Password">
        <Input placeholder="***" name="currentPassword" />
      </InputWrapper>

      <InputWrapper label="New Password">
        <Input placeholder="***" name="newPassword" />
      </InputWrapper>

      <InputWrapper label="Confirm New Password">
        <Input placeholder="***" name="confirmNewPassword" />
      </InputWrapper>

      <div className="w-full flex justify-end">
        <Button>Change Password</Button>
      </div>
    </Form>
  );
};

export default ChangePasswordForm;
