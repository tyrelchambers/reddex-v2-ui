import React from "react";
import { useParams } from "react-router-dom";
import { H1 } from "../../components/headings/h1";
import RegisterForm from "../../forms/RegisterForm";
import Wrapper from "../../layouts/Wrapper/Wrapper";
const Register = () => {
  const { plan } = useParams();

  return (
    <Wrapper>
      <main className="flex flex-col mt-20 items-center">
        <H1 className="text-5xl max-w-lg text-center ">
          It'll be nice to have you onboard!
        </H1>
        <div className="w-full max-w-md mt-10">
          <RegisterForm />
        </div>
      </main>
    </Wrapper>
  );
};

export default Register;
