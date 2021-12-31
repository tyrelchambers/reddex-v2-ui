import React, { useEffect } from "react";
import { useNavigate, useSearch } from "react-location";
import { toast } from "react-toastify";
import styled from "styled-components";
import { H1 } from "../../components/headings/h1";
import RegisterForm from "../../forms/RegisterForm";
import Wrapper from "../../layouts/Wrapper/Wrapper";
import { H2 } from "../../components/headings/h2";
import blob from "../../assets/images/blob.svg";
import { termPricing } from "../../constants/pricing";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/pro-duotone-svg-icons";

const StyledWrapper = styled.div`
  height: 100%;
  min-height: 500px;
  .aside {
    background-color: ${(props) => props.theme.backgroundSecondary};
  }
`;

const Register = () => {
  const { plan } = useSearch();
  const navigate = useNavigate();

  return (
    <Wrapper>
      <main className="flex flex-col mt-20 items-center">
        <H1 className="  text-center " textSize="text-5xl">
          It'll be nice to have you onboard!
        </H1>
        <StyledWrapper className="w-full max-w-screen-lg mt-10 flex gap-10 h-">
          <RegisterForm plan={plan} />
          <aside className="aside w-1/2 rounded-md p-4 relative overflow-hidden shadow-md">
            <div className="z-10 absolute">
              <H2 textSize="text-lg">🔥 Your 7-day Pro Trial</H2>
              <p className=" mt-6 text-light">
                Awesome! Once you sign up, you'll be able to access all of the{" "}
                <span className="font-bold">pro features</span> of the app for{" "}
                <span className="font-bold">seven days</span>!
              </p>
              <ul className="mt-6">
                {termPricing["pro"].features.map((item) => (
                  <li className="mt-2" key={item.name}>
                    <p className="text-light mt-2">
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        className="mr-2 text-green-500"
                      />
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-light">
                To continue using the app, you'll need to choose a plan when the
                trial ends.
              </p>
            </div>
            <img
              src={blob}
              alt=""
              className="absolute bottom-[-250px] left-0 scale-150 opacity-10"
            />
          </aside>
        </StyledWrapper>
      </main>
    </Wrapper>
  );
};

export default Register;
