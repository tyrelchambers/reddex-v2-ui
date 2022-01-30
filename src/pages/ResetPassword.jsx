import React from "react";
import { useSearch } from "react-location";
import { H1 } from "../components/headings/h1";
import ResetPasswordForm from "../forms/ResetPasswordForm";
import Wrapper from "../layouts/Wrapper/Wrapper";

const ResetPassword = () => {
  const { token } = useSearch();

  return (
    <Wrapper>
      <main className="max-w-screen-xl ml-auto mr-auto mt-10 flex flex-col items-center p-4">
        <H1 className="text-center" textSize="md:text-5xl text-3xl text-3xl">
          Reset your password?
        </H1>
        <p className="max-w-lg w-full text-light mt-6 text-center">
          Enter your email and we will send you a link to the email provided to
          reset your password.
        </p>

        {token && <ResetPasswordForm token={token} />}
      </main>
    </Wrapper>
  );
};

export default ResetPassword;
