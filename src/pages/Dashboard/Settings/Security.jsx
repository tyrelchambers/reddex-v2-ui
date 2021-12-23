import React from "react";
import { H1 } from "../../../components/headings/h1";
import Subtitle from "../../../components/Subtitle/Subtitle";
import ChangeEmailForm from "../../../forms/ChangeEmailForm";
import ChangePasswordForm from "../../../forms/ChangePasswordForm";
import { H2 } from "../../../components/headings/h2";
import { Button } from "../../../components/Button/Button";
import { useUser } from "../../../hooks/useUser";
import { Link } from "react-location";

const Security = () => {
  const {
    query: { data: user },
  } = useUser();

  if (!user) return null;

  return (
    <>
      <H1>Security</H1>

      <main className="mt-10 max-w-xl">
        <ChangeEmailForm user={user} />
        <hr className="mt-10 mb-10" />
        <ChangePasswordForm />

        <hr className="mt-10 mb-10" />

        <H2>Delete Account</H2>
        <Subtitle className="mt-2 font-bold">
          This action is permanent.
        </Subtitle>

        <p className="text-light mt-2">
          To delete your account, manage your{" "}
          <Link
            to="/dashboard/settings/subscription"
            className="text-blue-500 underline"
          >
            subscription
          </Link>{" "}
          and cancel your membership. Your account will be deleted once your
          membership is cancelled and the billing cycle ends.
        </p>
      </main>
    </>
  );
};

export default Security;
