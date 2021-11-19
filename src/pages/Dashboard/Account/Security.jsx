import React from "react";
import { H1 } from "../../../components/headings/h1";
import Subtitle from "../../../components/Subtitle/Subtitle";
import ChangeEmailForm from "../../../forms/ChangeEmailForm";
import ChangePasswordForm from "../../../forms/ChangePasswordForm";
import { H2 } from "../../../components/headings/h2";
import { Button } from "../../../components/Button/Button";

const Security = () => {
  return (
    <div>
      <H1>Security</H1>

      <main className="mt-10 max-w-md">
        <ChangeEmailForm />
        <hr className="mt-10 mb-10" />
        <ChangePasswordForm />

        <hr className="mt-10 mb-10" />

        <H2>Danger Zone</H2>
        <Subtitle className="mt-2">
          This action is permanent. This will delete your account forever.
        </Subtitle>

        <Button variant="danger" className="w-full mt-6">
          Delete Account
        </Button>
      </main>
    </div>
  );
};

export default Security;
