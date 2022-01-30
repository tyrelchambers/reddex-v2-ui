import React from "react";
import { H1 } from "../components/headings/h1";
import ForgotPasswordForm from "../forms/ForgotPasswordForm";
import Wrapper from "../layouts/Wrapper/Wrapper";

const ForgotPassword = () => {
  return (
    <Wrapper>
      <main className="max-w-screen-xl ml-auto mr-auto mt-10 flex flex-col items-center p-4">
        <H1 className="text-center" textSize="md:text-5xl text-3xl text-3xl">
          Forgot your password?
        </H1>
        <p className="max-w-lg w-full text-light mt-6 text-center">
          Enter your email and we will send you a link to the email provided to
          reset your password.
        </p>
        <ForgotPasswordForm />
      </main>
    </Wrapper>
  );
};

export default ForgotPassword;
