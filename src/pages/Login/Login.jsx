import React from "react";
import LoginForm from "../../forms/LoginForm";
import { H1 } from "../../components/headings/h1";
import Wrapper from "../../layouts/Wrapper/Wrapper";
const Login = () => {
  return (
    <Wrapper>
      <main className="flex flex-col mt-20 items-center">
        <H1 textSize="md:text-5xl text-3xl text-3xl">Welcome back!</H1>
        <div className="w-full max-w-md mt-10">
          <LoginForm />
        </div>
      </main>
    </Wrapper>
  );
};

export default Login;
